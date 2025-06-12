import { useEffect, useState } from 'react';
import { setLocation } from '../genralCall';


interface LocationPosition {
    latitude: number;
    longitude: number;
    accuracy: number;
}

const useLocation = (session: any) => {
    const [location, setLocationState] = useState<LocationPosition | null>(null);
    const [shouldSendLocation, setShouldSendLocation] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getPermissionAndLocation = async () => {
            if (!navigator.geolocation) {
                setError('Geolocation is not supported by your browser');
                return;
            }

            // Check for permissions API support
            if (navigator.permissions) {
                try {
                    const permissionStatus = await navigator.permissions.query({ name: 'geolocation' as PermissionName });
                    if (permissionStatus.state === 'denied') {
                        setError('Location permission denied');
                        return;
                    }
                } catch (err) {
                    // Permissions API not available or failed, fallback to geolocation prompt
                }
            }

            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude, accuracy } = position.coords;
                    setLocationState({ latitude, longitude, accuracy });
                    // Store location in localStorage
                    const prevLocationStr = localStorage.getItem('user_location');

                    if (prevLocationStr) {
                        try {
                            const prevLocation: LocationPosition = JSON.parse(prevLocationStr);
                            // Haversine formula to calculate distance in meters
                            const toRad = (value: number) => (value * Math.PI) / 180;
                            const R = 6371000; // Earth radius in meters
                            const dLat = toRad(latitude - prevLocation.latitude);
                            const dLon = toRad(longitude - prevLocation.longitude);
                            const lat1 = toRad(prevLocation.latitude);
                            const lat2 = toRad(latitude);

                            const a =
                                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                                Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
                            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                            const distance = R * c;

                            if (distance <= 200) {
                                setShouldSendLocation(false);
                            }
                        } catch (e) {
                            // Ignore parse errors and proceed to send location
                        }
                    }

                    // Save current location for future checks
                    localStorage.setItem('user_location', JSON.stringify({ latitude, longitude, accuracy }));
                    console.log(shouldSendLocation ? 'Sending location to server' : 'Not sending location, within 200m of previous location');
                    if (!shouldSendLocation) return;
                    const idToken = (session as any)?.id_token;
                    if (session && idToken) {
                        const locationString = `${latitude},${longitude},${accuracy.toFixed(2)}`;
                        try {
                            const response = await setLocation(idToken, locationString);
                            console.log('Location sent successfully:', response);
                            if(response.update_required == true){
                                if (window.confirm('Your location seems outdated. Do you want to update your location?')) {
                                    // Optionally, you can trigger another location update or handle as needed
                                    await setLocation(idToken, `${latitude},${longitude},${accuracy.toFixed(2)}`, { update: 'true' });
                                }
                            }
                        } catch (apiError) {
                            setError('Error sending location to server');
                        }
                    }
                },
                (geoError) => {
                    setError('Error getting location: ' + geoError.message);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0,
                }
            );
        };

        getPermissionAndLocation();
    }, [session, setLocation]);

    return { location, error };
};

export default useLocation;
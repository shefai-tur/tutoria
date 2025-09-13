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

    // Check for permission
    if (navigator.permissions) {
        try {
            const permissionStatus = await navigator.permissions.query({ name: 'geolocation' as PermissionName });
            if (permissionStatus.state === 'denied') {
                setError('Location permission denied');
                return;
            }
        } catch (err) {
            // ignore if permissions API not supported
        }
    }

    // Force high-accuracy one-time location fix before watch
    // navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //         console.log("Initial high-accuracy fix:", position.coords);
    //     },
    //     (error) => {
    //         setError('Error getting initial location: ' + error.message);
    //     },
    //     {
    //         enableHighAccuracy: true,
    //         timeout: 60000, // allow up to 1 min for GPS
    //         maximumAge: 0,
    //     }
    // );

    // Continuous tracking
    const geoId = navigator.geolocation.watchPosition(
        async (position) => {
            const { latitude, longitude, accuracy } = position.coords;
            console.log("Got position:", latitude, longitude, "Accuracy:", accuracy);

            // Ignore low-accuracy fixes (>50m)
            if (accuracy > 50) {
                setError("Location accuracy too low, waiting for better fix...");
                return;
            }

            setLocationState({ latitude, longitude, accuracy });

            // Previous location check
            const prevLocationStr = localStorage.getItem('user_location');
            if (prevLocationStr) {
                try {
                    const prevLocation: LocationPosition = JSON.parse(prevLocationStr);

                    // Haversine distance
                    const toRad = (val: number) => (val * Math.PI) / 180;
                    const R = 6371000;
                    const dLat = toRad(latitude - prevLocation.latitude);
                    const dLon = toRad(longitude - prevLocation.longitude);
                    const lat1 = toRad(prevLocation.latitude);
                    const lat2 = toRad(latitude);

                    const a = Math.sin(dLat / 2) ** 2 +
                        Math.sin(dLon / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);
                    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                    const distance = R * c;

                    if (distance <= 200) {
                        setShouldSendLocation(false);
                    }
                } catch (e: any) {
                    setError(e.meassage);
                }
            }

            // Save latest location
            localStorage.setItem('user_location', JSON.stringify({ latitude, longitude, accuracy }));

            if (!shouldSendLocation) {
                console.log("Not sending, within 200m");
                return;
            }

            const idToken = (session as any)?.id_token;
            if (session && idToken) {
                const locationString = `${latitude},${longitude},${accuracy.toFixed(2)}`;
                try {
                    const response = await setLocation(idToken, locationString);
                    console.log("Location sent:", response);

                    if (response.update_required) {
                        if (window.confirm("Your location seems outdated. Update now?")) {
                            await setLocation(idToken, locationString, { update: "true" });
                        }
                    }
                } catch (apiError) {
                    setError("Error sending location to server");
                }
            }
        },
        (geoError) => {
            setError("Error getting location: " + geoError.message);
        },
        {
            enableHighAccuracy: true,
            timeout: 60000,
            maximumAge: 0,
        }
    );

    return () => navigator.geolocation.clearWatch(geoId);
};


        getPermissionAndLocation();
    }, [session, setLocation]);

    return { location, error };
};

export default useLocation;
import { useEffect, useState } from 'react';
import { getLocation, setLocation } from '../genralCall';


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
        if (!session) return;
        const getServerLocation = async () => {
            const idToken = (session as any)?.id_token;
            if (idToken && session) {
                const loc = await getLocation(idToken);
                if (loc) {
                    setLocationState(loc);
                    if (loc !== null) {
                        localStorage.setItem('user_location', JSON.stringify({ latitude: loc.latitude, longitude: loc.longitude, accuracy: loc.accuracy }));
                    }
                }
            }
        };
        getServerLocation();
    }, [session]);

    useEffect(() => {
        if (!session) return;
        let geoId: number | null = null;
        let permissionChecked = false;
        let cancelled = false;

        const getPermissionAndLocation = async () => {
            if (!navigator.geolocation) {
                setError('Geolocation is not supported by your browser');
                return;
            }

            // Only check permission once per effect
            if (!permissionChecked && navigator.permissions) {
                try {
                    const permissionStatus = await navigator.permissions.query({ name: 'geolocation' as PermissionName });
                    permissionChecked = true;
                    if (permissionStatus.state === 'denied') {
                        setError('Location permission denied');
                        return;
                    }
                } catch (err) {
                    // Removed console.error
                }
            }

            geoId = navigator.geolocation.watchPosition(
                async (position) => {
                    if (cancelled) return;
                    const { latitude, longitude, accuracy } = position.coords;

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
                            setError(e.message);
                        }
                    }

                    // Save latest location
                    localStorage.setItem('user_location', JSON.stringify({ latitude, longitude, accuracy }));

                    if (!shouldSendLocation) {
                        return;
                    }

                    const idToken = (session as any)?.id_token;
                    if (session && idToken) {
                        const locationString = `${latitude},${longitude},${accuracy.toFixed(2)}`;
                        try {
                            const response = await setLocation(idToken, locationString);
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
        };

        getPermissionAndLocation();

        return () => {
            cancelled = true;
            if (geoId !== null) navigator.geolocation.clearWatch(geoId);
        };
    }, [session]);

    return { location, error };
};

export default useLocation;
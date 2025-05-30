'use client'
import { connectToServer } from '@/utils/connect';
 import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';



 export default function Home() {
   const { data: session } = useSession();
   const [servData, setServData] = useState<any>(null);

   useEffect(() => {
    const verifyConnection = async () => {
      const idToken = (session as any)?.id_token;
      if(session && idToken) {
        const response = await connectToServer(idToken)
        .then(data => {
          setServData(data.detail);
      }).catch(error => console.log('Error connecting to server:', error));
      
    }}
    verifyConnection();

   },[session]);

   useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('Current position:', position);
        // You can send this position to your server or use it as needed
      },
      (error) => {
        console.error('Error getting location:', error);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    )
   }, []);
  

   if (session) {
    console.log('Session:', session);
     return (
       <div>
         Signed in as {session.user?.email} <br />
          <div>
            <h3>Server Data:</h3>
            {servData ? (
              <pre>{servData}</pre>
            ) : (
              <p>Loading server data...</p>
            )}
            </div>
         <button onClick={() => signOut()}>Sign out</button>
       </div>
     );
   }

   return (
     <div>
       Not signed in <br />
       <button onClick={() => signIn('google')}>Sign in with Google</button>
     </div>
   );
 }


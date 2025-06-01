'use client'
import { connectToServer } from '@/utils/genralCall';
import useLocation from '@/utils/Hooks/LocationHook';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';



 export default function Home() {
   const { data: session } = useSession();
   const [servData, setServData] = useState<any>(null);
   const {location, error} = useLocation(session);

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
         <button onClick={() => signOut()} className='bg-amber-400 text-slate-50 rounded-md p-2 outline cursor-pointer'>Sign out</button>
       </div>
     );
   }

   return (
     <div>
       Not signed in <br />
       <button onClick={() => signIn()} className='bg-green-400 text-slate-50 rounded-md p-2 outline cursor-pointer'>Sign in</button>
     </div>
   );
 }


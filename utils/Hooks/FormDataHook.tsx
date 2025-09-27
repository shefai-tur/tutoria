'use client'
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";    
import { getGradesbyMedium, getMediums } from "../fetchFormInfo";
import { gradeType, mediumType } from "../Type";



export const useMedium = () => {
    const [mediums, setMediums] = useState<[] | mediumType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const {data: session} = useSession();


     useEffect(() => {
        const idToken = (session as any)?.id_token;
        async function fetchData() {
            if (session && idToken) {
                const response = await getMediums(idToken)
                .then((data: mediumType[]) => {
                    setMediums(data);
                }).catch(error => console.log('Error connecting to server:', error));
            }
        }    
        fetchData();    

    }, [session]);

   

   return { mediums, loading, error };
};

export const useGradesByMedium = ({medium_id}: {medium_id: string[]}) => {
    const [grades, setGrades] = useState<[] | gradeType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const {data: session} = useSession();

     useEffect(() => {
        const idToken = (session as any)?.id_token;
        async function fetchGrades() {
            setLoading(true);
            setError(null);
            setGrades([]);
            if (session && idToken) {
                const response = await getGradesbyMedium(idToken, {medium_id})
                .then((data: gradeType[]) => {
                    setGrades(data);
                }).catch((error: any) => {
                    console.log('Error connecting to server:', error);
                    setError('Failed to fetch grades');
                }).finally(() => {
                    setLoading(false);
                }); 
            }
        }
        if(medium_id && medium_id.length > 0) {
            fetchGrades();
        }else{
            setGrades([]);
        }

    }, [medium_id, session]);
    return { grades, loading, error };
};
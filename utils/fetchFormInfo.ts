'use server';
import { FetchApi } from "./FetchApi";

export async function getGradesbyMedium(token: string,  body: {medium_id: string[]} ) {
    if (token) {
        try {
            const response = await FetchApi.post('/grade-by-medium/',body,{'Authorization': `Bearer ${token}`}, {});
         
            return response;
        } catch (error) {
            console.error('Error connecting to server:', error);
            throw error;
        }
    } else {
        console.warn('No token found, skipping server connection');
        return null;
    }
}

export async function getMediums(token: string) {
    if (token) {
        try {
            const response = await FetchApi.get('/mediums/', {}, {'Authorization': `Bearer ${token}`});
            return response;
        }   catch (error) {
            console.error('Error connecting to server:', error);
            throw error;
        }
    } else {
        console.warn('No token found, skipping server connection');
        return null;
    }
}


export async function getSubjects(token: string,  body: {grade_id: string[]} ) {
    if (token) {
        try {
            const response = await FetchApi.post('/subject-by-grade/',body,{'Authorization': `Bearer ${token}`}, {});
         
            return response;
        } catch (error) {
            console.error('Error connecting to server:', error);
            throw error;
        }
    } else {
        console.warn('No token found, skipping server connection');
        return null;
    }
}
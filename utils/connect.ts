'use server';

import { FetchApi } from "./FetchApi";
import { Session } from "inspector/promises";

export async function connectToServer(token: string) {
    if (token) {
        try {
            const response = await FetchApi.get('/protected',{},{'Authorization': `Bearer ${token}`});
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
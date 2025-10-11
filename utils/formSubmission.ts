'use server';

import { FetchApi } from "./FetchApi";
import { z } from "zod";
import { availabilitySchema, formSchema } from "../formSchema";
type FormType = z.infer<typeof formSchema>;


export async function createTeacher(token: string, data: FormType) {
    const parsed = formSchema.safeParse(data);
    if (!parsed.success) {
        throw new Error("Invalid form data");
    }
    if (token) {
        try {
            const response = await FetchApi.post("/teacher-profile/", data, {'Authorization': `Bearer ${token}`}, {});
            return response;
        } catch (error) {
            throw new Error((error as {message?: string} | any).message || "Error creating teacher");
        }
    } else {
        console.error("No token provided");
    }
    return null;
}

export async function createAvailability(token: string, data: any) {
    data.map((slot: any) => {
        const parsed = availabilitySchema.safeParse(slot);
        if (!parsed.success) {
            throw new Error("Invalid availability data", {cause: parsed.error});
        }
    })
    
    if (token) {
        try {
            const response = await FetchApi.post("/availability/", data, {'Authorization': `Bearer ${token}`}, {});
            return response;
        } catch (error) {
            throw new Error((error as {message?: string} | any).message || "Error creating availability");
        }
    } else {
        console.error("No token provided");
    }
    return null;
}



export async function updateTeacher (token: string,id: string, data: FormType) {
    const parsed = formSchema.safeParse(data);
    if (!parsed.success) {
        throw new Error("Invalid form data");
    }
    if (token) {
        try {
            const response = await FetchApi.put(`/teacher-profile/${id}`, data, {'Authorization': `Bearer ${token}`});
            return response;
        } catch (error) {
            throw new Error((error as {message?: string} | any).message || "Error creating teacher");
        }
    } else {
        console.error("No token provided");
    }
    return null;
}

export async function updateAvailability(token: string, id:string, data: any) {
    data.map((slot: any) => {
        const parsed = availabilitySchema.safeParse(slot);
        if (!parsed.success) {
            throw new Error("Invalid availability data", {cause: parsed.error});
        }
    })
    
    if (token) {
        try {
            const response = await FetchApi.put(`/availability/${id}`, data, {'Authorization': `Bearer ${token}`});
            return response;
        } catch (error) {
            throw new Error((error as {message?: string} | any).message || "Error creating availability");
        }
    } else {
        console.error("No token provided");
    }
    return null;
}
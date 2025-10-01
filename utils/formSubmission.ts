'use server';

import { FetchApi } from "./FetchApi";
import { z } from "zod";
import { formSchema } from "../formSchema";
type FormType = z.infer<typeof formSchema>;


export async function createTeacher(token: string, data: FormType) {
    if (token) {
        try {
            const response = await FetchApi.post("/teacher/create/", data, {'Authorization': `Bearer ${token}`}, {});
            return response;
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    } else {
        console.error("No token provided");
    }
    return null;
}

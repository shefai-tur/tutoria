import {z} from 'zod';

export const formSchema = z.object({
    bio: z.string().min(10, 'Bio must be at least 10 characters long').max(500, 'Bio must be at most 500 characters long'),
    min_salary: z.number().min(500, 'Minimum salary must be at least 500'),
    experience_years: z.number(),
    gender: z.enum(['male', 'female', 'other']),
    teaching_mode: z.enum(['online', 'offline', 'both']),
    subject_list: z.array(z.string()).min(1, 'At least one subject must be selected'),
    medium_list: z.array(z.string()).min(1, 'At least one subject must be selected'),
    grade_list: z.array(z.string()).min(1, 'At least one grade must be selected')
});
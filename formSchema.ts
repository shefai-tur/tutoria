import {z} from 'zod';

export const formSchema = z.object({
    bio: z.string().min(10, 'Bio must be at least 10 characters long').max(500, 'Bio must be at most 500 characters long'),
    min_salary: z.number().min(500, 'Minimum salary must be at least 500'),
    experience_years: z.number(),
    gender: z.enum(['male', 'female', 'other']),
    teaching_mode: z.enum(['online', 'offline', 'both']),
    subject_list: z.array(z.string()).min(1, 'At least one subject must be selected'),
    medium_list: z.array(z.string()).min(1, 'At least one subject must be selected'),
    grade_list: z.array(z.string()).min(1, 'At least one grade must be selected'),
    preferred_distance: z.number().min(0.5, 'Preferred distance must be at least 0.5 km').max(15, 'Preferred distance must be at most 15 km'),
});

export const availabilitySchema = z.object({
    start: z.string().refine((val) => {
        // Check if val matches HH:mm format (24-hour)
        return /^([01]\d|2[0-3]):([0-5]\d)$/.test(val);
    }, {
        message: "Invalid start time format (expected HH:mm)",
    }),
    end: z.string().refine((val) => {
        // Check if val matches HH:mm format (24-hour)
        return /^([01]\d|2[0-3]):([0-5]\d)$/.test(val);
    }, {
        message: "Invalid start time format (expected HH:mm)",
    }),
    days: z.array(z.string()).min(1, 'At least one day must be selected'),
});

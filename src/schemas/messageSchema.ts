import {z} from 'zod'

export const usernameValidation=z
    .string()
    .min(2,"Username must be 2 characters")
    .max(20,"Username must not be more than 20 characters")



    
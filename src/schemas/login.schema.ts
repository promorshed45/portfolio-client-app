import * as z from "zod";

export const loginValidationSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Please enter a valid email")
    .min(1, "Email is required"),
  password: z
    .string()
    .trim()
    .min(1, "Password must be at least 6 characters")
    .nonempty("Password is required"),
});


export const changePasswordValidationSchema = z.object({
  oldPassword: z
    .string()
    .trim()
    .min(1, "Please enter correct Password ")
    .nonempty("Password is required"),
    newPassword: z
    .string()
    .trim()
    .min(1, "Password must be at least 6 characters")
    .nonempty("Password is required"),
});




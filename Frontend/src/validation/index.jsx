import { z } from "zod";

export const signUpFormSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please Provide us a valid email.",
  }),
  password: z.string().min(8, {
    message: "Password musch be at least 8 characters.",
  }),
});

export const signInFormSchema = z.object({
  email: z.string().email({
    message: "Please Provide us a valid email.",
  }),
  password: z.string().min(8, {
    message: "Password musch be at least 8 characters.",
  }),
});

export const noteSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export const todoSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
});

export const listSchema = z.object({
  title: z.string().min(1, "List cannot be empty"),
  color: z.string().min(1, "Color is required"),
});

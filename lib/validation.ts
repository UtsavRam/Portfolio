import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(100, { message: "Name must not exceed 100 characters." }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters long." })
    .max(150, { message: "Subject must not exceed 150 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." })
    .max(3000, { message: "Message must not exceed 3000 characters." }),
  hp_website: z.string().optional(), // Honeypot field for anti-spam
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

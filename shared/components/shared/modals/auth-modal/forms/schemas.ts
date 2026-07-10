import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(4, { message: "Введіть коректний пароль" });

export const formLoginSchema = z.object({
  email: z.email({ message: "Введіть коректну пошту" }),
  password: passwordSchema,
});

export const formRegisterSchema = formLoginSchema
  .extend({
    fullName: z.string().min(2, { message: "Введите имя и фамилию" }),
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Паролі не співпадають",
    path: ["confirmPassword"],
  });

  
export type TFormLoginValues = z.infer<typeof formLoginSchema>;
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;
import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email().min(3, "O email é obrigatório"),
  password: z.string().min(3, "A senha é obrigatória"),
});

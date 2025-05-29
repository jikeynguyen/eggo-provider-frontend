import * as z from 'zod';
import { emailSchema, passwordSchema } from './common-schema.zod';

const LoginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type TLoginFormSchema = z.infer<typeof LoginSchema>;

export default LoginSchema;

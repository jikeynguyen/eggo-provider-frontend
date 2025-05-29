import { i18nValidation } from '@/hooks';
import * as z from 'zod';
import {
  confirmPasswordSchema,
  emailSchema,
  firstNameSchema,
  lastNameSchema,
  passwordSchema,
  phoneSchema,
} from './common-schema.zod';

const RegisterSchema = z
  .object({
    firstName: firstNameSchema,
    lastName: lastNameSchema,
    email: emailSchema,
    phone: phoneSchema,
    password: passwordSchema,
    confirmPassword: confirmPasswordSchema,
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: i18nValidation('ConfirmPassword.Mismatch'),
        path: ['confirmPassword'],
      });
    }
  });

export type TRegisterFormSchema = z.infer<typeof RegisterSchema>;

export default RegisterSchema;

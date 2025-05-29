import { TimeSlotUnit } from '@/constant';
import { PlaygroundType } from '@/generated';
import { i18nValidation } from '@/hooks';
import * as z from 'zod';

export const emailSchema = z
  .string({
    required_error: i18nValidation('Email.Required'),
  })
  .email({ message: i18nValidation('Email.Invalid') });

export const phoneSchema = z
  .string({
    required_error: i18nValidation('Phone.Required'),
  })
  .min(10, i18nValidation('Phone.MinLength', { number: 10 }))
  .max(15, i18nValidation('Phone.MaxLength', { number: 15 }));

export const passwordSchema = z
  .string({ required_error: i18nValidation('Password.Required') })
  .min(6, i18nValidation('Password.MinLength', { number: 6 }))
  .max(255, i18nValidation('Password.MaxLength', { number: 255 }));

export const confirmPasswordSchema = z.string({
  required_error: i18nValidation('ConfirmPassword.Required'),
});

export const firstNameSchema = z
  .string({ required_error: i18nValidation('FirstName.Required') })
  .min(1, i18nValidation('FirstName.MinLength', { number: 1 }))
  .max(255, i18nValidation('FirstName.MaxLength', { number: 255 }));
export const lastNameSchema = z
  .string({ required_error: i18nValidation('LastName.Required') })
  .min(1, i18nValidation('LastName.MinLength', { number: 1 }))
  .max(255, i18nValidation('LastName.MaxLength', { number: 255 }));

export const addressSchema = z
  .string({ required_error: i18nValidation('Address.Required') })
  .min(3, i18nValidation('Address.MinLength', { number: 3 }))
  .max(255, i18nValidation('Address.MaxLength', { number: 255 }));

export const longitudeSchema = z
  .number({ required_error: i18nValidation('CoorUnit.Required') })
  .min(-180, i18nValidation('CoorUnit.Min', { number: -180 }))
  .max(180, i18nValidation('CoorUnit.Max', { number: 180 }));

export const latitudeSchema = z
  .number({ required_error: i18nValidation('CoorUnit.Required') })
  .min(-90, i18nValidation('CoorUnit.Min', { number: -90 }))
  .max(90, i18nValidation('CoorUnit.Max', { number: 90 }));

export const playgroundTypeSchema = z.nativeEnum(PlaygroundType, {
  required_error: i18nValidation('Playground.Type.Required'),
});

export const priceSchema = z
  .number({ required_error: i18nValidation('Price.Required') })
  .min(0, i18nValidation('Price.Min', { number: 0 }));

export const capacitySchema = z
  .number({ required_error: i18nValidation('Capacity.Required') })
  .min(1, i18nValidation('Capacity.Min', { number: 1 }));

export const timeSlotUnitSchema = z.nativeEnum(TimeSlotUnit, {
  required_error: i18nValidation('TimeSlotUnit.Required'),
});

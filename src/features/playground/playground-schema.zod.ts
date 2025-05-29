import { i18nValidation } from '@/hooks/i18n';
import {
  addressSchema,
  latitudeSchema,
  longitudeSchema,
  phoneSchema,
  playgroundTypeSchema,
  timeSlotUnitSchema,
} from '@/zod/common-schema.zod';
import * as z from 'zod';

const validateFromTo = (from: number, to: number) => {
  if (from > to) {
    return false;
  }
  return true;
};

const PlaygroundFormSchema = z
  .object({
    name: z
      .string({ required_error: i18nValidation('Playground.Name.Required') })
      .min(3, {
        message: i18nValidation('Playground.Name.MinLength', { number: 3 }),
      })
      .max(255, {
        message: i18nValidation('Playground.Name.MaxLength', { number: 255 }),
      }),
    phone: phoneSchema,
    location: z.object({
      address: addressSchema,
      latitude: latitudeSchema,
      longitude: longitudeSchema,
    }),
    openHour: z.number({
      required_error: i18nValidation('Playground.OpenClose.Required'),
    }),
    closeHour: z.number({
      required_error: i18nValidation('Playground.OpenClose.Required'),
    }),
    openDates: z.array(z.string()),
    type: playgroundTypeSchema,
    timeSlotUnit: timeSlotUnitSchema,
    image: z.object({
      uid: z.string().optional(),
      url: z.string().optional(),
    }),
  })
  .refine(({ openHour, closeHour }) => validateFromTo(openHour, closeHour), {
    message: i18nValidation('Playground.FromSmallerThanTo'),
    path: ['open', 'close'],
  });

export type TPlaygroundFormSchema = z.infer<typeof PlaygroundFormSchema>;

export default PlaygroundFormSchema;

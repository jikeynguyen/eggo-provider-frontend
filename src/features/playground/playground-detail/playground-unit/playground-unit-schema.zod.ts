import { i18nValidation } from '@/hooks/i18n';
import * as z from 'zod';

const PlaygroundUnitFormSchema = z.object({
  name: z
    .string({
      required_error: i18nValidation('PlaygroundUnit.Name.Required'),
    })
    .min(3, {
      message: i18nValidation('PlaygroundUnit.Name.MinLength', { number: 3 }),
    })
    .max(255, {
      message: i18nValidation('PlaygroundUnit.Name.MaxLength', {
        number: 255,
      }),
    }),
  defaultPrice: z.number({
    required_error: i18nValidation('PlaygroundUnit.DefaultPrice.Required'),
  }),
  capacity: z.number({
    required_error: i18nValidation('PlaygroundUnit.Capacity.Required'),
  }),
  labelIds: z.array(z.number()).optional(),
});

export type TPlaygroundUnitFormSchema = z.infer<
  typeof PlaygroundUnitFormSchema
>;

export default PlaygroundUnitFormSchema;

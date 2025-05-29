import { i18nValidation } from '@/hooks/i18n';
import * as z from 'zod';
import PlaygroundUnitFormSchema from './playground-unit-schema.zod';

const CreatePlaygroundUnitFormSchema = z
  .object({
    bulkCreate: z.boolean().optional(),
    startNumber: z.number().optional(),
    quantity: z.number().optional(),
  })
  .merge(PlaygroundUnitFormSchema)
  .refine(
    ({ bulkCreate, quantity = 0 }) => {
      if (!bulkCreate) return true;

      return quantity > 0;
    },
    {
      message: i18nValidation('PlaygroundUnit.FromSmallerThanTo'),
      path: ['quantity'],
    }
  )
  .refine(
    ({ bulkCreate, startNumber = 0 }) => {
      if (!bulkCreate) return true;

      return startNumber > 0;
    },
    {
      message: i18nValidation('PlaygroundUnit.StartNumberGreaterThanZero'),
      path: ['startNumber'],
    }
  );

export type TCreatePlaygroundUnitFormSchema = z.infer<
  typeof CreatePlaygroundUnitFormSchema
>;

export default CreatePlaygroundUnitFormSchema;

import { InputForm } from '@/components/common/form';
import { SelectForm } from '@/components/common/form/select-form';
import { ShadowCoverImage } from '@/components/common/image/shadow-cover-image';
import HourInput from '@/components/common/input/hour.input';
import UploadImageLibrary from '@/components/common/upload/image-library/upload-image-library';
import { Form, FormField, FormLabel } from '@/components/ui/form';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { DateCode, TimeSlotUnit } from '@/constant';
import { PlaygroundType } from '@/generated';
import { useEnumTranslation, useFormTranslation } from '@/hooks';
import { getKey, getPlaygroundTypeIcon } from '@/lib';
import { useMemo } from 'react';
import { UseFormReturn } from 'react-hook-form';
import AddressDrawer from './create-playground/address-drawer';
import { TPlaygroundFormSchema } from './playground-schema.zod';

interface IPlaygroundFormProps {
  methods: UseFormReturn<TPlaygroundFormSchema>;
}

const OpenDateControl = (props: {
  control: UseFormReturn<TPlaygroundFormSchema>['control'];
  name: keyof TPlaygroundFormSchema;
}) => {
  const { control, name } = props;
  const enumTrans = useEnumTranslation();
  const formTrans = useFormTranslation();
  const dateCodeMap = useMemo(() => Object.values(DateCode), [DateCode]);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="space-y-4">
          <FormLabel>{formTrans('Playground.OpenDate.Label')}</FormLabel>
          <ToggleGroup
            size={'sm'}
            onValueChange={(value) => {
              field.onChange(value);
            }}
            value={field.value as string[]}
            type="multiple"
            className="flex justify-between"
          >
            {dateCodeMap.map((value) => {
              return (
                <ToggleGroupItem
                  key={getKey('date-code', value)}
                  value={value}
                  aria-label={enumTrans(value)}
                >
                  {enumTrans(`DateOfWeek.${value}`)}
                </ToggleGroupItem>
              );
            })}
          </ToggleGroup>
        </div>
      )}
    />
  );
};

export const PlaygroundForm = (props: IPlaygroundFormProps) => {
  const { methods } = props;
  const formTrans = useFormTranslation();

  const image = methods.watch('image');

  return (
    <>
      {image?.url && (
        <ShadowCoverImage
          width={1920}
          height={1080}
          src={image.url}
          alt="playground-image"
          className="w-full h-[40vw] object-cover"
        />
      )}
      <UploadImageLibrary
        onChange={(e) => {
          methods.setValue('image', {
            uid: e?.uid,
            url: e?.url,
          });
        }}
      />

      <Form {...methods}>
        <form className="space-y-4 w-full md:grid md:grid-cols-3 md:gap-8">
          <InputForm
            control={methods.control}
            name="name"
            label={formTrans('Playground.Name.Label')}
            placeholder={formTrans('Playground.Name.Placeholder')}
            className="mt-4"
          />
          <SelectForm
            name="type"
            control={methods.control}
            label={formTrans('Playground.Type.Label')}
            options={Object.values(PlaygroundType).map((value) => ({
              label: (
                <p>
                  {getPlaygroundTypeIcon(value)}&nbsp;
                  {formTrans(`Playground.Type.PlaygroundType.${value}`)}
                </p>
              ),
              value,
            }))}
            placeholder={formTrans('Playground.Type.Placeholder')}
          />
          <AddressDrawer methods={methods} />
          <InputForm
            control={methods.control}
            name="phone"
            label={formTrans('Playground.Phone.Label')}
            placeholder={formTrans('Playground.Phone.Placeholder')}
          />
          <OpenDateControl control={methods.control} name="openDates" />
          <div className="w-full gap-2 flex justify-between">
            <HourInput
              label={formTrans('Playground.Open.Label')}
              control={methods.control}
              name="openHour"
              placeholder={formTrans('Playground.Open.Placeholder')}
            />
            <HourInput
              label={formTrans('Playground.Close.Label')}
              control={methods.control}
              name="closeHour"
              placeholder={formTrans('Playground.Close.Placeholder')}
            />
          </div>
          <SelectForm
            control={methods.control}
            name="timeSlotUnit"
            label={formTrans('Playground.TimeSlotUnit.Label')}
            options={Object.values(TimeSlotUnit).map((value) => ({
              label: `${value} ${formTrans('Playground.TimeSlotUnit.Unit')}`,
              value,
            }))}
            placeholder={formTrans('Playground.TimeSlotUnit.Placeholder')}
            description={formTrans('Playground.TimeSlotUnit.Description')}
          />
        </form>
      </Form>
    </>
  );
};

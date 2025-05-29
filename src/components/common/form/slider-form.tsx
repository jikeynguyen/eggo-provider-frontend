import { Slider } from '@/components/ui/slider';
import { SliderProps } from '@radix-ui/react-slider';
import { BaseForm, IControlledFormProps } from './base-form';

interface SliderFormProps extends SliderProps, IControlledFormProps {
  name: string;
}

export const SliderForm = (props: SliderFormProps) => {
  const { control, label, description, name, optional, className, ...rest } =
    props;

  return (
    <BaseForm
      control={control}
      name={name}
      label={label}
      description={description}
      optional={optional}
      className={className}
      render={(field) => (
        <Slider
          {...field}
          value={[field.value]}
          onValueChange={(val) => {
            field.onChange(val[0]);
          }}
          {...rest}
        />
      )}
    />
  );
};

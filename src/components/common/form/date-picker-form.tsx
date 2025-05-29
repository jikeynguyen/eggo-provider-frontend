import { DatePicker, IDatePickerProps } from '@/components/ui/date-picker';
import { BaseForm, IControlledFormProps } from './base-form';

interface IDatePickerFormProps extends IControlledFormProps, IDatePickerProps {
  name: string;
}

export default function DatePickerForm(props: IDatePickerFormProps) {
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
        <DatePicker
          value={field.value}
          onValueChange={field.onChange}
          {...rest}
        />
      )}
    />
  );
}

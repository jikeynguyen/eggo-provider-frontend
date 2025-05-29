import { Input, InputProps } from '@/components/ui/input';
import { BaseForm } from './base-form';

interface InputFormProps extends InputProps {
  control: any;
  label?: string;
  description?: string;
  name: string;
}

export const InputForm = (props: InputFormProps) => {
  const { control, label, description, name, className, ...rest } = props;

  return (
    <BaseForm
      control={control}
      name={name}
      label={label}
      description={description}
      className={className}
      render={(field) => <Input {...rest} {...field} />}
    />
  );
};

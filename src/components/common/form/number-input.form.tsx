import { BaseForm } from '@/components/common/form';
import {
  NumberInput,
  NumberInputProps,
} from '@/components/common/input/number.input';
import { InputProps } from '@/components/ui/input';
import { numberWithCommas } from '@/lib/currency.helper';

interface NumberInputFormProps extends InputProps, NumberInputProps {
  control: any;
  label?: string;
  description?: string;
  name: string;
  optional?: boolean;
}
export default function NumberInputForm({
  control,
  name,
  label,
  description,
  optional,
  className,
  ...rest
}: NumberInputFormProps) {
  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: number) => void
  ) => {
    // Remove non-numeric characters
    const newValue = parseFloat(event.target.value.replace(/[^0-9.]/g, ''));
    if (!isNaN(newValue)) {
      onChange(newValue);
    } else {
      onChange(0);
    }
  };
  return (
    <BaseForm
      control={control}
      name={name}
      label={label}
      description={description}
      optional={optional}
      className={className}
      render={(field) => (
        <NumberInput
          {...rest}
          value={numberWithCommas(field.value)}
          onChange={(e) => onChange(e, field.onChange)}
        />
      )}
    />
  );
}

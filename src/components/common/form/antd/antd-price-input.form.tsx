import { BaseForm, IControlledFormProps } from '@/components/common/form';
import { numberWithCommas } from '@/lib/currency.helper';
import { Input, InputProps } from 'antd';

interface PriceInputFormProps extends IControlledFormProps, InputProps {
  name: string;
}

export default function AntdPriceInputForm({
  control,
  name,
  label,
  description,
  optional,
  className,
  ...rest
}: PriceInputFormProps) {
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
        <Input
          {...rest}
          type="text"
          addonAfter="VND"
          value={numberWithCommas(field.value)}
          onChange={(e) => onChange(e, field.onChange)}
        />
      )}
    />
  );
}

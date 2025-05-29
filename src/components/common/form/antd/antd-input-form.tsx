import { Input, InputProps } from 'antd';
import { BaseForm, IControlledFormProps } from '../base-form';

interface IAntdInputFormProps extends IControlledFormProps, InputProps {
  name: string;
}

export default function AntdInputForm(props: IAntdInputFormProps) {
  const { control, label, description, name, optional, ...rest } = props;

  return (
    <BaseForm
      control={control}
      name={name}
      label={label}
      description={description}
      optional={optional}
      render={(field) => (
        <Input
          onChange={(e) => {
            if (rest.type === 'number') {
              const num = parseFloat(e.target.value) || 0;
              field.onChange(num);
            } else {
              field.onChange(e);
            }
          }}
          value={field.value}
          {...rest}
        />
      )}
    />
  );
}

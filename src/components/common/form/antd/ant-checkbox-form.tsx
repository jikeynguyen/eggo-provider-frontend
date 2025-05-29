import { Checkbox, CheckboxProps } from 'antd';
import { BaseForm, IControlledFormProps } from '../base-form';

interface IAntdCheckboxFormProps extends IControlledFormProps, CheckboxProps {
  name: string;
}

export default function AntdCheckboxForm(props: IAntdCheckboxFormProps) {
  const { control, label, description, name, optional, ...rest } = props;
  return (
    <BaseForm
      control={control}
      name={name}
      label={label}
      description={description}
      optional={optional}
      render={(field) => (
        <Checkbox
          onChange={field.onChange}
          value={field.value}
          checked={field.value}
          {...rest}
        />
      )}
    />
  );
}

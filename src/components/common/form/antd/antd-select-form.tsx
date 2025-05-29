import { Select, SelectProps } from 'antd';
import { BaseForm, IControlledFormProps } from '../base-form';

interface IAntdSelectFormProps extends IControlledFormProps, SelectProps {}

export default function AntdSelectForm(props: IAntdSelectFormProps) {
  const { control, label, description, name, optional, ...rest } = props;
  return (
    <BaseForm
      control={control}
      name={name}
      label={label}
      description={description}
      optional={optional}
      render={(field) => (
        <Select onChange={field.onChange} value={field.value} {...rest} />
      )}
    />
  );
}

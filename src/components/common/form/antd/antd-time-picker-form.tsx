import { TimePicker, TimePickerProps } from 'antd';
import { BaseForm, IControlledFormProps } from '../base-form';
import { useScrollControl } from '../hook/scroll-control.hook';

interface IAntdSelectFormProps extends IControlledFormProps, TimePickerProps {
  name: string;
}

export default function AntdTimePickerForm(props: IAntdSelectFormProps) {
  const { control, label, description, name, optional, ...rest } = props;

  const scrollControl = useScrollControl();

  return (
    <BaseForm
      control={control}
      name={name}
      label={label}
      description={description}
      optional={optional}
      className="ant-form-date-picker"
      render={(field) => (
        <TimePicker
          onChange={field.onChange}
          value={field.value}
          onFocus={scrollControl.onFocus}
          onBlur={scrollControl.onBlur}
          {...rest}
        />
      )}
    />
  );
}

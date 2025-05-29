import LabelsSelector, {
  ILabelsSelectorProps,
} from '../labels/labels-selector';
import { BaseForm, IControlledFormProps } from './base-form';

interface ILabelsInputFormFormProps
  extends IControlledFormProps,
    ILabelsSelectorProps {}

export default function LabelsInputForm(props: ILabelsInputFormFormProps) {
  const { control, label, description, name, className, ...rest } = props;

  return (
    <BaseForm
      control={control}
      name={name}
      label={label}
      description={description}
      className={className}
      render={(field) => <LabelsSelector {...rest} {...field} />}
    />
  );
}

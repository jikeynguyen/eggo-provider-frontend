import { FormControl } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getKey } from '@/lib';
import { ReactNode } from 'react';
import { BaseForm, IControlledFormProps } from './base-form';

interface ISelectFormProps extends IControlledFormProps {
  options?: {
    label: ReactNode;
    value: string;
  }[];
  placeholder?: string;
}

export const SelectForm = (props: ISelectFormProps) => {
  const {
    control,
    label,
    description,
    name,
    optional,
    options,
    placeholder,
    className,
  } = props;
  return (
    <BaseForm
      control={control}
      name={name}
      label={label}
      description={description}
      optional={optional}
      className={className}
      render={(field) => (
        <Select onValueChange={field.onChange} value={field.value}>
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {options?.map((option) => (
              <SelectItem
                key={getKey('select-option', option.value)}
                value={option.value}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
  );
};

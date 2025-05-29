import { useFormTranslation } from '@/hooks/i18n';
import { ReactNode } from 'react';
import {
  Control,
  Controller,
  ControllerRenderProps,
  FieldValues,
  useController,
} from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

export interface IControlledFormProps {
  control: Control<any, any>;
  label?: string;
  description?: string | ReactNode;
  name: string;
  optional?: boolean;
  className?: string;
}

export interface IBaseFormProps extends IControlledFormProps {
  render: (field: ControllerRenderProps<FieldValues, string>) => JSX.Element;
}

export const BaseForm = (props: IBaseFormProps) => {
  const { control, label, description, name, optional, className } = props;
  const formTrans = useFormTranslation();
  const controller = useController({ name, control });

  const error = controller.fieldState.error?.message;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className={twMerge('w-full', className)}>
          {label && (
            <span className="flex items-center">
              <span
                className={twMerge(
                  'text-sm mb-1 font-medium',
                  error ? 'text-red-500' : 'text-zinc-700'
                )}
              >
                {label}
              </span>
              {optional && (
                <span className="text-gray-400 text-xs font-light">
                  &nbsp;( {formTrans('Optional').toLowerCase()} )
                </span>
              )}
            </span>
          )}
          {props.render(field)}
          {description && (
            <p className="text-xs text-zinc-400 truncate">{description}</p>
          )}
          {error && (
            <p className="text-xs text-red-500 mt-1 truncate">{error}</p>
          )}
        </div>
      )}
    />
  );
};

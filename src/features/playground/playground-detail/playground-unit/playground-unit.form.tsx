import AntdInputForm from '@/components/common/form/antd/antd-input-form';
import AntdPriceInputForm from '@/components/common/form/antd/antd-price-input.form';
import LabelsInputForm from '@/components/common/form/labels-input-form';
import { Label } from '@/generated';
import { UseFormReturn } from 'react-hook-form';
import { TPlaygroundUnitFormSchema } from './playground-unit-schema.zod';

interface IPlaygroundUnitFormProps {
  methods: UseFormReturn<TPlaygroundUnitFormSchema>;
  defaultLabels?: Label[];
}
export default function PlaygroundUnitForm(props: IPlaygroundUnitFormProps) {
  const { methods, defaultLabels } = props;

  return (
    <div className="w-full flex flex-col gap-4">
      <AntdInputForm
        control={methods.control}
        name="name"
        label="Name"
        placeholder="Enter name"
        size="large"
      />
      <div className="grid grid-cols-2 gap-4">
        <AntdPriceInputForm
          control={methods.control}
          name="defaultPrice"
          label="Price"
          placeholder="Enter price"
          type="number"
          size="large"
        />
        <AntdInputForm
          control={methods.control}
          name="capacity"
          label="Capacity"
          placeholder="Enter capacity"
          type="number"
          size="large"
        />
      </div>
      <LabelsInputForm
        defaultLabels={defaultLabels}
        control={methods.control}
        name="labelIds"
        label="Labels"
        size="large"
      />
    </div>
  );
}

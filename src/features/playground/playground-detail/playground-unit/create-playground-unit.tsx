import TriggerDrawer from '@/components/common/drawer/trigger-drawer';
import AntdCheckboxForm from '@/components/common/form/antd/ant-checkbox-form';
import AntdInputForm from '@/components/common/form/antd/antd-input-form';
import { FormMessageContext } from '@/components/context/message-context';
import {
  useBulkCreatePlaygroundUnitsMutation,
  useCreatePlaygroundUnitMutation,
} from '@/generated';
import { useCommonTranslation } from '@/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'antd';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import CreatePlaygroundUnitFormSchema, {
  TCreatePlaygroundUnitFormSchema,
} from './create-playground-unit-schema.zod';
import PlaygroundUnitForm from './playground-unit.form';

interface ICreatePlaygroundUnitProps {
  playgroundId: number;
}
export default function CreatePlaygroundUnit(
  props: ICreatePlaygroundUnitProps
) {
  const { playgroundId } = props;

  const commonTrans = useCommonTranslation();
  const methods = useForm<TCreatePlaygroundUnitFormSchema>({
    defaultValues: {
      name: '',
      defaultPrice: 0,
      capacity: 0,
      bulkCreate: false,
      startNumber: 0,
      quantity: 0,
    },
    resolver: zodResolver(CreatePlaygroundUnitFormSchema),
  });
  const bulkCreate = methods.watch('bulkCreate');

  const [bulkCreateMutation, { loading: bulkCreateLoading }] =
    useBulkCreatePlaygroundUnitsMutation({
      refetchQueries: ['PaginatePlaygroundUnits'],
    });
  const [
    createPlaygroundUnitMutation,
    { loading: createPlaygroundUnitLoading },
  ] = useCreatePlaygroundUnitMutation({
    refetchQueries: ['PaginatePlaygroundUnits'],
  });

  const formMessage = useContext(FormMessageContext);
  const loading = bulkCreate ? bulkCreateLoading : createPlaygroundUnitLoading;

  const onSubmit = (form: TCreatePlaygroundUnitFormSchema) => {
    const { bulkCreate, startNumber, quantity = 0, ...rest } = form;

    if (bulkCreate) {
      bulkCreateMutation({
        variables: {
          input: {
            ...rest,
            quantity,
            startNumber,
            playgroundId,
          },
        },
        onCompleted: () => {
          formMessage.success();
        },
        onError: () => {
          formMessage.error();
        },
      });
      return;
    }

    createPlaygroundUnitMutation({
      variables: {
        input: {
          ...rest,
          playgroundId,
        },
      },
      onCompleted: () => {
        formMessage.success();
      },
      onError: () => {
        formMessage.error();
      },
    });
  };

  return (
    <TriggerDrawer
      title="Create Playground Unit"
      description="Create a new playground unit."
      trigger={<Button>{commonTrans('CreatePlaygroundUnit')}</Button>}
      footer={
        <Button
          type="primary"
          className="w-full"
          onClick={methods.handleSubmit(onSubmit)}
          loading={loading}
        >
          {commonTrans('Create')}
        </Button>
      }
    >
      <PlaygroundUnitForm methods={methods} />
      <AntdCheckboxForm
        control={methods.control}
        name="bulkCreate"
        className="my-4"
      >
        Bulk Create
      </AntdCheckboxForm>
      {bulkCreate && (
        <div className="grid grid-cols-2 gap-4">
          <AntdInputForm
            control={methods.control}
            name="startNumber"
            label="Start Number"
            placeholder="Enter capacity"
            type="number"
          />
          <AntdInputForm
            control={methods.control}
            name="quantity"
            label="Quantity"
            placeholder="Enter capacity"
            type="number"
          />
        </div>
      )}
    </TriggerDrawer>
  );
}

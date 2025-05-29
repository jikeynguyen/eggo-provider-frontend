import CustomDrawer from '@/components/common/drawer/custom-drawer';
import ActionColumn from '@/components/table/action-column';
import { Label, PlaygroundDetailQuery, PlaygroundUnit } from '@/generated';
import { useCommonTranslation, useDisclosure } from '@/hooks';
import { getKey } from '@/lib';
import { numberWithCommas } from '@/lib/currency.helper';
import { Button, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { usePaginatePlaygroundUnitControl } from './paginate-playground-unit-control';
import { TPlaygroundUnitFormSchema } from './playground-unit-schema.zod';
import PlaygroundUnitForm from './playground-unit.form';

interface Props {
  playground: PlaygroundDetailQuery['playground'];
}
export default function PlaygroundUnitTable(props: Props) {
  const { playground } = props;

  const paginateControl = usePaginatePlaygroundUnitControl({
    pageSize: 10,
    playgroundId: playground.id,
  });
  const editDisclosure = useDisclosure<PlaygroundUnit>();
  const commonTrans = useCommonTranslation();
  const playgroundUnits = paginateControl.items;

  const methods = useForm<TPlaygroundUnitFormSchema>({
    defaultValues: {
      name: '',
      defaultPrice: 0,
      capacity: 0,
      labelIds: [],
    },
  });

  const [defaultLabels, setDefaultLabels] = useState<Label[]>([]);

  useEffect(() => {
    if (editDisclosure.isOpen) {
      if (editDisclosure.data?.labels) {
        setDefaultLabels(editDisclosure.data?.labels);
      }

      methods.reset({
        capacity: editDisclosure.data?.capacity,
        defaultPrice: editDisclosure.data?.defaultPrice,
        labelIds: editDisclosure.data?.labels?.map((label) => label.id),
        name: editDisclosure.data?.name,
      });
    }
  }, [editDisclosure.isOpen]);

  const onDelete = () => {};

  return (
    <>
      <CustomDrawer
        open={editDisclosure.isOpen}
        onClose={editDisclosure.close}
        title={commonTrans('EditPlaygroundUnit')}
        footer={
          <Button disabled={!methods.formState.isDirty}>
            {commonTrans('Save')}
          </Button>
        }
      >
        <PlaygroundUnitForm methods={methods} defaultLabels={defaultLabels} />
      </CustomDrawer>
      <Table
        dataSource={playgroundUnits?.map((unit) => ({
          ...unit,
          key: unit.id,
        }))}
        rowSelection={{}}
        columns={[
          Table.SELECTION_COLUMN,
          {
            title: commonTrans('Name'),
            dataIndex: 'name',
          },
          {
            title: commonTrans('DefaultPrice'),
            dataIndex: 'defaultPrice',
            render: (price: number) => {
              return numberWithCommas(price);
            },
          },
          {
            title: commonTrans('Capacity'),
            dataIndex: 'capacity',
          },
          {
            title: commonTrans('Labels'),
            dataIndex: 'labels',
            render: (_, { labels }) => {
              return (
                <div>
                  {labels?.map((label) => (
                    <Tag key={getKey('label', label.id)} color="orange">
                      {label.name}
                    </Tag>
                  ))}
                </div>
              );
            },
          },
          {
            title: commonTrans('Actions'),
            key: 'action',
            render: (val) => {
              return (
                <ActionColumn
                  onEdit={() => editDisclosure.open(val)}
                  onDelete={onDelete}
                />
              );
            },
          },
        ]}
        rowKey="id"
        scroll={{ x: true }}
        pagination={{
          ...paginateControl,
        }}
        loading={paginateControl.loading}
      />
    </>
  );
}

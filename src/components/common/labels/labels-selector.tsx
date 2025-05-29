import {
  Label,
  useCreateLabelMutation,
  usePaginateLabelsQuery,
} from '@/generated';
import { useCommonTranslation } from '@/hooks';
import { Button, Divider, Input, Select, SelectProps } from 'antd';
import { debounce } from 'lodash';
import { useEffect, useState } from 'react';

export interface ILabelsSelectorProps extends SelectProps {
  value?: number[];
  onChange?: (value: number[]) => void;
  defaultLabels?: Label[];
}

function formatLabelName(name: string): string {
  return name.toUpperCase().replace(/\s+/g, '_');
}

export default function LabelsSelector(props: ILabelsSelectorProps) {
  const { defaultLabels = [], ...rest } = props;
  const [newItemName, setNewItemName] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');
  const [labels, setLabels] = useState<Label[]>(defaultLabels);

  const commonTrans = useCommonTranslation();
  const { data, loading } = usePaginateLabelsQuery({
    variables: {
      options: {
        take: 10,
        skip: 0,
        filter: {
          name: {
            contains: searchValue,
          },
        },
      },
    },
  });

  const onLabelsChange = (val?: Label[]) => {
    if (!val?.length) return;

    // Only add new labels, keep existing labels
    setLabels((prev) => [
      ...prev,
      ...val.filter((label) => !prev.find((l) => l.id === label.id)),
    ]);
  };

  const [createLabelMutation, { loading: createLoading }] =
    useCreateLabelMutation();

  const handleCategorySearch = debounce((searchText: string) => {
    setSearchValue(searchText);
  }, 500);

  const handleAddItem = () => {
    if (!newItemName) {
      return;
    }

    createLabelMutation({
      variables: {
        input: {
          name: newItemName,
          code: formatLabelName(newItemName),
        },
      },
      onCompleted: (res) => {
        setNewItemName('');
        onLabelsChange([res.createLabel as Label]);
        if (!props.onChange) return;
        const val = props.value || [];
        props.onChange([...val, res.createLabel.id]);
      },
      onError: () => {},
    });
    // Add new item to the database
  };

  useEffect(() => {
    if (!loading && data) {
      setLabels(data.paginateLabels.items as Label[]);
    }
  }, [data, loading]);

  useEffect(() => {
    onLabelsChange(defaultLabels);
  }, [defaultLabels]);

  return (
    <Select
      className="w-full mt-2"
      showSearch
      mode="multiple"
      allowClear
      suffixIcon={null}
      filterOption={false}
      placeholder={commonTrans('SearchCategory')}
      loading={loading}
      onSearch={handleCategorySearch}
      options={labels.map((label) => ({
        value: label.id,
        label: label.name,
      }))}
      dropdownRender={(label) => (
        <>
          {label}
          <Divider style={{ margin: '8px 0' }} />
          <div className="w-full flex gap-4 px-2 py-1">
            <Input
              placeholder={commonTrans('PleaseEnterLabel')}
              value={newItemName}
              onChange={(e) => {
                setNewItemName(e.target.value);
              }}
            />

            <Button
              onClick={handleAddItem}
              loading={createLoading}
              disabled={!newItemName}
            >
              {commonTrans('AddItem')}
            </Button>
          </div>
        </>
      )}
      {...rest}
    />
  );
}

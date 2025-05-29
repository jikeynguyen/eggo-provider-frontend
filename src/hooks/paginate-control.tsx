import { useState } from 'react';

export interface IPaginateControlProps {
  pageSize?: number;
}

export interface IPaginateControl {
  pageSize: number;
  onChange: (page: number) => void;
  onShowSizeChange: (current: number, size: number) => void;
  current: number;
  skip: number;
}

export const usePaginateControl = (
  props: IPaginateControlProps
): IPaginateControl => {
  const { pageSize = 10 } = props;

  const [take, setTake] = useState(pageSize);
  const [skip, setSkip] = useState(0);
  const [current, setCurrent] = useState(1);

  const onChange = (page: number) => {
    setSkip((page - 1) * take);
    setCurrent(page);
  };

  const onShowSizeChange = (_current: number, size: number) => {
    setTake(size);
    setSkip(0);
    setCurrent(1);
  };

  return {
    pageSize: take,
    onChange,
    onShowSizeChange,
    current,
    skip,
  };
};

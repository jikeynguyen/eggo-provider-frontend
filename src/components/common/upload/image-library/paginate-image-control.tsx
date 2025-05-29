import {
  PaginateImagesQuery,
  SortOrder,
  usePaginateImagesQuery,
} from '@/generated';
import {
  IPaginateControl,
  IPaginateControlProps,
  usePaginateControl,
} from '@/hooks';
import { useEffect, useState } from 'react';

interface IPaginateImageControl extends IPaginateControl {
  loading: boolean;
  total: number;
  items: PaginateImagesQuery['paginateImages']['items'];
}

export const usePaginateImageControl = (
  props: IPaginateControlProps
): IPaginateImageControl => {
  const { pageSize = 10 } = props;

  const [total, setTotal] = useState(0);
  const paginateControl = usePaginateControl({ pageSize });

  const { data, loading } = usePaginateImagesQuery({
    variables: {
      options: {
        take: paginateControl.pageSize,
        skip: paginateControl.skip,
        sort: {
          createdAt: SortOrder.Desc,
        },
      },
    },
    skip: !paginateControl.pageSize,
  });

  useEffect(() => {
    if (!loading) {
      setTotal(data?.paginateImages.total || 0);
    }
  }, [data, loading]);

  return {
    loading,
    total,
    items: data?.paginateImages.items || [],
    ...paginateControl,
  };
};

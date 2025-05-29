import {
  PaginatePlaygroundsQuery,
  SortOrder,
  usePaginatePlaygroundsQuery,
} from '@/generated';
import {
  IPaginateControl,
  IPaginateControlProps,
  usePaginateControl,
} from '@/hooks';
import { useEffect, useState } from 'react';
import { PlaygroundRelations } from '../playground.relations';

interface IPaginatePlaygroundControl extends IPaginateControl {
  loading: boolean;
  total: number;
  items: PaginatePlaygroundsQuery['paginatePlaygrounds']['items'];
}

export const usePaginatePlaygroundControl = (
  props: IPaginateControlProps
): IPaginatePlaygroundControl => {
  const { pageSize = 10 } = props;

  const [total, setTotal] = useState(0);
  const [items, setItems] = useState<
    PaginatePlaygroundsQuery['paginatePlaygrounds']['items']
  >([]);
  const paginateControl = usePaginateControl({ pageSize });

  const { data, loading } = usePaginatePlaygroundsQuery({
    variables: {
      options: {
        take: paginateControl.pageSize,
        skip: paginateControl.skip,
        sort: {
          createdAt: SortOrder.Desc,
        },
      },
      relations: PlaygroundRelations.paginate,
    },

    skip: !paginateControl.pageSize,
  });

  useEffect(() => {
    if (!loading) {
      setTotal(data?.paginatePlaygrounds.total || 0);
      setItems(data?.paginatePlaygrounds.items || []);
    }
  }, [data, loading]);

  return {
    loading,
    total,
    items,
    ...paginateControl,
  };
};

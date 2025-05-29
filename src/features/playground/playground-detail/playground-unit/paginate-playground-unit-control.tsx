import {
  PaginatePlaygroundUnitsQuery,
  SortOrder,
  usePaginatePlaygroundUnitsQuery,
} from '@/generated';
import {
  IPaginateControl,
  IPaginateControlProps,
  usePaginateControl,
} from '@/hooks';
import { useEffect, useState } from 'react';
import { PlaygroundUnitRelations } from '../../playground-unit.relations';

interface IPaginatePlaygroundUnitControl extends IPaginateControl {
  loading: boolean;
  total: number;
  items: PaginatePlaygroundUnitsQuery['paginatePlaygroundUnits']['items'];
}

export const usePaginatePlaygroundUnitControl = (
  props: IPaginateControlProps & { playgroundId: number }
): IPaginatePlaygroundUnitControl => {
  const { pageSize = 10, playgroundId } = props;

  const [total, setTotal] = useState(0);
  const [items, setItems] = useState<
    PaginatePlaygroundUnitsQuery['paginatePlaygroundUnits']['items']
  >([]);
  const paginateControl = usePaginateControl({ pageSize });

  const { data, loading } = usePaginatePlaygroundUnitsQuery({
    variables: {
      options: {
        take: paginateControl.pageSize,
        skip: paginateControl.skip,
        filter: {
          playgroundId: {
            eq: playgroundId,
          },
        },
        sort: {
          createdAt: SortOrder.Desc,
        },
      },
      relations: PlaygroundUnitRelations.paginate,
    },

    skip: !paginateControl.pageSize,
  });

  useEffect(() => {
    if (!loading) {
      setTotal(data?.paginatePlaygroundUnits.total || 0);
      setItems(data?.paginatePlaygroundUnits.items || []);
    }
  }, [data, loading]);

  return {
    loading,
    total,
    items,
    ...paginateControl,
  };
};

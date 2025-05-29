import { ShadowImageCard } from '@/components/common/card';
import { GridLoading } from '@/components/common/loading/grid-loading';
import { AppRoute } from '@/constant';
import { PlaygroundType } from '@/generated';
import { getKey, getPlaygroundTypeIcon, getPublicVariant } from '@/lib';
import { Pagination } from 'antd';
import { useNavigate } from 'react-router-dom';
import { usePaginatePlaygroundControl } from './paginate-playground-control';

export const PlaygroundList = () => {
  const paginatePlaygroundControl = usePaginatePlaygroundControl({
    pageSize: 10,
  });
  const playgrounds = paginatePlaygroundControl?.items || [];
  const navigate = useNavigate();

  const toDetail = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: number
  ) => {
    e.preventDefault();
    navigate(`${AppRoute.PLAYGROUND}/${id}`);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 relative gap-y-4">
        {paginatePlaygroundControl.loading ? (
          <GridLoading height={180} amount={9} />
        ) : (
          playgrounds.map((playground) => (
            <div
              key={getKey('playground', playground.id)}
              className="relative rounded-2xl overflow-hidden"
            >
              <span className="glassmorphism absolute rounded-full top-4 left-4 z-10 w-10 h-10 flex items-center justify-center pointer-events-none">
                {getPlaygroundTypeIcon(playground.type as PlaygroundType)}
              </span>
              <ShadowImageCard
                href={`${AppRoute.PLAYGROUND}/${playground.id}`}
                title={playground.name}
                subTitle={playground.address}
                src={getPublicVariant(playground?.coverImg?.variants)}
                alt={playground.name}
                className="w-full h-[180px]"
                onClick={(e) => toDetail(e, playground.id)}
              />
            </div>
          ))
        )}
      </div>
      <Pagination
        className="mt-4 w-full flex justify-center"
        current={paginatePlaygroundControl.current}
        total={paginatePlaygroundControl.total}
        pageSize={paginatePlaygroundControl.pageSize}
        onChange={paginatePlaygroundControl.onChange}
        onShowSizeChange={paginatePlaygroundControl.onShowSizeChange}
        showSizeChanger
      />
    </>
  );
};

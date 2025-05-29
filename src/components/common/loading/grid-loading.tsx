import './grid-loading.scss';

import { Skeleton } from 'antd';
export const GridLoading = (props: { amount?: number; height?: number }) => {
  const { amount = 6, height = 100 } = props;

  return (
    <>
      {Array(amount)
        .fill(0)
        .map((_, idx) => {
          return (
            <div
              key={'skeleton-' + idx}
              style={{
                height,
                width: '100%',
              }}
              className="grid-loading"
            >
              <Skeleton.Input active={true} />
            </div>
          );
        })}
    </>
  );
};

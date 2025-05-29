import { CustomBreadcrumb } from '@/components/common/breadcrumb/custom-breadcrumb';
import SpinnerScreen from '@/components/common/spinner/spinner-screen';
import { AppRoute } from '@/constant';
import PlaygroundDetail from '@/features/playground/playground-detail/playground-detail';
import { PlaygroundRelations } from '@/features/playground/playground.relations';
import { usePlaygroundDetailQuery } from '@/generated';
import { Empty } from 'antd';
import { useParams } from 'react-router-dom';

export default function PlaygroundDetailPage() {
  const params = useParams();
  const playgroundId = Number(params.id);
  const { data, loading } = usePlaygroundDetailQuery({
    variables: {
      playgroundId,
      relations: PlaygroundRelations.detail,
    },
    skip: !playgroundId,
  });
  const playground = data?.playground;

  if (loading) {
    return <SpinnerScreen />;
  }

  if (!playground?.id && !loading) {
    return <Empty />;
  }

  return (
    <div>
      <CustomBreadcrumb
        items={[
          { name: 'Playgrounds', href: AppRoute.PLAYGROUNDS },
          {
            name: playground?.name || 'Playground',
            href: AppRoute.PLAYGROUND + '/' + playground?.id,
          },
        ]}
      />
      <PlaygroundDetail playground={playground!} />
    </div>
  );
}

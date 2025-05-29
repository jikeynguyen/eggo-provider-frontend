import { FormMessageProvider } from '@/components/context/message-context';
import { PlaygroundDetailQuery } from '@/generated';
import { useCommonTranslation } from '@/hooks';
import PlaygroundInfoCard from './playground-info-card';
import CreatePlaygroundUnit from './playground-unit/create-playground-unit';
import PlaygroundUnitTable from './playground-unit/playground-unit-table';

interface IPlaygroundDetailProps {
  playground: PlaygroundDetailQuery['playground'];
}

export default function PlaygroundDetail(props: IPlaygroundDetailProps) {
  const { playground } = props;
  const commonTrans = useCommonTranslation();

  return (
    <div className="space-y-4">
      <FormMessageProvider>
        <PlaygroundInfoCard playground={playground} />
        <div className="w-full flex items-center justify-between">
          <h1 className="font-bold">{commonTrans('PlaygroundUnits')}</h1>
          <CreatePlaygroundUnit playgroundId={playground.id} />
        </div>
        <PlaygroundUnitTable playground={playground} />
      </FormMessageProvider>
    </div>
  );
}

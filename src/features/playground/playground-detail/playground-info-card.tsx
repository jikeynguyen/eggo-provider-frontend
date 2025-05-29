import { ShadowCoverImage } from '@/components/common/image/shadow-cover-image';
import { Button } from '@/components/ui/button';
import { PlaygroundDetailQuery, PlaygroundType } from '@/generated';
import { useCommonTranslation } from '@/hooks';
import { getPlaygroundTypeIcon, getPublicVariant } from '@/lib';
import { Clock, Phone } from 'lucide-react';

interface IPlaygroundInfoProps {
  playground?: PlaygroundDetailQuery['playground'];
}

export default function PlaygroundInfoCard(props: IPlaygroundInfoProps) {
  const { playground } = props;
  const commonTrans = useCommonTranslation();

  return (
    <div className="relative">
      <Button
        className="absolute right-4 top-4 z-10 px-8 border-none"
        variant="glassmorphism"
      >
        {commonTrans('Edit')}
      </Button>
      <div className="absolute left-4 top-4 z-10 flex items-center text-zinc-100 border-none gap-2 glassmorphism rounded-full py-1 px-1">
        <Button
          className="rounded-full w-10 h-10 border-none"
          variant="glassmorphism"
        >
          <p className="text-xl">
            {getPlaygroundTypeIcon(playground?.type as PlaygroundType)}
          </p>
        </Button>
        <span className="ml-2 flex items-center text-sm gap-2">
          <Clock size={18} />
          {[playground?.openHour + ':00', playground?.closeHour + ':00'].join(
            ' - '
          )}
        </span>
        <span className="ml-2 flex items-center gap-2 text-sm mr-4">
          <Phone size={18} />
          <span>{playground?.phone}</span>
        </span>
      </div>
      <ShadowCoverImage
        src={getPublicVariant(playground?.coverImg?.variants)}
        alt={playground?.name || 'playground'}
        className="w-full h-[80vw] sm:h-[40vw] rounded-xl overflow-hidden"
        width={1920}
        height={1080}
      />
      <div className="absolute bottom-6 left-0 right-0 px-4 text-zinc-300 w-full">
        <p className="text-sm truncate">{playground?.address}</p>
        <span className="flex items-center">
          <h1 className="text-xl font-bold">{playground?.name}</h1>
        </span>
      </div>
    </div>
  );
}

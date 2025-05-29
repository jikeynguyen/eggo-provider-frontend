import { BreadcrumbAuto } from '@/components/common/breadcrumb';
import { Button } from '@/components/ui/button';
import { AppRoute } from '@/constant';
import { PlaygroundList } from '@/features/playground/playground-list/playground-list';
import { useCommonTranslation } from '@/hooks';
import { useNavigate } from 'react-router-dom';

export const PlaygroundsPage = () => {
  const commomTrans = useCommonTranslation();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <BreadcrumbAuto
        rightAddon={
          <Button
            onClick={() => {
              navigate(AppRoute.CREATE_PLAYGROUND);
            }}
          >
            {commomTrans('Create')}
          </Button>
        }
      />
      <PlaygroundList />
    </div>
  );
};

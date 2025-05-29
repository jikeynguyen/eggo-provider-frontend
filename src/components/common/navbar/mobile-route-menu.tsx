import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { useCommonTranslation } from '@/hooks/i18n';
import { getKey } from '@/lib';
import { Menu } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../../ui/button';
import Logo from '../logo';
import { NavBarRoutes } from './navbar.costant';

export default function MobileRouteMenu() {
  const commonTrans = useCommonTranslation();
  const currentPathname = window.location.pathname;

  return (
    <Drawer direction="left">
      <DrawerTrigger className="outline-none">
        <Menu />
      </DrawerTrigger>
      <DrawerContent className="h-full rounded-none glassmorphism text-zinc-500 outline-none">
        <div className="mt-4 flex flex-col gap-4 px-8 h-full">
          <Logo variant="text" />
          <ul className="space-y-4 mt-4">
            {NavBarRoutes.map((route) => (
              <li
                className={twMerge(
                  'ml-2',
                  currentPathname === route.route && 'text-primary'
                )}
                key={getKey(route.name)}
              >
                <a href={route.route}>{commonTrans(route.name)}</a>
              </li>
            ))}
          </ul>
          <DrawerFooter>
            <DrawerClose>
              <Button className="w-full text-red-500" variant="outline">
                {commonTrans('Close')}
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

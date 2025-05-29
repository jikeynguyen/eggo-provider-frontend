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
        <div className="mt-4 flex flex-col h-full">
          <div className="flex justify-center px-8">
            <Logo width={180} height={36} />
          </div>

          <ul className="mt-8 space-y-4 px-8 flex-1">
            {NavBarRoutes.map((route) => (
              <li
                key={getKey('mobile-menu', route.route)}
                className={twMerge(
                  'ml-2 text-lg',
                  currentPathname === route.route && 'text-primary'
                )}
              >
                <a href={route.route}>{commonTrans(route.name)}</a>
              </li>
            ))}
          </ul>

          <DrawerFooter className="px-8 pb-8">
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

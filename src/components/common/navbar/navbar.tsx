import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getKey } from '@/lib';
import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import Logo from '../logo';
import MobileRouteMenu from './mobile-route-menu';
import { NavBarRoutes } from './navbar.costant';

const Routes = () => {
  const currentPath = window.location.pathname;
  const navigate = useNavigate();
  return (
    <div className="justify-between items-center gap-8 hidden lg:flex">
      {NavBarRoutes.map(({ route, name }) => {
        const isActive = currentPath.includes(route);
        return (
          <p
            key={getKey('menu-route', route)}
            onClick={() => navigate(route)}
            className={twMerge(
              isActive ? 'text-primary' : 'text-zinc-500',
              'cursor-pointer'
            )}
          >
            {name}
          </p>
        );
      })}
    </div>
  );
};

export const NavBar = () => {
  return (
    <nav className="sticky navbar top-0 w-full h-[var(--navbar-height)] flex items-center z-50 justify-between">
      <div className="lg:hidden">
        <MobileRouteMenu />
      </div>
      <Logo />
      <Routes />
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </nav>
  );
};

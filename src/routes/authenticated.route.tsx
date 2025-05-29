import { AppRoute } from '@/constant';
import { getLastHref } from '@/lib';
import { useAppSelector } from '@/redux/store';
import { Navigate, Outlet } from 'react-router-dom';

export default function AuthenticatedRoute() {
  const { user } = useAppSelector((state) => state.auth);
  const getRoute = () => {
    const lastHref = getLastHref();
    if (lastHref && lastHref !== '/') {
      return lastHref;
    } else {
      return AppRoute.DASHBOARD;
    }
  };

  return user?.id ? <Navigate to={getRoute()} /> : <Outlet />;
}

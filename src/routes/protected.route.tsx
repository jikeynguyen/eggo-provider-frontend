import { AppRoute } from '@/constant';
import { useAppSelector } from '@/redux/store';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const { user } = useAppSelector((state) => state.auth);
  return user?.id ? <Outlet /> : <Navigate to={AppRoute.LOGIN} />;
};

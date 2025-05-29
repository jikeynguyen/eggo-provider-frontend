import SpinnerScreen from '@/components/common/spinner/spinner-screen';
import { me } from '@/redux/slices';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { useEffect } from 'react';

type Props = {
  children?: React.ReactNode;
};

export default function AuthProvider(props: Props) {
  const { isLoading } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  if (isLoading) {
    return <SpinnerScreen />;
  }
  return <>{props?.children}</>;
}

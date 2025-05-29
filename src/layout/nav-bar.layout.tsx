import GradientContainer from '@/components/common/gradient-container';
import { NavBar } from '@/components/common/navbar/navbar';
import { Outlet } from 'react-router-dom';

export function NavBarLayout() {
  return (
    <GradientContainer className="bg-white w-full h-full">
      <NavBar />
      <div className="px-4 md:px-8 w-full overflow-x:hidden pt-8 pb-8">
        <Outlet />
      </div>
    </GradientContainer>
  );
}

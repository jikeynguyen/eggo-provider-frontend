import GradientContainer from '@/components/common/gradient-container';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <GradientContainer>
      <meta name="theme-color" content="#17182D" />
      <div className="px-6 md:px-8 w-full overflow-hidden pt-8 pb-8 flex-1 full-screen bg-[#17182D]">
        <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 xl:w-1/4 z-10 relative px-4 h-[100vh] ml-0 md:ml-40">
          <img
            src="/sport-bg.webp"
            className="h-full w-[40vw] fixed top-0 -right-20 object-cover object-left -rotate-12"
          />
          <Outlet />
        </div>
      </div>
    </GradientContainer>
  );
};

import './App.css';
// prettier-ignore
import { ReduxProvider } from '@/redux/redux.provider';
// prettier-ignore
import { bffClient } from '@/bff-client';
import AuthProvider from '@/providers/auth.provider'; // Disable prettier because redux store need to load first
import { ApolloProvider } from '@apollo/client';
import { ConfigProvider } from 'antd';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppRoute, Color } from './constant';
import { AuthLayout, NavBarLayout } from './layout';
import {
  CreatePlaygroundPage,
  DashBoardPage,
  LoginPage,
  PlaygroundsPage,
  RegisterPage,
} from './pages';
import PlaygroundDetailPage from './pages/playground-detail.page';
import AuthenticatedRoute from './routes/authenticated.route';
import { ProtectedRoute } from './routes/protected.route';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: Color.Primary,
        },
      }}
    >
      <ApolloProvider client={bffClient.getInstance()}>
        <ReduxProvider>
          <AuthProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<ProtectedRoute />}>
                  <Route path="/" element={<Navigate to={AppRoute.LOGIN} />} />
                  <Route element={<NavBarLayout />}>
                    <Route
                      path={AppRoute.DASHBOARD}
                      element={<DashBoardPage />}
                    />
                    <Route
                      path={AppRoute.PLAYGROUNDS}
                      element={<PlaygroundsPage />}
                    />
                    <Route
                      path={AppRoute.PLAYGROUND + '/:id'}
                      element={<PlaygroundDetailPage />}
                    />
                    <Route
                      path={AppRoute.CREATE_PLAYGROUND}
                      element={<CreatePlaygroundPage />}
                    />
                  </Route>
                </Route>

                <Route element={<AuthenticatedRoute />}>
                  <Route element={<AuthLayout />}>
                    <Route path={AppRoute.LOGIN} element={<LoginPage />} />
                    <Route
                      path={AppRoute.REGISTER}
                      element={<RegisterPage />}
                    />
                  </Route>
                </Route>
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </ReduxProvider>
      </ApolloProvider>
    </ConfigProvider>
  );
}

export default App;

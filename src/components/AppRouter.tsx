import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login, NotFound } from '@/pages';
import { Layout } from '@/components';
import { ROUTES } from '@/constants';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route
          path={ROUTES.NOT_FOUND}
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

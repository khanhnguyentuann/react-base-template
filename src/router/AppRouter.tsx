import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from '@/constants';
import { DefaultLayout } from '@/layouts';
import { Home, Login, NotFound } from '@/pages';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path='/' element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

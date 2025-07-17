import { Outlet } from 'react-router-dom';
import { Footer, Header } from '@/components';

export default function DefaultLayout() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      <main className='flex-1'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

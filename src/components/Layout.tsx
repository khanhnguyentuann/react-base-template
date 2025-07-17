import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTE_PATHS } from '@/constants';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <header className='bg-white shadow-sm border-b'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between h-16'>
            {/* Logo */}
            <Link to={ROUTE_PATHS.HOME} className='flex items-center space-x-2'>
              <div className='w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>R</span>
              </div>
              <span className='text-xl font-semibold text-gray-900'>
                React Base
              </span>
            </Link>

            {/* Navigation */}
            <nav className='hidden md:flex items-center space-x-8'>
              <Link
                to={ROUTE_PATHS.HOME}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(ROUTE_PATHS.HOME)
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                Home
              </Link>
              <Link
                to={ROUTE_PATHS.LOGIN}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(ROUTE_PATHS.LOGIN)
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                Login
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className='md:hidden'>
              <button className='p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100'>
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='flex-1'>{children}</main>

      {/* Footer */}
      <footer className='bg-white border-t'>
        <div className='container mx-auto px-4 py-8'>
          <div className='grid md:grid-cols-3 gap-8'>
            <div>
              <div className='flex items-center space-x-2 mb-4'>
                <div className='w-6 h-6 bg-blue-600 rounded flex items-center justify-center'>
                  <span className='text-white font-bold text-sm'>R</span>
                </div>
                <span className='font-semibold text-gray-900'>
                  React Base Template
                </span>
              </div>
              <p className='text-gray-600 text-sm'>
                A modern, clean, and scalable React TypeScript template ready
                for your next project.
              </p>
            </div>

            <div>
              <h3 className='font-semibold text-gray-900 mb-4'>Quick Links</h3>
              <ul className='space-y-2'>
                <li>
                  <Link
                    to={ROUTE_PATHS.HOME}
                    className='text-gray-600 hover:text-blue-600 text-sm'
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={ROUTE_PATHS.LOGIN}
                    className='text-gray-600 hover:text-blue-600 text-sm'
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='font-semibold text-gray-900 mb-4'>Resources</h3>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='https://react.dev'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-600 hover:text-blue-600 text-sm'
                  >
                    React Docs
                  </a>
                </li>
                <li>
                  <a
                    href='https://tailwindcss.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-600 hover:text-blue-600 text-sm'
                  >
                    Tailwind CSS
                  </a>
                </li>
                <li>
                  <a
                    href='https://vitejs.dev'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-600 hover:text-blue-600 text-sm'
                  >
                    Vite
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='border-t mt-8 pt-8 text-center'>
            <p className='text-gray-600 text-sm'>
              © 2025 React Base Template. Built with ❤️ using React &
              TypeScript.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;

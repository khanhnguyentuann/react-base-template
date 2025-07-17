import { Link, useLocation } from 'react-router-dom';
import { ROUTE_PATHS } from '@/constants';

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
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
  );
}

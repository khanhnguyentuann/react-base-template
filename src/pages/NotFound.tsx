import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '@/constants';

export default function NotFound() {
  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center px-4'>
      <div className='text-center'>
        <div className='mb-8'>
          <h1 className='text-9xl font-bold text-gray-300'>404</h1>
        </div>

        <h2 className='text-3xl font-bold text-gray-900 mb-4'>
          Page Not Found
        </h2>

        <p className='text-lg text-gray-600 mb-8 max-w-md mx-auto'>
          Sorry, we couldn't find the page you're looking for. It might have
          been moved, deleted, or you entered the wrong URL.
        </p>

        <div className='space-x-4'>
          <Link
            to={ROUTE_PATHS.HOME}
            className='inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors'
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className='inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors'
          >
            Go Back
          </button>
        </div>

        <div className='mt-12'>
          <div className='text-6xl mb-4'>🔍</div>
          <p className='text-sm text-gray-500'>
            If you believe this is an error, please contact support.
          </p>
        </div>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '@/constants';

export default function Footer() {
  return (
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
              A modern, clean, and scalable React TypeScript template ready for
              your next project.
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
            © 2025 React Base Template. Built with ❤️ using React & TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
}

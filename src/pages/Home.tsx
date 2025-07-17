function Home() {
  return (
    <div className='bg-gradient-to-br from-blue-50 to-indigo-100 py-16'>
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <h1 className='text-5xl font-bold text-gray-900 mb-6'>
            Welcome to React Base Template
          </h1>
          <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
            A modern, clean, and scalable React TypeScript template with
            Tailwind CSS, Axios, and React Router ready for your next project.
          </p>

          <div className='grid md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto'>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <div className='text-blue-500 text-3xl mb-4'>⚡</div>
              <h3 className='text-lg font-semibold mb-2'>Fast Development</h3>
              <p className='text-gray-600'>
                Built with Vite for lightning-fast development and hot module
                replacement.
              </p>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md'>
              <div className='text-green-500 text-3xl mb-4'>🎨</div>
              <h3 className='text-lg font-semibold mb-2'>Modern Styling</h3>
              <p className='text-gray-600'>
                Tailwind CSS for utility-first styling with responsive design
                out of the box.
              </p>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md'>
              <div className='text-purple-500 text-3xl mb-4'>🔧</div>
              <h3 className='text-lg font-semibold mb-2'>Ready to Use</h3>
              <p className='text-gray-600'>
                Pre-configured with TypeScript, ESLint, path aliases, and API
                client.
              </p>
            </div>
          </div>

          <div className='mt-12'>
            <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors'>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

/* eslint-disable react/no-unescaped-entities */
import Link from './Link'

const NewsFeed = () => {
  return (
    <>
      <div className='max-w-screen-lg mx-auto container'>
        <div className='px-4 sm:px-0 w-full'>
          <section
            className='w-full bg-white rounded-lg grid grid-cols-1 sm:mt-20 sm:grid-cols-2 sm:min-w-[1000px] min-h-[350px]'
            style={{
              boxShadow: 'rgba(0, 0, 0, 0.12) 0px 30px 60px 0px',
            }}
          >
            <div className='flex flex-col justify-center rounded-l-lg bg-gray-50'>
              Hello, I'm <span className='font-semibold'>Sebastian</span>
            </div>

            <div className='px-4 py-24 text-center space-y-5 place-self-center'>
              <h3 className='text-3xl font-bold'>Get it 👇</h3>

              <span className='inline-flex rounded-md shadow-sm'>
                  <Link href='google.com'>
                    <a
                      type='button'
                      className='inline-flex items-center px-4 py-4 font-medium text-white bg-blue-600 border
                      border-transparent leading-6 transition duration-150 ease-in-out rounded-md sm:px-10
                      hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring-blue-400 active:bg-blue-700 focus:ring-4'
                    >
                      Copy Template from GitHub
                    </a>
                  </Link>
                </span>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default NewsFeed;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaceFrownIcon } from '@heroicons/react/24/solid';


const ErrorPage = () => {
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div>
        <img className='w-64 border border-purple-500' src="https://media.istockphoto.com/id/1566472661/photo/tungsten-bulb-fluorescent-bulb-and-led-bulb.webp?b=1&s=170667a&w=0&k=20&c=2S93Nb-4hsUhpldCjhqpmWd9VGUvwf1HzAGFRkbl5pQ=" alt="" />
        </div>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-purple-500'>
            404
          </h2>
          <p className='text-2xl font-semibold md:text-3xl text-purple-500 mb-8'>
            Page Not Found
          </p>
          <Link to='/' className=' bg-purple-500 p-4 rounded-md text-white font-bold hover:bg-purple-600'>
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
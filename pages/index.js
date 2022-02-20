import Head from 'next/head';
import { useEffect, useState } from 'react';
import Values from 'values.js';
import SingleColor from '../components/singleColor';

export default function Home() {
  const [color, setColor] = useState('');
  const [colorList, setColorList] = useState(new Values('#f15025').all(10));
  const [error, setError] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [error]);

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setColorList(colors);
    } catch (error) {
      setError(true);
    }
    setColor('');
  };
  return (
    <div>
      <Head>
        <title>color generator</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className=' py-20 '>
        <header className='container mx-auto  text-center'>
          <h3 className='uppercase group text-gray-100 font-bold text-3xl'>
            color{' '}
            <span className='text-cyan-400  inline-flex animate-bounce duration-100 group-hover:animate-none'>
              generator
            </span>
          </h3>
          <form onSubmit={handleSubmit} className=' space-x-2'>
            <input
              type='text'
              value={color}
              placeholder='Generate color schemes'
              onChange={(e) => setColor(e.target.value)}
              className='px-3 py-2 rounded-md outline-none text-gray-100 mt-6 bg-[#1c2a4f] border focus:border-opacity-0 focus:ring-2 ring-cyan-400 border-1 border-gray-300/5 caret-cyan-400 placeholder:text-gray-500'
            />
            <button
              type='submit'
              className='px-3 py-2 hover:scale-105 duration-100 ease-out outline-none transform bg-cyan-400 active:scale-100   active:ring-opacity-0 text-[#1c2a4f] rounded-md font-medium '
            >
              Submit
            </button>
          </form>
        </header>
        {error && (
          <div className='text-center mt-5 uppercase text-red-800 py-2 px-3 text-sm font-bold rounded-md max-w-[200px] mx-auto bg-red-400'>
            Enter Correct Color
          </div>
        )}
        <div className='max-w-4xl grid grid-cols-4 sm:grid-cols-5 md:gap-6 md:grid-cols-6 gap-y-8 gap-4 px-10 mt-12 mx-auto text-white '>
          {colorList.map((color, index) => (
            <SingleColor key={index} hex={color.hex} index={index} {...color} />
          ))}
        </div>
      </main>
    </div>
  );
}

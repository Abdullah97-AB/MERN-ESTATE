import { FaSearch } from 'react-icons/fa';
import {link } from 'react-router-dom'

export default function Header() {
  return (
    <Header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <link to='/'>
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <spanclass Name='text-Blue-500'>Abdullah</spanclass>
        <spanclass Name='text-Green-700'>Estate</spanclass>
      </h1>
     </link>
      <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
        <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
        <FaSearch className='text-slate-600'/>
      </form>
      <ul className='flex gap-4'>
        <link to='/'>
        <li className='hidden sm:inline text-slate-700 hover:underline'> Home
           </li>
           </link>
           <link to='/about'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
        </link>
        <link to='/sign-in'>
        <li className=' text-slate-700 hover:underline'>Sign in</li>
        </link>
      </ul>
      </div>
    </Header>
  );
}

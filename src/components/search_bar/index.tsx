import SearchIcon from '@/app/icons/serarch'
import React from 'react'

const SearchBar = () => {
  return (
    <form className='p-2 bg-[#202A49] rounded-lg flex flex-row items-center justify-center w-fit gap-2'>
      <span>
        <SearchIcon className='fill-[#1758B4]' />
      </span>
      <input
        type="text"
        className='outline-none bg-transparent text-white flex-1 md:w-[400px] lg:w-[500px]'
        placeholder='Search GitHub username...'
      />
      <button type='submit' className='rounded-lg bg-[#0079FF] text-white p-3 hover:bg-[#0077ffc1] transition-color duration-300 font-semibold'>
        Search
      </button>
    </form>
  )
}

export default SearchBar
import SearchIcon from '@/icons/serarch'
import React from 'react'

const SearchBar = () => {
  return (
    <form className='p-2 bg-[#202A49] rounded-lg flex flex-row items-center justify-center gap-2 w-full md:max-w-[700px]'>
      <span>
        <SearchIcon className='fill-[#1758B4]' />
      </span>
      <input
        type="text"
        className='outline-none bg-transparent text-white flex-1 h-full'
        placeholder='Search GitHub username...'
      />
      <button type='submit' className='rounded-lg bg-[#0079FF] text-white p-1 md:p-2 lg:p-3 hover:bg-[#0077ffc1] transition-color duration-300 font-semibold'>
        Search
      </button>
    </form>
  )
}

export default SearchBar
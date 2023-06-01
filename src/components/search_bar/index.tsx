import SearchIcon from '@/app/icons/serarch'
import React from 'react'

const SearchBar = () => {
  return (
    <form className='p-2 bg-[#202A49] rounded-lg flex flex-row items-center justify-center w-fit gap-2'>
      <SearchIcon className='fill-[#1758B4]' />
      <input
        type="text"
        className='outline-none bg-[#202A49] text-white'
        placeholder='Search GitHub username...'
      />
      <button type='submit' className='rounded-lg bg-[#0079FF] text-white p-3'>
        Search
      </button>
    </form>
  )
}

export default SearchBar
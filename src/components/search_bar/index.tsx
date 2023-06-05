'use client';
import SearchIcon from '@/icons/serarch'
import React, { ReactEventHandler, useState } from 'react'

interface Props {
  getUsers: (username: string) => Promise<void>
}

const SearchBar = ({ getUsers }: Props) => {

  const [input, setInput] = useState('')

  const handleSubmit = async (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault()

    await getUsers(input)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className='p-2 bg-[#202A49] rounded-lg flex flex-row items-center justify-center gap-2 md:h-[3.5rem] lg:h--[4.5rem] w-full md:max-w-[700px] mt-6'>
      <span>
        <SearchIcon className='fill-[#1758B4]' />
      </span>
      <input
        onChange={handleChange}
        type="text"
        value={input}
        name='username'
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
'use client';
import SearchIcon from '@/icons/serarch'
import React, { ReactEventHandler, useState } from 'react'

interface Props {
  getUsers: (username: string) => Promise<void>
}

const SearchBar = ({ getUsers }: Props) => {

  const [input, setInput] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(true)

  const handleSubmit = async (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault()
    await getUsers(input)
    setInput('')
    setDisabled(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
    if (e.target.value.length !== 0) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
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
        className='outline-none bg-transparent text-white flex-1 h-full appearance-none focus:outline-none focus:bg-transparent'
        placeholder='Search GitHub username...'
        autoComplete='off'
      />
      <button
        type='submit'
        disabled={disabled}
        className={`rounded-lg ${disabled ? 'bg-[#0077ff54] text-[#ffffff4c]' : 'bg-[#0079FF] text-white hover:bg-[#0077ffc1]'}  p-1 md:p-2 lg:p-3  transition-color duration-300 font-semibold`}
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar
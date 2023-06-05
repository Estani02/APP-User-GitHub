import SunIcon from '@/icons/sun'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center p-3 md:py-5 px-3 bg-blue-950 text-blue-200 text-sm md:text-base'>
      <h1 className='font-semibold'>devfinder</h1>
      <button className='flex flex-row items-center font-medium gap-2'>
        LIGHT
        <SunIcon />
      </button>
    </nav>
  )
}

export default NavBar
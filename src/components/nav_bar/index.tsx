import SunIcon from '@/icons/sun'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center p-3 md:py-5 px-3 text-blue-950 dark:bg-blue-950 dark:text-blue-200 text-base md:text-xl lg:text-2xl font-semibold md:font-bold'>
      <h1 className='uppercase'>devfinder</h1>
      <button className='flex flex-row items-center gap-2'>
        LIGHT
        <SunIcon />
      </button>
    </nav>
  )
}

export default NavBar
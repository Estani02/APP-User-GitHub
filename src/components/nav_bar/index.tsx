'use client';
import MoonIcon from '@/icons/moon';
import SunIcon from '@/icons/sun'
import React, { useEffect, useState } from 'react'

// const initialThemeState = localStorage.getItem('theme') as 'light' | 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

const initialThemeState = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme') as 'light' | 'dark'
    } else {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    }
  }
  return 'dark'
}

const NavBar = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(initialThemeState)

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <nav className='flex justify-between items-center p-3 md:py-5 px-3 text-blue-950 dark:bg-blue-950 dark:text-blue-200 text-base md:text-xl font-semibold md:font-bold'>
      <h1 className='uppercase'>devfinder</h1>
      <button onClick={handleTheme} className='flex flex-row items-center gap-2'>
        {theme === 'light' ? `LIGHT` : `DARK`}
        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
      </button>
    </nav>
  )
}

export default NavBar
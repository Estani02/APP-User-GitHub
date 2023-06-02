/* eslint-disable @next/next/no-img-element */
import CityIcon from '@/icons/city'
import LinkIcon from '@/icons/link'
import LocationIcon from '@/icons/location'
import TwitterIcon from '@/icons/twitter'
import React from 'react'

const Card = () => {
  return (
    <section className='bg-[#202A49] flex flex-col md:flex-row gap-5 px-5 py-5 md:p-10 rounded-lg w-full md:max-w-[700px] mb-28'>
      <img src="https://i.pravatar.cc/150?u=dapelu" alt="Avatar de dapelu" className='rounded-[50%] h-20 w-20 hidden md:block' />
      <div className='md:flex md:flex-col gap-6'>
        <article className='flex flex-row gap-3'>
          <img src="https://i.pravatar.cc/150?u=dapelu" alt="Avatar de dapelu" className='rounded-[50%] h-auto w-20 md:hidden' />
          <div className='flex flex-col text-blue-200'>
            <h3>The Octacto</h3>
            <a href="" className='text-sky-600 text-xs md:text-sm'>@theoctact</a>
            <span className='mt-2'>Joined 25 Jan 2011</span>
          </div>
        </article>
        <article className='flex flex-col justify-center items-center'>
          <p className='text-[#8C93A0]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quos culpa quam beatae, minima nulla iste, dicta molestias dolorem magnam consequuntur aperiam delectus quod ullam libero deleniti amet maxime quis?
          </p>
          <div className='flex flex-row justify-center gap-10 mt-7 py-6 px-4 rounded-lg bg-[#161C30] w-full'>
            <div className='flex flex-col items-center'>
              <span className='text-[#8C93A0] font-semibold mb-2'>Repos</span>
              <div className='text-white'>8</div>
            </div>
            <div className='flex flex-col items-center'>
              <span className='text-[#8C93A0] font-semibold mb-2'>Followers</span>
              <div className='text-white'>3938</div>
            </div>
            <div className='flex flex-col items-center'>
              <span className='text-[#8C93A0] font-semibold mb-2'>Followings</span>
              <div className='text-white'>9</div>
            </div>
          </div>
        </article>
        <article className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-4'>
          <div className='flex flex-row gap-2'>
            <LocationIcon className='fill-white' />
            <span className='mr-2 text-white'>San Fransico</span>
          </div>
          <div className='flex flex-row gap-2'>
            <LinkIcon className='fill-white' />
            <a href='https://github.com/Estani02?tab=repositories' target='_blank' className='mr-2 text-white'>https://github.com/Estani02</a>
          </div>
          <div className='flex flex-row gap-2'>
            <TwitterIcon className='fill-white' />
            <span className='mr-2 text-white'>Not Available</span>
          </div>
          <div className='flex flex-row gap-2'>
            <CityIcon className='fill-white' />
            <span className='mr-2 text-white'>@github</span>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Card
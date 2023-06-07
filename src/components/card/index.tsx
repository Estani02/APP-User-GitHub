import CityIcon from '@/icons/city'
import LinkIcon from '@/icons/link'
import LocationIcon from '@/icons/location'
import TwitterIcon from '@/icons/twitter'
import { DataUser } from '@/interfaces/user'
import Image from 'next/image'
import React, { use } from 'react'

interface PropsUser {
  user: DataUser
}

const Card = ({ user }: PropsUser) => {
  return (
    <section className='bg-white shadow-md dark:shadow-none dark:bg-[#202A49] flex flex-col md:flex-row md:justify-center gap-5 px-5 py-5 md:p-10 rounded-lg w-full md:max-w-[700px] lg:max-w-[850px] mb-28 transition-colors duration-300'>
      <Image src={user.avatar_url} width={80} height={80} alt="Avatar" className='rounded-[50%] h-20 w-20 hidden md:block' />
      <div className='md:flex md:flex-col gap-6'>
        <article className='flex flex-row gap-3'>
          <Image src={user.avatar_url} width={80} height={80} alt="Avatar de dapelu" className='rounded-[50%] h-auto w-20 md:hidden' />
          <div className='flex flex-col text-blue-500 dark:text-blue-200'>
            <h3>{user.name}</h3>
            <p className='dark:text-sky-600 text-sky-800 text-xs md:text-sm'>@{user.login}</p>
            <span className='mt-2'>
              {new Date(user.created_at || "").toLocaleDateString("es", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </span>
          </div>
        </article>
        <article className='flex flex-col justify-center items-center'>
          <p className='dark:text-[#8C93A0] text-black mt-4'>
            {user.bio}
          </p>
          <div className='flex flex-row justify-center gap-10 mt-7 py-6 px-4 rounded-lg bg-gray-200 shadow-md dark:bg-[#161C30] w-full'>
            <div className='flex flex-col items-center'>
              <span className='dark:text-[#8C93A0] text-black font-semibold mb-2'>Repos</span>
              <div className='text-blue-950 dark:text-white'>{user.public_repos}</div>
            </div>
            <div className='flex flex-col items-center'>
              <span className='dark:text-[#8C93A0] text-black font-semibold mb-2'>Followers</span>
              <div className='text-blue-950 dark:text-white'>{user.followers}</div>
            </div>
            <div className='flex flex-col items-center'>
              <span className='dark:text-[#8C93A0] text-black font-semibold mb-2'>Followings</span>
              <div className='text-blue-950 dark:text-white'>{user.following}</div>
            </div>
          </div>
        </article>
        <article className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-4'>
          <div className='flex flex-row items-center gap-2'>
            <LocationIcon className='dark:fill-white fill-blue-950' />
            <span className={`mr-2 ${user.location ? 'text-blue-950 dark:text-white' : 'text-gray-400'}`}>{user.location || "Not Available"}</span>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <LinkIcon className='text-blue-950 dark:fill-white fill-blue-950' />
            <a href={user.html_url} target='_blank' className='mr-2 truncate text-blue-950 dark:text-white hover:text-blue-700 dark:hover:text-slate-300 transition-colors duration-300'>{user.html_url}</a>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <TwitterIcon className='dark:fill-white fill-blue-950' />
            <span className={`mr-2 truncate ${user.twitter_username ? 'text-blue-950 dark:text-white' : 'text-gray-400'}`}>{user.twitter_username ? user.twitter_username : "Not Available"}</span>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <CityIcon className='dark:fill-white fill-blue-950' />
            <p className={`mr-2 ${user.company ? 'text-blue-950 dark:text-white' : 'text-gray-400'}`}>{user.company || "Not Available"}</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Card
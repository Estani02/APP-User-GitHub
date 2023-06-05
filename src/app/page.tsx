'use client'
import Card from "@/components/card"
import SearchBar from "@/components/search_bar"
import { DataUser } from "@/interfaces/user"
import { useState } from "react"


export default function Home() {

  const [user, setUser] = useState<DataUser | null>(null)

  const getUsers = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`)
    const data = await res.json()
    setUser(data)
  }

  return (
    <div className="flex flex-col justify-center items-center gap-6 w-full px-6 bg-[#161C30] text-sm md:text-base">
      <SearchBar getUsers={getUsers} />
      {user && <Card user={user} />}

    </div>
  )
}

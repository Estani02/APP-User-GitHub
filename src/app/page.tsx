'use client'
import Card from "@/components/card"
import SearchBar from "@/components/search_bar"
import { DataUser } from "@/interfaces/user"
import { useState } from "react"


export default function Home() {

  const [user, setUser] = useState<DataUser | null | undefined>(undefined)
  const [username, setUsername] = useState<string>('')

  const getUsers = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`)
    if (!res.ok) {
      setUser(null)
      setUsername(username)
      return
    }
    const data = await res.json()
    setUser(data)
  }

  return (
    <div className="flex flex-col justify-center items-center gap-6 w-full px-6">
      <SearchBar getUsers={getUsers} />
      {user ?
        <Card user={user} /> : user === null ?
          <div className=" mt-20 flex justify-center items-center text-white font-bold text-xl md:text-2xl">
            Username {`"${username}"`} not found
          </div> : <></>
      }
    </div>
  )
}

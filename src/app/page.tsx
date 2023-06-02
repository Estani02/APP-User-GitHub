import Card from "@/components/card"
import SearchBar from "@/components/search_bar"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 mt-6 mb-6 w-full px-6">
      <SearchBar />
      <Card />
    </div>
  )
}

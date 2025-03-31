import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const SearchInput = () => {
  return (
    <div>
      <form action="">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"/>
        <Input type="text" placeholder="Search..." className="w-full pl-10 focus-visible:ring-1"/>

      </div>
      </form>
    </div>
  )
}

export default SearchInput
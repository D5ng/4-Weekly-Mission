import { useState, ChangeEvent } from "react"

export default function useSearch(initialState: string) {
  const [searchValue, setSearchValue] = useState(initialState)
  const handleSearchValueReset = () => setSearchValue("")
  const handleSearchValueChange = (event: ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value)

  return {
    searchValue,
    handleSearchValueChange,
    handleSearchValueReset,
  }
}

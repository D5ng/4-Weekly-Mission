"use client"

import React, { useEffect } from "react"
import Image from "next/image"
import useDebounce from "@/hooks/use-debounce"
import useSearch from "@/hooks/use-search"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import classes from "./searchBar.module.css"
import searchIcon from "@/public/searchBar/search.svg"
import exitIcon from "@/public/common/modal_close.svg"
import type { InputHTMLAttributes } from "react"

export default function SearchBar({ ...inputProps }: InputHTMLAttributes<HTMLInputElement>) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const { searchValue, handleSearchValueChange, handleSearchValueReset } = useSearch(searchParams.get("query") || "")
  const debounceSearchValue = useDebounce(searchValue, 0.2)

  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    params.set("query", debounceSearchValue)
    router.replace(`${pathname}?${params.toString()}`)
  }, [debounceSearchValue, pathname, router, searchParams])

  return (
    <div className={classes.searchBar}>
      <input className={classes.input} onChange={handleSearchValueChange} value={searchValue} {...inputProps} />
      <div className={classes.imageWrapper}>
        <Image src={searchIcon} alt="" fill />
      </div>

      {searchValue && (
        <button type="button" onClick={handleSearchValueReset} className={classes.cancel}>
          <Image src={exitIcon} alt="입력한 값 지우기" fill />
        </button>
      )}
    </div>
  )
}

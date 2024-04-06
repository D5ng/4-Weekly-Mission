import { fetchData } from "@/utils/fetch-utils"
import { CATEGORIES_API, LINKS_API, PROFILE_API } from "./api-service"
import type { Category, Link, Profile } from "../types/category-type"

export async function fetchCategories() {
  const responseData = await fetchData<Category[]>(CATEGORIES_API)
  return responseData
}

export async function fetchLinks(folderId: string) {
  const responseData = await fetchData<Link[]>(`${LINKS_API}${folderId}`)
  return responseData
}

export async function filteredLinks(query: string = "", folderId: string = "") {
  const responseData = await fetchLinks(folderId)
  if (responseData instanceof Error) return responseData
  return responseData.filter(
    (linkData: any) =>
      linkData.url?.includes(query) || linkData.title?.includes(query) || linkData.description?.includes(query)
  )
}

export async function fetchProfile() {
  const responseData = await fetchData<Profile[]>(PROFILE_API)
  return responseData
}

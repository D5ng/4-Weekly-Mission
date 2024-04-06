const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const USER_ID = 4

export const CATEGORIES_API = `${BASE_URL}/users/${USER_ID}/folders`

export const LINKS_API = `${BASE_URL}/users/${USER_ID}/links?folderId=`

export const PROFILE_API = `${BASE_URL}/users/${USER_ID}`

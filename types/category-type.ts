export interface Category {
  id: number
  created_at: string
  name: string
  user_id: number
  favorite: boolean
  link: {}
}

export interface Link {
  id: number
  folder_id: number
  created_at: string
  url: string
  title: string
  description: string
  image_source: string
}

export interface Profile {
  id: number
  created_at: string
  name: string
  image_source: string
  email: string
  auth_id: string
}

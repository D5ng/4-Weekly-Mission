export interface CategoryData {
  id: number
  created_at: string
  name: string
  user_id: number
  favorite: boolean
  link: {}
}

export interface SearchParams<T> {
  searchParams: {
    [T: string]: string
  }
}

export interface Params<U> {
  params: {
    [U: string]: string
  }
}

export interface PageProps<T extends string, U extends string> extends SearchParams<T>, Params<U> {
  children: Readonly<React.ReactNode>
}

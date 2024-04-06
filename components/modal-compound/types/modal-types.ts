import { ReactNode, ChangeEvent, InputHTMLAttributes } from "react"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export interface CategoriesProps {
  data?: any
  selectedItem?: string | null
  onSelectedItem?: (id: string) => void
}

export interface ModalContextProps extends InputProps, CategoriesProps {
  onCloseModal: () => void
  categoryName?: string
  categoryData?: any
  profileData?: any
}

export interface ModalProps {
  children: ReactNode
  value: ModalContextProps
}

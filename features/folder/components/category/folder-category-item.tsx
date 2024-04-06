import React from "react"
import classes from "./folder-category-item.module.css"
import { CategoryData } from "../../types/folder-type"

interface FolderCategoryItemProps {
  category: Omit<CategoryData, "created_at" | "user_id" | "favorite" | "link">
  categoryId: string
}

export default function FolderCategoryItem({ category, categoryId }: FolderCategoryItemProps) {
  const className = +categoryId === category.id ? `${classes.active} ${classes.button}` : classes.button
  return <button className={className}>{category.name}</button>
}

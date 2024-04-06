"use client"

import { useParams } from "next/navigation"
import classes from "./folder-title.module.css"

interface TitleProps {
  categories: any
}

export default function FolderTitle(props: TitleProps) {
  const params = useParams()
  const categoryId = +params.categoryId
  const categoryName = props.categories.find((category: any) => category.id == categoryId)?.name || "전체"

  return <h2 className={classes.title}>{categoryName}</h2>
}

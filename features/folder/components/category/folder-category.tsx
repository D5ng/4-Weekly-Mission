"use client"

import React from "react"
import classes from "./folder-category.module.css"
import FolderCategoryItem from "./folder-category-item"
import { CategoryData } from "../../types/folder-type"
import { useParams } from "next/navigation"
import Link from "next/link"

export default function FolderCategory({ categories }: any) {
  const params = useParams()
  const categoryId = (params.categoryId as string) || "0"

  return (
    <ul className={classes.categories}>
      <li>
        <Link href={`/folder`}>
          <FolderCategoryItem category={{ id: 0, name: "전체" }} categoryId={categoryId} />
        </Link>
      </li>
      {categories.map((category: CategoryData) => (
        <li key={category.id}>
          <Link href={`/folder/${category.id}`}>
            <FolderCategoryItem category={category} categoryId={categoryId} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

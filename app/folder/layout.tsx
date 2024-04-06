import React from "react"
import FolderAddForm from "@/features/folder/components/folder-add-form/folder-add-form"
import FolderFeatures from "@/features/folder/components/layout/folder-features"

interface FolderLayoutProps {
  children: Readonly<React.ReactNode>
  params: {
    categoryId: string
  }
}

export default function FolderLayout(props: FolderLayoutProps) {
  return (
    <>
      <FolderAddForm />
      <FolderFeatures>{props.children}</FolderFeatures>
    </>
  )
}

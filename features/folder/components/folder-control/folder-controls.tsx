"use client"

import FolderControlItem from "./folder-control-item"
import classes from "./folder-controls.module.css"

import buttonShareIcon from "@/public/folder/feature-share.svg"
import buttonEditIcon from "@/public/folder/feature-edit.svg"
import buttonDeleteIcon from "@/public/folder/feature-delete.svg"
import { FolderDeleteModal, FolderChangeNameModal, FolderShareModal } from "@/components/modal-compound/components"
import { useParams } from "next/navigation"

interface FolderControlsProps {
  categories: any
}

export default function FolderControls(props: FolderControlsProps) {
  const params = useParams()
  const categoryId = +params.categoryId
  const categoryData = props.categories.find((category: any) => category.id == categoryId)

  return (
    categoryData?.name && (
      <ul className={classes.folderControls}>
        <FolderControlItem
          icon={buttonShareIcon}
          title="공유"
          renderModal={(onCloseModal: () => void) => (
            <FolderShareModal onCloseModal={onCloseModal} categoryData={categoryData} />
          )}
        />
        <FolderControlItem
          icon={buttonEditIcon}
          title="이름변경"
          renderModal={(onCloseModal: () => void) => (
            <FolderChangeNameModal categoryName={categoryData.name} onCloseModal={onCloseModal} />
          )}
        />
        <FolderControlItem
          icon={buttonDeleteIcon}
          title="삭제"
          renderModal={(onCloseModal: () => void) => (
            <FolderDeleteModal categoryName={categoryData.name} onCloseModal={onCloseModal} />
          )}
        />
      </ul>
    )
  )
}

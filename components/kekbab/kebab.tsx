import React, { ForwardedRef, forwardRef, MouseEventHandler, useState } from "react"
import classes from "./kebab.module.css"
import { KEBAB_LIST } from "./kebab.constants"
import { FolderAddMyFolderModal, FolderDeleteLinkModal } from "../modal-compound/components"
import useToggle from "@/hooks/use-toggle"

interface KebabItem {
  id: number
  title: string
}

function Kebab(props: { link: any }, ref: ForwardedRef<HTMLUListElement>) {
  const [modalName, setModalName] = useState("")
  const { isToggle, handleOpenToggle, handleCloseToggle } = useToggle()
  const handleOpenModal: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()

    const nameValue = (event.target as HTMLButtonElement).name
    setModalName(nameValue)
    handleOpenToggle(event)
  }

  return (
    <ul className={classes["kebab-list"]} ref={ref}>
      {KEBAB_LIST.map((item: KebabItem) => (
        <li key={item.id} className={classes["kebab-item"]}>
          <button className={classes["kebab-button"]} name={item.title} onClick={handleOpenModal}>
            {item.title}
          </button>
        </li>
      ))}

      {isToggle && modalName === "삭제하기" && (
        <FolderDeleteLinkModal url={props.link.url} onCloseModal={handleCloseToggle} />
      )}
      {isToggle && modalName === "폴더에 추가" && <FolderAddMyFolderModal onCloseModal={handleCloseToggle} />}
    </ul>
  )
}

export default forwardRef(Kebab)

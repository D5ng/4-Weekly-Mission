import Image from "next/image"
import classes from "./folder-control-item.module.css"
import useToggle from "@/hooks/use-toggle"
import { PropsWithChildren } from "react"

interface FolderControlItemProps extends PropsWithChildren {
  icon: any
  title: string
  renderModal: any
}

export default function FolderControlItem(props: FolderControlItemProps) {
  const { isToggle, handleOpenToggle, handleCloseToggle } = useToggle()
  return (
    <>
      <li className={classes.controlsItem}>
        <button onClick={handleOpenToggle}>
          <Image src={props.icon} alt="" width={18} height={18} />
          <span>{props.title}</span>
        </button>
      </li>
      {isToggle && props.renderModal(handleCloseToggle)}
    </>
  )
}

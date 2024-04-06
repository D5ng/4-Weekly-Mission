import { createContext, PropsWithChildren, useContext } from "react"
import { createPortal } from "react-dom"
import classes from "./modal-context.module.css"
import Image from "next/image"

import modalSelectedIcon from "@/public/folder/modal-check.svg"
import modalCloseIcon from "@/public/folder/modal_close.svg"
import { SHARE_ICONS } from "./modal-constant"
import type { ModalProps, ModalContextProps } from "../types/modal-types"

export const ModalContext = createContext<ModalContextProps>({
  onCloseModal: () => {},
})

export function Modal({ children, value }: ModalProps) {
  const modalElement = document.getElementById("modal-root")! as HTMLDivElement
  const backdropElement = document.getElementById("backdrop-root")! as HTMLDivElement

  return (
    <>
      {createPortal(<Backdrop onCloseModal={value.onCloseModal} />, backdropElement)}
      {createPortal(
        <ModalContext.Provider value={value}>
          <div className={classes.modal}>
            <div className={classes.modalLayout}>{children}</div>
          </div>
        </ModalContext.Provider>,
        modalElement
      )}
    </>
  )
}

function Button(props: PropsWithChildren<{ background: "error" | "gradient" }>) {
  const className = `${classes.modalButton} ${classes[props.background]}`
  return <button className={className}>{props.children}</button>
}

function Categories() {
  const { data, selectedItem, onSelectedItem } = useContext(ModalContext)
  return (
    <ul className={classes.categoryList}>
      {data?.map((links: any) => (
        <div className={classes.categoryItem} key={links.id}>
          <button className={classes.categoryItemButton} onClick={onSelectedItem!.bind(null, links.id)}>
            <span className={classes.categoryLinkrName}>{links.name}</span>
            <span className={classes.categoryLinkCount}>{links.link.count}개의 링크</span>
            {selectedItem === links.id && <Image src={modalSelectedIcon} alt="" className={classes.selectedImage} />}
          </button>
        </div>
      ))}
    </ul>
  )
}

function Exit() {
  const { onCloseModal } = useContext(ModalContext)
  return (
    <button className={classes.modalExit} onClick={onCloseModal}>
      <Image src={modalCloseIcon} alt="모달 창 닫기" fill />
    </button>
  )
}

function Input() {
  const { value, onChange, placeholder, categoryName } = useContext(ModalContext)
  return <input className={classes.input} value={value} placeholder={categoryName || placeholder} onChange={onChange} />
}

function Paragraph(props: PropsWithChildren) {
  return <span className={classes.modalText}>{props.children}</span>
}

function Title(props: PropsWithChildren) {
  return <h3 className={classes.title}>{props.children}</h3>
}

function Backdrop(props: { onCloseModal: () => void }) {
  return <div className={classes.backdrop} onClick={props.onCloseModal}></div>
}

function Share() {
  const { categoryData, profileData } = useContext(ModalContext)
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      alert("클립보드에 링크가 복사되었습니다.")
    } catch (e) {
      alert("복사에 실패하였습니다")
    }
  }

  if (!profileData || !categoryData) {
    return <p>loading...</p>
  }

  return (
    <div className={classes.shareIconLayout}>
      {profileData &&
        SHARE_ICONS.map((icon) => (
          <button
            className={classes.shareButton}
            key={icon.id}
            onClick={handleCopyClipBoard.bind(
              null,
              `localhost:3000/shared?user=${profileData.id}?folder=${categoryData.id}`
            )}
          >
            <Image
              className={classes.shareIcon}
              src={icon.image}
              alt={`${icon.title}으(로) 폴더 공유하기`}
              width={42}
              height={42}
            />
            <span className={classes.shareTitle}>{icon.title}</span>
          </button>
        ))}
    </div>
  )
}

Modal.Button = Button
Modal.Input = Input
Modal.Title = Title
Modal.Exit = Exit
Modal.Paragraph = Paragraph
Modal.Share = Share
Modal.Categories = Categories

"use client"

import React, { MouseEventHandler } from "react"
import Image from "next/image"
import Kebab from "@/components/kekbab/kebab"
import kebabIcon from "@/public/folder/kebab.svg"
import useOutside from "@/hooks/use-outside"
import useToggle from "@/hooks/use-toggle"
import classes from "./card-kebab.module.css"

export default function CardKebab(props: { link: any }) {
  const { isToggle, handleOpenToggle, handleCloseToggle } = useToggle()
  const kebabRef = useOutside<HTMLUListElement>(isToggle, handleCloseToggle)

  const handleKebabClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()
    handleOpenToggle(event)
  }

  return (
    <>
      {isToggle && <Kebab ref={kebabRef} link={props.link} />}
      <button className={classes.kebab} onClick={handleKebabClick}>
        <Image src={kebabIcon} alt="케밥 메뉴 열기" width={0} height={0} />
      </button>
    </>
  )
}

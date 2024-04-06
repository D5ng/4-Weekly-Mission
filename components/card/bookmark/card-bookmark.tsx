import React from "react"
import Image, { ImageProps } from "next/image"
import starIcon from "@/public/folder/star.svg"
import classes from "./card-bookmark.module.css"

export default function CardBookmark(props: Omit<ImageProps, "src">) {
  return (
    <div className={classes.starWrapper}>
      <Image src={starIcon} alt={props.alt} width={props.width} height={props.height} />
    </div>
  )
}

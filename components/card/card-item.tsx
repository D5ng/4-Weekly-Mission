import React from "react"
import classes from "./card-item.module.css"
import CardBackground from "./background/card-background"
import CardBookmark from "./bookmark/card-bookmark"
import CardContents from "./contents/card-contents"
import { isNotIncludesCardData } from "@/utils/card-utils"

export default function CardItem({ link }: any) {
  if (isNotIncludesCardData(link.image_source, "https") || isNotIncludesCardData(link.url, "https")) return null
  return (
    <>
      <li className={classes.cardItem}>
        <a href={link.url} target="_blank" rel="noreferrer noopener">
          <CardBookmark alt="즐겨찾기" width={33} height={33} />
          <div className={classes.imageWrapper}>
            <CardBackground image={link.image_source} alt={link.title} />
          </div>
          <CardContents link={link} />
        </a>
      </li>
    </>
  )
}

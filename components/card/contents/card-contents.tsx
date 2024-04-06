import React from "react"
import CardKebab from "./card-kebab"
import classes from "./card-contents.module.css"
import { elapsedTimeCalc } from "@/utils/moment"

interface CardContentsProps {
  link: any
}

export default function CardContents(props: CardContentsProps) {
  const elapsedTime = elapsedTimeCalc(props.link.created_at)
  return (
    <div className={classes.contents}>
      <CardKebab link={props.link} />
      <span className={classes.elapsedTime}>{elapsedTime}</span>
      <p className={classes.description}>{props.link.description}</p>
      <time className={classes.date}>{props.link.date}</time>
    </div>
  )
}

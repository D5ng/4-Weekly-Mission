import React from "react"
import classes from "./card.module.css"
import CardItem from "./card-item"
import AlertBanner from "@/components/ui/alert-banner"

export default function Card({ links }: any) {
  if (links.error) return <AlertBanner>{links.errorMessage}</AlertBanner>
  if (links.length === 0) return <AlertBanner type="info">링크가 비어있어요.</AlertBanner>

  return (
    <ul className={classes.cardList}>
      {links.map((link: any) => (
        <CardItem link={link} key={link.id} />
      ))}
    </ul>
  )
}

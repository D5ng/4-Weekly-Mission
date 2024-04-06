import CardItemSkelton from "./card-item-skelton"
import classes from "./card-skelton.module.css"

export default function CardSkelton() {
  return (
    <ul className={classes.cardList}>
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <CardItemSkelton key={index} />
        ))}
    </ul>
  )
}

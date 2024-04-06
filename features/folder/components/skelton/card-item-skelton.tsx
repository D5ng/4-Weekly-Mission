import classes from "./card-item-skelton.module.css"

export default function CardItemSkelton() {
  return (
    <li className={classes.cardItem}>
      <div className={`${classes.starWrapper}`}></div>
      <div className={`${classes.imageWrapper} ${classes.skelton}`}></div>
      <div className={`${classes.contents}`}>
        <span className={`${classes.elapsedTime} ${classes.skelton}`}></span>
        <p className={`${classes.description} ${classes.skelton}`}></p>
        <time className={`${classes.date} ${classes.skelton}`}></time>
      </div>
    </li>
  )
}

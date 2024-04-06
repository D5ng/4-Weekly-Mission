import classes from "./loading.module.css"

export default function Loading() {
  return (
    <svg viewBox="25 25 50 50" className={classes.loading}>
      <circle cx="50" cy="50" r="20" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#6D6AFE" />
    </svg>
  )
}

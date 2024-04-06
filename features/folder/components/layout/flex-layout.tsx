import classes from "./flex-layout.module.css"

export default function FlexLayout(props: { children: React.ReactNode }) {
  return <div className={classes.flexLayout}>{props.children}</div>
}

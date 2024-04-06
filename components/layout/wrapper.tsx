import { ReactNode } from "react"
import classes from "./wrapper.module.css"

interface WrapperProps {
  children: ReactNode
}

export default function Wrapper({ children }: WrapperProps) {
  return <div className={classes.wrapper}>{children}</div>;
}
import Link from "next/link"
import { ReactNode } from "react"
import classes from "./button.module.css"

interface ButtonProps {
  href?: string
  type?: "button" | "submit"
  size: "small" | "medium" | "large"
  children: ReactNode
}

export default function Button({ type = "button", ...props }: ButtonProps) {
  const customCSS = `${classes.button} ${classes[props.size]}`
  if (props.href) {
    return (
      <Link href={props.href} className={customCSS}>
        {props.children}
      </Link>
    )
  }

  return (
    <button type={type} className={customCSS}>
      {props.children}
    </button>
  )
}

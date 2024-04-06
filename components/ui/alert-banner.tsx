import React, { ReactNode } from "react"
import dangerIcon from "@/public/alertBanner/danger.svg"
import infoIcon from "@/public/alertBanner/info.svg"
import classes from "./alert-banner.module.css"
import Image from "next/image"

interface AlertBannerProps {
  children: ReactNode
  type?: "danger" | "info"
}

const alertType = {
  danger: {
    icon: dangerIcon,
    background: "#faeced",
    color: "#ff1115",
  },
  info: {
    icon: infoIcon,
    background: "#f0f6ff",
    color: "#088cff",
  },
}

function AlertBanner({ children, type = "danger" }: AlertBannerProps) {
  const alertClassName = `${classes.alert} ${classes[type]}`

  return (
    <div className={alertClassName}>
      <div className={classes.iconWrapper}>
        <Image src={alertType[type].icon} alt="" fill />
      </div>
      <p className={classes.message}>{children}</p>
    </div>
  )
}

export default AlertBanner

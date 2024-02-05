import React from "react"
import "./Section.css"

function Section({ children, className }) {
  return (
    <section className={`section-${className}`}>
      <div className={`${className}-container`}>{children}</div>
    </section>
  )
}

export default Section

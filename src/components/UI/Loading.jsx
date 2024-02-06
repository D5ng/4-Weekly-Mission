import React from "react"
import Wrapper from "../layout/Wrapper"

import "./Loading.css"

function Loading({ children }) {
  return (
    <Wrapper className="loading-container">
      <span className="loading">{children}</span>
    </Wrapper>
  )
}

export default Loading

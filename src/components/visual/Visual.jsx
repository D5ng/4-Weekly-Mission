import React from "react"
import Avatar from "../../assets/images/icon/avatar.svg"
import "./Visual.css"

function Visual() {
  return (
    <React.Fragment>
      <img src={Avatar} alt="" className="visual-avatar" />
      <span className="visual-name">@코드잇</span>
      <h2 className="visual-title">⭐️ 즐겨찾기</h2>
    </React.Fragment>
  )
}

export default Visual

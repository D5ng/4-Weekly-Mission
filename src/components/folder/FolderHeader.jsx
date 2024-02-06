import React from "react"
import Avatar from "../../assets/images/icon/avatar.svg"
import Wrapper from "../layout/Wrapper"

import "./FolderHeader.css"

function FolderHeader() {
  return (
    <section className="folderHeader">
      <Wrapper className="folderHeader-container">
        <img src={Avatar} alt="" className="folderHeader-avatar" />
        <span className="folderHeader-name">@코드잇</span>
        <h2 className="folderHeader-title">⭐️ 즐겨찾기</h2>
      </Wrapper>
    </section>
  )
}

export default FolderHeader

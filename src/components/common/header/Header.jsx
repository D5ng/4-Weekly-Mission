import React, { useContext, useEffect } from "react"
import "./header.css"
import Logo from "./Logo"
import Profile from "./Profile"
import Wrapper from "../../layout/Wrapper"
import { ProfileContext } from "../../../context/ProfileContext"

function Header() {
  const { data } = useContext(ProfileContext)

  useEffect(() => {
    const headerElement = document.querySelector(".header")
    const mainElement = document.querySelector("main")

    mainElement.style.marginTop = `${headerElement.clientHeight}px`
  })

  return (
    <header className="header">
      <Wrapper className="header-container">
        <Logo />
        <div>
          {!data && (
            <a href="/signin.html" className="login-btn">
              로그인
            </a>
          )}
          {data && <Profile data={data} />}
        </div>
      </Wrapper>
    </header>
  )
}

export default Header

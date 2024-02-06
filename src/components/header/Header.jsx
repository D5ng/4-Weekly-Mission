import React, { useContext } from "react"
import Logo from "./Logo"
import Profile from "./Profile"

import "./header.css"
import { AuthContext } from "../../context/AuthContext"

function Header() {
  const profileData = useContext(AuthContext)

  return (
    <header className="header">
      <div className="header-container">
        <Logo />
        <div>
          {!profileData && (
            <a href="/signin.html" className="login-btn">
              로그인
            </a>
          )}
          {profileData && <Profile />}
        </div>
      </div>
    </header>
  )
}

export default Header

import React from "react"
import Logo from "./Logo"

import "./header.css"
import Profile from "./Profile"

function Header({ profileData }) {
  return (
    <header className="header">
      <div className="header-container">
        <Logo profileData={profileData} />
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

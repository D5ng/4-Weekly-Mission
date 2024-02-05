import React from "react"
import "./Profile.css"
import profileImage from "../../assets/images/icon/profile-image.svg"

function Profile() {
  return (
    <div className="header-profile">
      <div className="header-profile__image">
        <img src={profileImage} alt="프로필 이미지" />
      </div>
      <span className="header-profile__email">Codeit@codeit.com</span>
    </div>
  )
}

export default Profile

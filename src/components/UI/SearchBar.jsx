import React from "react"

import "./SearchBar.css"
import searchImage from "../../assets/images/icon/search.svg"

function SearchBar({ type, placeholder, name }) {
  return (
    <React.Fragment>
      <div className="search">
        <input type={type} placeholder={placeholder} name={name} className="search-input" />
        <div className="search-icon">
          <img src={searchImage} alt="" />
        </div>
      </div>
    </React.Fragment>
  )
}

export default SearchBar

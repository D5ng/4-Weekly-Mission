import React from "react"
import linkbraryImage from "../../assets/images/linkbrary.jpg"
import "./FolderCardItem.css"
import { elapsedTimeCalc, momentFormat } from "../../utils/moment"

function FolderCardItem({ data }) {
  const defaultImage = data.imageSource ? data.imageSource : linkbraryImage
  const elapsedTime = elapsedTimeCalc(data.createdAt)
  const date = momentFormat(data.createdAt)
  return (
    <li className="folderCardItem">
      <a href={data.url} target="_blank" rel="noreferrer">
        <div className="folderCardItem-image">
          <img src={defaultImage} alt="" />
        </div>
        <div className="folderCardItem-contents">
          <span className="folderCardItem-elapsedTime">{elapsedTime}</span>
          <p className="folderCardItem-description">{data.description}</p>
          <span className="folderCardItem-date">{date}</span>
        </div>
      </a>
    </li>
  )
}

export default FolderCardItem

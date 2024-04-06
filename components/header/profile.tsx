import Image from "next/image"
import classes from "./profile.module.css"
import defaultImage from "@/public/common/defaultProfile.svg"

interface ProfileProps {
  data: {
    email: string
    id: number
    image_source: string
    name: string
  }
}

function Profile({ data }: ProfileProps) {
  const image = data.image_source || defaultImage

  if (!data) return null
  return (
    <div className={classes.profile}>
      <div className={classes.imageWrapper}>
        <Image src={image} alt="프로필 이미지" fill />
      </div>
      <span className={classes.email}>{data.email}</span>
    </div>
  )
}

export default Profile

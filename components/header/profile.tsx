import Image from "next/image"
import classes from "./profile.module.css"
import defaultImage from "@/public/common/defaultProfile.svg"
import type { Profile } from "@/types/category-type"

interface ProfileProps {
  data: Profile
}

function Profile(props: ProfileProps) {
  const image = props.data.image_source || defaultImage

  if (!props.data) return null;
  return (
    <div className={classes.profile}>
      <div className={classes.imageWrapper}>
        <Image src={image} alt="프로필 이미지" fill />
      </div>
      <span className={classes.email}>{props.data.email}</span>
    </div>
  );
}

export default Profile

import Image from "next/image"
import classes from "./header.module.css"
import logo from "@/public/common/logo.svg"
import Button from "@/components/ui/button"
import Profile from "./profile"
import { Suspense } from "react"
import Loading from "../ui/loading"
import { fetchProfile } from "@/services/business-sevice"

export async function MyProfile() {
  const responseData = await fetchProfile()

  if (responseData instanceof Error) {
    return (
      <Button href="/signup" size="medium">
        로그인
      </Button>
    );
  }

  return <Profile data={responseData} />
}

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.headerWrapper}>
        <div className={classes.imageWrapper}>
          <Image src={logo} alt="링크브러리 로고" fill priority />
        </div>

        <nav>
          <ul>
            <li>
              <Suspense fallback={<Loading />}>
                <MyProfile />
              </Suspense>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

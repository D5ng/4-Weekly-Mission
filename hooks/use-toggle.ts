import { useState } from "react"

export default function useToggle() {
  const [isToggle, setIsToggle] = useState(false)

  const handleOpenToggle = (event: any) => {
    event.preventDefault()
    setIsToggle(true)
  }

  const handleCloseToggle = () => {
    // event.preventDefault()
    setIsToggle(false)
  }

  return {
    isToggle,
    handleOpenToggle,
    handleCloseToggle,
  }
}

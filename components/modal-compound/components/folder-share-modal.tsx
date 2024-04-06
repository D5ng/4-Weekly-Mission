import { useEffect, useState } from "react"
import { Modal } from "../context/modal-context"
import { fetchProfile } from "@/services/business-sevice"

interface ShareModalProps {
  onCloseModal: () => void
  categoryData: any
}

export default function FolderShareModal({ onCloseModal, categoryData }: ShareModalProps) {
  const [profileData, setProfileData] = useState()
  const value = { onCloseModal, categoryData, profileData }

  useEffect(() => {
    const fetchData = async () => {
      const profileData = await fetchProfile()
      setProfileData(profileData)
    }

    fetchData()
  }, [])

  return (
    <Modal value={value}>
      <Modal.Exit />
      <Modal.Title>폴더 공유</Modal.Title>
      <Modal.Paragraph>{categoryData.name}</Modal.Paragraph>
      <Modal.Share />
    </Modal>
  )
}

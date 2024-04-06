import { useEffect, useState } from "react"
import { Modal } from "../context/modal-context"
import { fetchCategories } from "@/services/business-sevice"

interface AddMyFolderModalProps {
  data?: any
  onCloseModal: () => void
}

export default function FolderAddMyFolderModal({ onCloseModal }: AddMyFolderModalProps) {
  const [data, setData] = useState<any>()
  const [selected, setSelected] = useState<string | null>(null)
  const handleSelectItem = (id: string) => setSelected(id)

  useEffect(() => {
    const getCategory = async () => {
      const data = await fetchCategories()
      setData(data)
    }

    getCategory()
  }, [])

  if (!data) return null

  const value = { data, onCloseModal, selectedItem: selected, onSelectedItem: handleSelectItem }
  return (
    <Modal value={value}>
      <Modal.Exit />
      <Modal.Title>폴더 이름 변경</Modal.Title>
      <Modal.Categories />
      <Modal.Button background="gradient">추가하기</Modal.Button>
    </Modal>
  )
}

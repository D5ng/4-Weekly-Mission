import React from "react"
import { Modal } from "../context/modal-context"

interface FolderDeleteModalProps {
  onCloseModal: () => void
  categoryName: string
}

export default function FolderDeleteModal({ categoryName, onCloseModal }: FolderDeleteModalProps) {
  const value = { onCloseModal }
  return (
    <Modal value={value}>
      <Modal.Exit />
      <Modal.Title>폴더 삭제</Modal.Title>
      <Modal.Paragraph>{categoryName}</Modal.Paragraph>
      <Modal.Button background="error">변경하기</Modal.Button>
    </Modal>
  )
}

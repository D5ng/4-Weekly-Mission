import { useEffect, useState } from "react"
import { Modal } from "../context/modal-context"
import { fetchCategories } from "@/services/business-sevice"

interface DeleteLinkModalProps {
  url: string
  onCloseModal: () => void
}

export default function FolderDeleteLinkModal({ url, onCloseModal }: DeleteLinkModalProps) {
  const value = { onCloseModal }
  return (
    <Modal value={value}>
      <Modal.Exit />
      <Modal.Title>폴더 삭제</Modal.Title>
      <Modal.Paragraph>{url}</Modal.Paragraph>
      <Modal.Button background="error">삭제하기</Modal.Button>
    </Modal>
  )
}

import React, { ChangeEvent, useState } from "react"
import { Modal } from "../context/modal-context"

interface FolderAddModalProps {
  onCloseModal: () => void
}

export default function FolderAddModal({ onCloseModal }: FolderAddModalProps) {
  const [inputValue, setInputValue] = useState("")
  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)

  const value = {
    onCloseModal,
    onChange: handleChangeInputValue,
    value: inputValue,
    type: "text",
    placeholder: "내용을 입력해주세요.",
  }

  return (
    <Modal value={value}>
      <Modal.Exit />
      <Modal.Title>폴더 추가</Modal.Title>
      <Modal.Input />
      <Modal.Button background="gradient">추가하기</Modal.Button>
    </Modal>
  )
}

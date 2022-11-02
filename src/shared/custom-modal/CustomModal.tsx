import { ModalContainer, ModalContent, ModalContainer2 } from './style'
import { useState, useEffect } from 'react'
interface Props {
  show: boolean
  toggleModal: any
  children: any
  infoPopUpContainer?: any
}

const CustomModal = (props: Props) => {
  const { show, toggleModal, infoPopUpContainer = '', children } = props

  const handleClickOutside = (e: any) => {
    if (e.target === e.currentTarget) {
      toggleModal()
    }
  }
  return (
    <ModalContainer show={show} onMouseDown={handleClickOutside}>
      <ModalContent className={infoPopUpContainer}>{children}</ModalContent>
    </ModalContainer>
  )
}
export default CustomModal

import { ModalContainer, ModalContent, ModalContainer2, ModalContent2  } from './style'
import { useState, useEffect } from 'react'
interface Props {
  show: boolean
  toggleModal: any
  children: any
  infoPopUpContainer?: any
}

const CustomModal2 = (props: Props) => {
  const { show, toggleModal, infoPopUpContainer = '', children } = props

  const handleClickOutside = (e: any) => {
    if (e.target === e.currentTarget) {
      toggleModal()
    }
  }
  return (
    <ModalContainer2 show={show} onMouseDown={handleClickOutside} className={infoPopUpContainer}>
      <ModalContent2 className={infoPopUpContainer}>{children}</ModalContent2>
    </ModalContainer2>
  )
}
export default CustomModal2

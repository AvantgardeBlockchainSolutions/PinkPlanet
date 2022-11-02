import { ModalContainer, ActionModalContent } from './style'

interface Props {
    show: boolean
    toggleModal: any
    children: any
}

const CustomActionModal = (props: Props) => {
    const { show, toggleModal, children } = props

    const handleClickOutside = (e: any) => {
        if (e.target === e.currentTarget) {
            toggleModal()
        }
    }
    return (
        <ModalContainer show={show} onMouseDown={handleClickOutside}>
            <ActionModalContent>{children}</ActionModalContent>
        </ModalContainer>
    )
}
export default CustomActionModal

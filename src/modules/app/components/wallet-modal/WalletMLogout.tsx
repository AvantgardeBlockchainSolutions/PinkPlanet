import { useSelector, useDispatch } from 'react-redux'
import { WalletLogoutCont, LogoutTitle, AddressText, LogoutBtn } from './style'
import { disconnectEthWallet } from 'logic/action/wallet.actions'
import { disconnectWallet } from 'modules/wallet-provider/WalletProvider'

interface Props {
    setOpenModal: any
}

const WalletMLogout = (props: Props) => {
    const selector = useSelector((state: any) => state)
    const dispatch = useDispatch()
    const { address } = selector.ethData
    const { setOpenModal } = props

    const handleLogout = async () => {
        await disconnectWallet()
        dispatch(disconnectEthWallet())
        setOpenModal(false)
        localStorage.clear();
        window.location.reload();
    }

    return (
        <WalletLogoutCont>
            <LogoutTitle>Your Wallet</LogoutTitle>
            <AddressText>{address}</AddressText>
            <LogoutBtn onClick={() => handleLogout()}>Log Out</LogoutBtn>
        </WalletLogoutCont>
    )
}

export default WalletMLogout

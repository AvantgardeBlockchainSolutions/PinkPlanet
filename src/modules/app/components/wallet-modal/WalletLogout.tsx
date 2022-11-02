import { useSelector, useDispatch } from 'react-redux'
import { WalletLogoutCont, LogoutTitle, AddressText, LogoutBtn } from './style'
import { disconnectEthWallet } from 'logic/action/wallet.actions'
import wallet from 'modules/wallet/wallet'

interface Props {
  setOpenModal: any
}

const WalletLogout = (props: Props) => {
  const selector = useSelector((state: any) => state)
  const dispatch = useDispatch()
  const { address } = selector.ethData
  const { setOpenModal } = props

  const handleLogout = async () => {
    wallet.disconnect()
    dispatch(disconnectEthWallet())
    setOpenModal(false)
  }

  return (
    <WalletLogoutCont>
      <LogoutTitle>Your Wallet</LogoutTitle>
      <AddressText>{address}</AddressText>
      <LogoutBtn onClick={() => handleLogout()}>Log Out</LogoutBtn>
    </WalletLogoutCont>
  )
}

export default WalletLogout

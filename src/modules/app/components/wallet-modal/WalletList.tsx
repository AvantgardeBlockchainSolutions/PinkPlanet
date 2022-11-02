import { useDispatch } from 'react-redux'
import { connectEthWallet, disconnectEthWallet } from 'logic/action/wallet.actions'
import { WalletContainer, WalletHeader, WalletTitle, WalletCont, WalletName } from './style'
import CrossIcon from 'assets/icons/white-cross.svg'
import MetamaskIcon from 'assets/icons/meta-mask.png'
import BinanceChainIcon from 'assets/icons/BCI.png'
import WalletConnectIcon from 'assets/icons/wallet-connect.svg'
import wallet from 'modules/wallet/wallet'
import { WalletTypes } from 'modules/wallet/walletConfig'

interface Props {
  setOpenModal: any
}

const WalletList = (props: Props) => {
  const dispatch = useDispatch()
  const { setOpenModal } = props

  const handleWalletConnect = async (type: any) => {
    try {
      await wallet.setProvider(type);
      const address = await wallet.login(type);
      if (address !== undefined) {
        dispatch(connectEthWallet(address));
        localStorage.setItem("walletConnected", JSON.stringify(true));
        localStorage.setItem("walletType", JSON.stringify(type));
      }
    } catch (error) {
      dispatch(disconnectEthWallet())
    }
    finally {
      setOpenModal(false)
    }
  }

  return (
    <WalletContainer>
      <WalletHeader>
        <WalletTitle>Connect Wallet</WalletTitle>
        <img src={CrossIcon} alt="" onClick={() => setOpenModal(false)} />
      </WalletHeader>
      <WalletCont onClick={() => handleWalletConnect(WalletTypes.metamask)}>
        <WalletName>Metamask</WalletName>
        <img src={MetamaskIcon} alt="meta-mask-icon" />
      </WalletCont>
      <WalletCont onClick={() => handleWalletConnect(WalletTypes.binance)}>
        <WalletName>Binance Chain Wallet</WalletName>
        <img src={BinanceChainIcon} alt="binance-icon" />
      </WalletCont>
      <WalletCont onClick={() => handleWalletConnect(WalletTypes.walletConnect)}>
        <WalletName>WalletConnect</WalletName>
        <img src={WalletConnectIcon} alt="wallet-connect-icon" />
      </WalletCont>
    </WalletContainer>
  )
}

export default WalletList

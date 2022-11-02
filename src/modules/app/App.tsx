import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { connectEthWallet, disconnectEthWallet } from 'logic/action/wallet.actions'
import { fetchPoolData, fetchUserPortfolio, fetchPlatformData, fetchInfVaultData } from 'logic/action/user.actions'
import { fetchLendingPlatformData, fetchUserAssetData, fetchBorrowLimit } from 'logic/action/lending.action'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from 'shared/styles/theme'
import Routes from './components/routes/Routes'
import Notification from 'shared/notification'
import HoverInfo from 'shared/hover-info'
import wallet from 'modules/wallet/wallet'

const App = () => {
  const selector = useSelector((state: any) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    const getLoginStatus = async () => {
      //@ts-ignore
      const walletConnect = JSON.parse(localStorage.getItem("walletConnected"));
      //@ts-ignore
      const walletType = JSON.parse(localStorage.getItem("walletType"));
      try {
        if (walletConnect) {
          await wallet.setProvider(walletType);
          const address = await wallet.login(walletType);
          if (address !== undefined) {
            dispatch(connectEthWallet(address));
          }
        }
      } catch (error) {
        dispatch(disconnectEthWallet())
      }
    }
    setTimeout(async () => {
      getLoginStatus()
    }, 500)
  }, [dispatch])


  useEffect(() => {
    dispatch(fetchPoolData())
    dispatch(fetchPlatformData())
  }, [dispatch])

  useEffect(() => {
    if (!!selector.ethData.address) {
      dispatch(fetchUserPortfolio(selector.ethData.address))
      //to enable infinity vaults
      dispatch(fetchInfVaultData(selector.ethData.address))
    } else {
      dispatch(fetchInfVaultData())
    }
  }, [selector.ethData.address, dispatch])

  useEffect(() => {
    dispatch(fetchLendingPlatformData(selector.ethData.address))
    dispatch(fetchUserAssetData(selector.ethData.address))
    dispatch(fetchBorrowLimit(selector.ethData.address))
  }, [selector.ethData.address, dispatch])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Notification />
      <Routes />
      <HoverInfo />
    </ThemeProvider>
  )
}

export default App

import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Web3 from 'web3'
import { connectEthWallet, disconnectEthWallet } from 'logic/action/wallet.actions'
import wallet from 'modules/wallet/wallet'

let provider: any
let web3Modal: any
//'56: 'https://delicate-rough-sea.bsc.quiknode.pro/80dc27e919b81c1abbd395c860ebdb31a23d83b6/''

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        56: 'https://bsc-dataseed.binance.org/'
      },
      network: 'binance',
    }
  }
};

web3Modal = new Web3Modal({
  network: "mainnet",
  cacheProvider: false,
  providerOptions,
})

export const connectWallet = async (dispatch: any) => {
  try {
    provider = await web3Modal.connect()
    if (!!provider) {
      await wallet.setMobileProvider(provider)
      const web3 = new Web3(provider)
      const accounts = await web3.eth.getAccounts()

      if (!!accounts && accounts.length > 0) {
        dispatch(connectEthWallet(accounts[0]))
      } else {
        dispatch(disconnectEthWallet())
      }
    }

  } catch (e) {
    console.log('Could not get a wallet connection', e)
    return
  }

  provider.on('accountsChanged', (accounts: string[]) => {
    dispatch(disconnectEthWallet())
  })

  provider.on('chainChanged', (chainId: number) => {
    dispatch(disconnectEthWallet())
  })

  provider.on('connect', (info: { chainId: number }) => {
    dispatch(disconnectEthWallet())
  })

  provider.on('disconnect', (error: { code: number; message: string }) => {
    dispatch(disconnectEthWallet())
  })
}

export const disconnectWallet = async () => {
  if (!!provider && provider.close) {
    await provider.close()
    await web3Modal.clearCachedProvider()
    provider = null
  }
}

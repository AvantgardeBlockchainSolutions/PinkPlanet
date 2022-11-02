import { connectEthWallet, disconnectEthWallet } from 'logic/action/wallet.actions'
import Web3 from 'web3'
import WalletConnectProvider from "@walletconnect/web3-provider";
import detectEthereumProvider from '@metamask/detect-provider'


const networkTestChainId = '97';
const networkMainChainId = '56';
const walletTestConnectId = "https://data-seed-prebsc-1-s1.binance.org:8545/";
const walletMainConnectId = "https://bsc-dataseed.binance.org/";

export const getWeb3Instance = async (type: any) => {
  let web3 = new Web3(Web3.givenProvider)
  if (parseInt(type) === 1) {
    try {
      const provider: any = await detectEthereumProvider()
      /*---------------------------------------------------------------------*/
      let ethereum = provider
      const data = [
        {
          chainId: '0x38',
          chainName: 'Binance Smart Chain',
          nativeCurrency: {
            name: 'BNB',
            symbol: 'BNB',
            decimals: 18,
          },
          rpcUrls: [walletMainConnectId],
          blockExplorerUrls: ['https://bscscan.com/'],
        },
      ]
      /*---------------------------------------------------------------------*/
      /* eslint-disable */
      const tx = await ethereum.request({ method: 'wallet_addEthereumChain', params: data }).catch()
      if (tx) {
        console.log(tx)
      }
      if (provider) {
        web3.eth.setProvider(provider)
      } else {
        window.alert('Please activate MetaMask first.')
      }
    } catch (error) {
      window.alert('Please activate MetaMask first.')
    }
  }
  if (parseInt(type) === 2) {
    try {
      const provider: any = await window.BinanceChain
      if (provider) {
        web3.setProvider(provider)
      }
      else {
        window.alert('Please activate Binance chain wallet.')
      }
    } catch (error) {
      window.alert('Please activate Binance chain wallet.')
    }
  }
  if (parseInt(type) === 3) {
    try {
      const provider: any = new WalletConnectProvider({
        // infuraId:'0fe795d7c0254f8096cdeba845d83e99'
        rpc: {
          //@ts-ignore
          [networkMainChainId]: walletMainConnectId,
          [networkTestChainId]: walletTestConnectId,
        },
        chainId: 56,
        bridge: "https://bridge.walletconnect.org",
        qrcode: true,
        pollingInterval: 12000,
      });
      if (provider) {
        web3.setProvider(provider)
        //@ts-ignore
        await web3.currentProvider.enable();
      }
    }
    catch (error) {
      console.log("error=====>", error)
    }
  }

  return web3
}

export const handleLogin = async (web3: any, type: any, dispatch: any) => {
  try {
    localStorage.setItem('walletType', type)
    let accounts = ''
    if (parseInt(type) === 3) {
      const walletConnect: any = localStorage.getItem('walletconnect')
      if (walletConnect) {
        const data = JSON.parse(walletConnect)
        accounts = data.accounts
      }
      else {
        accounts = await web3.currentProvider.enable();
      }
    }
    else {
      accounts = await web3.currentProvider.request({
        method: 'eth_requestAccounts',
      })
    }
    if (!!accounts && accounts.length > 0) {
      dispatch(connectEthWallet(accounts[0]))
    } else {
      dispatch(disconnectEthWallet())
    }
  } catch (error) {
    localStorage.removeItem('walletType')
    localStorage.removeItem('walletconnect')
  }
}

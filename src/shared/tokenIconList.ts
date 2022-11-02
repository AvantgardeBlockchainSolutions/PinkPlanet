import AQUAIcon from 'assets/icons/blue-icon.svg'
import CAKEIcon from 'assets/icons/CAKE.svg'
import ETHIcon from 'assets/icons/ETH.svg'
import BTCBIcon from 'assets/icons/BTCB.svg'
import BUSDIcon from 'assets/icons/busd.svg'
import BNBIcon from 'assets/icons/BNB.png'
import USDTIcon from 'assets/icons/USDT.png'
import VAIIcon from 'assets/icons/VAI.png'
import USTIcon from 'assets/icons/UST.png'
import USDCIcon from 'assets/icons/USDC.png'
import TUSDIcon from 'assets/icons/TUSD.svg'
import DAIIcon from 'assets/icons/DAI.png'
import FourBeltIcon from 'assets/icons/4belt-icon.png'
import GAMMAIcon from 'assets/icons/gamma-icon.png'
import LUNAIcon from 'assets/icons/LUNA.png'
import LINKIcon from 'assets/icons/LINK.svg'
import DOTIcon from 'assets/icons/DOT.png'
import ADAIcon from 'assets/icons/ADA.svg'
import DOGEIcon from 'assets/icons/doge.png'
import XRPIcon from 'assets/icons/XRP.svg'
import UNIIcon from 'assets/icons/Uni.svg'
import LTCIcon from 'assets/icons/LTC.svg'
import XVSIcon from 'assets/icons/XVS.svg'
import FRAXIcon from 'assets/icons/FRAX.png'
import MBOXIcon from 'assets/icons/MOBX.png'
import MATICIcon from 'assets/icons/MATIC.svg'
import SOLIcon from 'assets/icons/SOL.svg'
import AUSTIcon from 'assets/icons/aUST.png'
import AVAX from 'assets/icons/AVAX.png'
import FTMIcon from 'assets/icons/ftm.png'
import AtomIcon from 'assets/icons/atom_icon.png'
import whustIcon from 'assets/icons/whust_icon.svg'



export const getTokenIcon = (tokenName: string) => {
    const token = tokenName.toLowerCase()

    if (token === 'aqua') {
        return AQUAIcon
    }
    if (token === 'gamma') {
        return GAMMAIcon
    }
    if (token === 'luna') {
        return LUNAIcon
    }
    if (token === 'acac') {
        return AQUAIcon
    }
    if (token === 'cake') {
        return CAKEIcon
    }
    if (token === 'eth') {
        return ETHIcon
    }
    if (token === 'btcb') {
        return BTCBIcon
    }
    if (token === 'busd') {
        return BUSDIcon
    }
    if (token === 'bnb') {
        return BNBIcon
    }
    if (token === 'wbnb') {
        return BNBIcon
    }
    if (token === 'cake') {
        return CAKEIcon
    }
    if (token === 'usdt') {
        return USDTIcon
    }
    if (token === 'usdc') {
        return USDCIcon
    }
    if (token === 'dai') {
        return DAIIcon
    }
    if (token === 'ust') {
        return USTIcon
    }
    if (token === 'tusd') {
        return TUSDIcon
    }
    if (token === 'vai') {
        return VAIIcon
    }
    if (token === '4belt') {
        return FourBeltIcon
    }
    if (token === 'link') {
        return LINKIcon
    }
    if (token === 'dot') {
        return DOTIcon
    }
    if (token === 'xrp') {
        return XRPIcon
    }
    if (token === 'doge') {
        return DOGEIcon
    }
    if (token === 'ada') {
        return ADAIcon
    }
    if (token === 'ltc') {
        return LTCIcon
    }
    if (token === 'uni') {
        return UNIIcon
    }
    if (token === 'xvs') {
        return XVSIcon
    }
    if (token === 'frax') {
        return FRAXIcon
    }
    if (token === 'mbox') {
        return MBOXIcon
    }
    if (token === 'matic') {
        return MATICIcon
    }
    if (token === 'sol') {
        return SOLIcon
    }
    if (token === 'aust') {
        return AUSTIcon
    }
    if (token === 'avax') {
        return AVAX
    }
    if (token === 'ftm') {
        return FTMIcon
    }
    if (token === 'atom') {
        return AtomIcon
    }
    if (token === 'xrp') {
        return XRPIcon
    }
    if(token === 'whust'){
        return whustIcon
    }
}

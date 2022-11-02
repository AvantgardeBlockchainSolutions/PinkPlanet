import { useState, useEffect, Fragment } from 'react'
import { withRouter } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentPlanet } from 'logic/action/planet.action'
import { FlexCont } from 'shared/styles/styled'
import { HeaderCont, HeaderPathCont, PathCont, Path, ActivePath, ActiveLendingPath, HeaderTitleCont, DotContWrapper, DotCont, DotContent, PriceWalletBox, PriceBox, ConnectWalletBtn, CreateassetBtn } from './style'
import GammaIcon from 'assets/icons/gamma-icon.png'
import AquaIcon from 'assets/icons/blue-icon.svg'
import HeaderSubLinks from './HeaderSubLinks'
import CustomModal from 'shared/custom-modal'
import WalletLogout from '../wallet-modal/WalletLogout'
import WalletList from '../wallet-modal/WalletList'
import history from 'modules/app/components/history'
import { Paths } from 'modules/app/components/routes/types'
import { commaFy } from 'service/globalFunctions'
import { lendingPathArr, pinkPathArr } from 'service/dataConstant'


const Header = (props: any) => {
  const selector = useSelector((state: any) => state)
  const dispatch = useDispatch()
  const [activeTab, setActiveTab] = useState('base')
  const [openLogoutModal, setOpenLogoutModal] = useState(false)
  const [openWalletList, setOpenWalletList] = useState(false)
  const { ethWalletConnected, address } = selector.ethData
  const { platformData } = selector.user
  const { planetIcon, currentPlanet } = selector.planet

  useEffect(() => {
    const pathUrl: any = props.location.pathname.split('/')
    console.log("path url", pathUrl, currentPlanet);
    if (pathUrl[1]) {
      setActiveTab(pathUrl[1])
      if (lendingPathArr.includes(pathUrl[1])) {
        dispatch(setCurrentPlanet('green'))
      } else if(pinkPathArr.includes(pathUrl[1])){
        dispatch(setCurrentPlanet('pink'))
      } else {
        dispatch(setCurrentPlanet('blue'))
      }
    } else {
      setActiveTab('base')
      dispatch(setCurrentPlanet('blue'))
    }
  }, [props.location.pathname, dispatch])

  const getAddress = (address: string) => {
    const add1 = address.substring(0, 2)
    const add2 = address.substring(address.length - 4)
    const finalAdd = `${add1}....${add2}`
    return finalAdd
  }

  const handlePathClick = (item: string) => {
    setActiveTab(item)
    // if (item === 'base') {
    //   history.push(`${Paths.root}`)
    // }
    if (item === 'explore') {
      history.push(`${Paths.pinkExplore}`)
    }
    if (item === 'profile') {
      history.push(`${Paths.pinkProfileview}`)
    }
    if (item === 'activity') {
      history.push(`${Paths.pinkactivity}`)
    }
    if (item === 'faq') {
      history.push(`${Paths.pinkfaq}`)
    }
    // if (item === 'pools') {
    //   history.push(`${Paths.pools}`)
    // }
    // if (item === 'swap') {
    //   history.push(`${Paths.swap}`)
    // }
    // if (item === 'lending') {
    //   history.push(`${Paths.lending}`)
    // }
    if (item === 'pink') {
      history.push(`${Paths.pink}`)
    }
   
    
  }

  return (
    <Fragment>
      <HeaderCont>
        {currentPlanet === 'pink' ?
        <HeaderPathCont>
        <HeaderTitleCont className="first-item">
          <img src={planetIcon} alt="" />
          <p>Planet</p>
        </HeaderTitleCont>
        <FlexCont>
          <PathCont>
            <Path activeTab={activeTab === 'base'} onClick={() => handlePathClick('pink')}>Base</Path>
            {activeTab === 'base' && <ActivePath />}
          </PathCont>
          <PathCont>
            <Path activeTab={activeTab === 'vaults'} onClick={() => handlePathClick('explore')}>Explore</Path>
            {activeTab === 'explore' && <ActivePath />}
          </PathCont>
          <PathCont>
            <Path activeTab={activeTab === 'pools'} onClick={() => handlePathClick('profile')}>Profile</Path>
            {activeTab === 'profile' && <ActivePath />}
          </PathCont>
          <PathCont>
            <Path activeTab={activeTab === 'activity'} onClick={() => handlePathClick('activity')}>Activity</Path>
            {(activeTab === 'activity' ) && <ActivePath />}
          </PathCont>
          <PathCont>
            <Path activeTab={activeTab === 'faq'} onClick={() => handlePathClick('faq')}>How it works</Path>
            {activeTab === 'faq' && <ActiveLendingPath />}
          </PathCont>
          
        </FlexCont>
      </HeaderPathCont>
      :
      <HeaderPathCont>
          <HeaderTitleCont className="first-item">
            <img src={planetIcon} alt="" />
            <p>Planet</p>
          </HeaderTitleCont>
          <FlexCont>
            <PathCont>
              <Path activeTab={activeTab === 'base'} onClick={() => handlePathClick('base')}>Base</Path>
              {activeTab === 'base' && <ActivePath />}
            </PathCont>
            <PathCont>
              <Path activeTab={activeTab === 'vaults'} onClick={() => handlePathClick('vaults')}>Vaults</Path>
              {activeTab === 'vaults' && <ActivePath />}
            </PathCont>
            <PathCont>
              <Path activeTab={activeTab === 'pools'} onClick={() => handlePathClick('pools')}>Pools</Path>
              {activeTab === 'pools' && <ActivePath />}
            </PathCont>
            <PathCont>
              <Path activeTab={activeTab === 'swap' || activeTab === 'liquidity'} onClick={() => handlePathClick('swap')}>Swap</Path>
              {(activeTab === 'swap' || activeTab === 'liquidity') && <ActivePath />}
            </PathCont>
            <PathCont>
              <Path activeTab={activeTab === 'lending'} onClick={() => handlePathClick('lending')}>Lending</Path>
              {activeTab === 'lending' && <ActiveLendingPath />}
            </PathCont>
            <DotContWrapper>
              <DotCont>
                <span></span>
                <span></span>
                <span></span>
                <DotContent>
                  <HeaderSubLinks />
                </DotContent>
              </DotCont>
            </DotContWrapper>
          </FlexCont>
        </HeaderPathCont>
        }
        
        <PriceWalletBox>
          <PriceBox >
            <img src={AquaIcon} alt="" />
            <p>${!!platformData && platformData.aqua_price ? commaFy(parseFloat(platformData.aqua_price).toFixed(2)) : '0.00'}</p>
          </PriceBox>
          <PriceBox >
            <img src={GammaIcon} alt="" />
            <p>${!!platformData && platformData.gamma_price ? commaFy(parseFloat(platformData.gamma_price).toFixed(2)) : '0.00'}</p>
          </PriceBox>
          {ethWalletConnected ? (
            <>
            <ConnectWalletBtn currPlanet={currentPlanet} onClick={() => setOpenLogoutModal(true)}>{getAddress(address)}</ConnectWalletBtn>
            <CreateassetBtn currPlanet={currentPlanet}  onClick={() => history.push(`${Paths.pinkcreatenfttype}`)}>Create</CreateassetBtn>
            </>
          ) : (
            <ConnectWalletBtn currPlanet={currentPlanet} onClick={() => setOpenWalletList(true)}>Connect Wallet</ConnectWalletBtn>
          )}
        </PriceWalletBox>
      </HeaderCont>
      <CustomModal show={openLogoutModal} toggleModal={setOpenLogoutModal}>
        <WalletLogout setOpenModal={setOpenLogoutModal} />
      </CustomModal>
      <CustomModal show={openWalletList} toggleModal={setOpenWalletList}>
        <WalletList setOpenModal={setOpenWalletList} />
      </CustomModal>
    </Fragment>

  )
}

export default withRouter(Header)

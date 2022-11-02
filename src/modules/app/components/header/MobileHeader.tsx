import { Fragment, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router'
import { setCurrentPlanet } from 'logic/action/planet.action'
import { FlexCont } from 'shared/styles/styled'
import { MobileHeaderCont, MobileHeaderTitleCont, ConnectBtn, MobCollapseIcon, GreenMobCollapseIcon } from './style'
import { lendingPathArr, pinkPathArr } from 'service/dataConstant'
import CustomModal from 'shared/custom-modal'
import { MobileSideNav } from '../side-nav'
import WalletMLogout from '../wallet-modal/WalletMLogout'
import { connectWallet } from 'modules/wallet-provider/WalletProvider'

const MobileHeader = (props: any) => {
  const selector = useSelector((state: any) => state)
  const dispatch = useDispatch()
  const [showSideNav, setShowSideNav] = useState(false)
  const [openLogoutModal, setOpenLogoutModal] = useState(false)
  const { ethWalletConnected, address } = selector.ethData
  const { planetIcon, menuIcon } = selector.planet

  useEffect(() => {
    const pathUrl: any = props.location.pathname.split('/')
    if (pathUrl[1]) {
      if (lendingPathArr.includes(pathUrl[1])) {
        dispatch(setCurrentPlanet('green'))
      } else if(pinkPathArr.includes(pathUrl[1])){
        dispatch(setCurrentPlanet('pink'))
      } else {
        dispatch(setCurrentPlanet('blue'))
      }
    } else {
      dispatch(setCurrentPlanet('blue'))
    }
  }, [props.location.pathname, dispatch])

  const getAddress = (address: string) => {
    const add1 = address.substring(0, 2)
    const add2 = address.substring(address.length - 4)
    const finalAdd = `${add1}....${add2}`
    return finalAdd
  }
  return (
    <Fragment>
      <MobileHeaderCont>
        <MobileHeaderTitleCont>
          <img src={planetIcon} alt="" />
          <p>Planet</p>
        </MobileHeaderTitleCont>

        <FlexCont>
          {ethWalletConnected ? (
            <ConnectBtn onClick={() => setOpenLogoutModal(true)}>{getAddress(address)}</ConnectBtn>
          ) : (
            <ConnectBtn onClick={() => connectWallet(dispatch)}>Connect</ConnectBtn>
          )}
          {
            menuIcon.indexOf("green") > -1? 
            <GreenMobCollapseIcon src={menuIcon} alt="" onClick={() => setShowSideNav(true)} /> 
            : 
            <MobCollapseIcon src={menuIcon} alt="" onClick={() => setShowSideNav(true)} />
          }
        </FlexCont>


      </MobileHeaderCont>
      <MobileSideNav showSideNav={showSideNav} setShowSideNav={setShowSideNav} address={address} />
      <CustomModal show={openLogoutModal} toggleModal={setOpenLogoutModal}>
        <WalletMLogout setOpenModal={setOpenLogoutModal} />
      </CustomModal>
    </Fragment>
  )
}

export default withRouter(MobileHeader)

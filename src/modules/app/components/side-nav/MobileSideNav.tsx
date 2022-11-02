import { useState, useEffect } from 'react'
import { withRouter } from 'react-router'
import { FlexSBCont, FlexCont } from 'shared/styles/styled'
import {
  MobileNavWrapper,
  MobileNavCont,
  MobNavHeader,
  MobAddressBox,
  MobNavItemCont,
  MobNavItem,
  MobNavDivider,
  MobNavLink,
  MobNavCardCont,
  MobNavCard,
  MobNavGreenCard,
  MovNavPinkCard,
  MobCardTitle,
  MobCardInfo,
} from './style'
import CrossIcon from 'assets/icons/white-cross.svg'
import AquaIcon from 'assets/icons/blue-icon.svg'
import GammaIcon from 'assets/icons/green_planet_no_shadow.svg'
import PinkIcon from 'assets/icons/Pink.png'
import AccountIcon from 'assets/icons/walletIcon.svg'
import GreenCheckIcon from 'assets/icons/green-check.png'
import { analyticsLink, aquaVotingLink, docsLink } from 'service/global-constant'
import { lendingPathArr, pinkPathArr } from 'service/dataConstant'
import history from 'modules/app/components/history'
import { Paths } from 'modules/app/components/routes/types'

const MobileSideNav = (props: any) => {
  const [activeTab, setActiveTab] = useState('base')
  const [isCopied, setIsCopied] = useState(false)
  const { showSideNav, setShowSideNav, address } = props

  useEffect(() => {
    const pathUrl: any = props.location.pathname.split('/')
    if (pathUrl[1]) {
      setActiveTab(pathUrl[1])
    } else {
      setActiveTab('base')
    }
  }, [props.location.pathname])

  useEffect(() => {
    if (isCopied) {
      const interval = setInterval(() => {
        setIsCopied(false)
      }, 2000)

      return () => {
        clearInterval(interval);
      }
    }
  }, [isCopied])


  const handlePathClick = (item: string) => {
    setActiveTab(item)
    setShowSideNav(false)
    if (item === 'base') {
      history.push(`${Paths.root}`)
    }
    if (item === 'vaults') {
      history.push(`${Paths.vaults}`)
    }
    if (item === 'pools') {
      history.push(`${Paths.pools}`)
    }
    if (item === 'swap') {
      history.push(`${Paths.swap}`)
    }
    if (item === 'lending') {
      history.push(`${Paths.lending}`)
    }
    if (item === 'markets') {
      history.push(`${Paths.markets}`)
    }
    if (item === 'metrics') {
      history.push(`${Paths.metrics}`)
    }
    if (item === 'pink') {
      history.push(`${Paths.pink}`)
    }
  }

  const renderAddress = (address: string) => {
    const add1 = address.substring(0, 15)
    const add2 = address.substring(address.length - 15)
    const finalAdd = `${add1}....${add2}`
    return finalAdd
  }

  const copyAddressText = async () => {
    try {
      await navigator.clipboard.writeText(address)
      setIsCopied(true)
    }
    catch (err) {
      setIsCopied(false)
    }
  }

  return (
    <MobileNavWrapper open={showSideNav} >
      <MobileNavCont>
        <MobNavHeader>
          <FlexSBCont>
            <FlexCont>
              <img className="planet-icon" src={AquaIcon} alt="" />
              <p>Planet</p>
            </FlexCont>
            <img className="cross-icon" src={CrossIcon} alt="" onClick={() => setShowSideNav(false)} />
          </FlexSBCont>
        </MobNavHeader>
        {!!address &&
          <MobAddressBox onClick={() => copyAddressText()}>
            <FlexSBCont>
              <p id="addressTxt">{renderAddress(address)}</p>
              {
                isCopied ? <img src={GreenCheckIcon} alt="" /> : <img src={AccountIcon} alt="" />
              }
            </FlexSBCont>
          </MobAddressBox>
        }
        {activeTab === 'pink'? 
        <MobNavItemCont>
          <MobNavItem isActive={activeTab === 'pink'} onClick={() => handlePathClick("pink")}>BASE</MobNavItem>
          <MobNavItem isActive={activeTab === 'pink'} onClick={() => handlePathClick("pink")}>EXPLORE</MobNavItem>
          <MobNavItem isActive={activeTab === 'pink'} onClick={() => handlePathClick("pink")}>PROFILE</MobNavItem>
          <MobNavItem isActive={activeTab === 'pink'} onClick={() => handlePathClick("pink")}>ACTIVITY</MobNavItem>
          <MobNavItem isActive={activeTab === 'pink'} onClick={() => handlePathClick("pink")}>HOW IT WORKS</MobNavItem>
          
        </MobNavItemCont>
        :
        <MobNavItemCont>
          <MobNavItem isActive={activeTab === 'base'} onClick={() => handlePathClick("base")}>BASE</MobNavItem>
          <MobNavItem isActive={activeTab === 'vaults'} onClick={() => handlePathClick("vaults")}>VAULTS</MobNavItem>
          <MobNavItem isActive={activeTab === 'pools'} onClick={() => handlePathClick("pools")}>POOLS</MobNavItem>
          <MobNavItem isActive={activeTab === 'swap'} onClick={() => handlePathClick("swap")}>SWAP</MobNavItem>
          <MobNavItem isActive={activeTab === 'lending'} onClick={() => handlePathClick("lending")}>LENDING</MobNavItem>
          <MobNavDivider />
          <a href={analyticsLink} target='_blank' rel="noreferrer">
            <MobNavLink>Analytics</MobNavLink>
          </a>
          <MobNavLink onClick={() => handlePathClick("markets")}>Markets</MobNavLink>
          <MobNavLink onClick={() => handlePathClick("metrics")}>Metrics</MobNavLink>
          <a href={aquaVotingLink} target='_blank' rel="noreferrer">
            <MobNavLink>Governance</MobNavLink>
          </a>
          <a href={docsLink} target='_blank' rel="noreferrer">
            <MobNavLink>Learn More</MobNavLink>
          </a>
          {/* <MobNavLink className="last-item">Learn</MobNavLink> */}
        </MobNavItemCont>
        }
        
        <MobNavCardCont>
          <MobNavCard isActive={!lendingPathArr.includes(activeTab)} onClick={() => handlePathClick("base")}>
            <img src={AquaIcon} alt="" />
            <MobCardTitle>Blue Planet</MobCardTitle>
            <MobCardInfo className='blue-planet'>Vaults & Pools</MobCardInfo>
          </MobNavCard>
          <MobNavGreenCard isActive={lendingPathArr.includes(activeTab)} onClick={() => handlePathClick("lending")}>
            <img src={GammaIcon} alt="" />
            <MobCardTitle>Green Planet</MobCardTitle>
            <MobCardInfo className='green-planet'>Lending</MobCardInfo>
          </MobNavGreenCard>
        </MobNavCardCont>
        <MovNavPinkCard isActive={pinkPathArr.includes(activeTab)} onClick={() => handlePathClick("pink")}>
          <img src={PinkIcon} alt="" />
          <MobCardTitle>Pink Planet</MobCardTitle>
          <MobCardInfo className='pink-planet'>NFTs (Coming Soon)</MobCardInfo>
        </MovNavPinkCard>
      </MobileNavCont>
    </MobileNavWrapper>
  )
}

export default withRouter(MobileSideNav)

import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Grid } from '@mui/material'
import { MainContainer } from 'shared/styles/styled'
import { WebBlock, HeaderTxt, PinkContainer } from './style'
import './style.scss'
import { useLocation } from 'react-router-dom'
import Home from './views/Home'
import Explore from './views/Explore'
import Profile from './views/Profile'
import EditProfile from './views/Profile/page/Edit'
import CreateNFT from './views/Create'
import history from 'modules/app/components/history'
import { Paths } from 'modules/app/components/routes/types'
import { useMediaQuery } from 'react-responsive'
import { ActivityMobileIcon, ExploreMobileIcon, HomeMobileIcon, ProfileMobileIcon } from 'assets/tsicons'
import Asset from './views/Asset'
import Faq from './views/Faq'
import Activity from './views/Activity'
import Collection from './views/Collection'
import CollectionEdit from './views/Collection/page/CollectionEdit'
import Createtype from './views/Createtype'

let timerForGreenPendingGAMMA = setInterval(function () {}, 0)
const PinkPlanet = () => {
  const selector = useSelector((state: any) => state)
  const [bottomtab, setBottomtab] = useState(1)
  const dispatch = useDispatch()
  const location = useLocation()
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const renderSwitch = () => {
    switch (location.pathname) {
      case '/pink/explore':
        return <Explore />
      case '/pink/profile':
        return <Profile />
      case '/pink/profile/edit':
        return <EditProfile />
        case '/pink/create/type':
          return <Createtype/>
      case '/pink/create/single':
        return <CreateNFT />
        case '/pink/create/multiple':
        return <CreateNFT multiplenft/>
      case '/pink/asset':
        return <Asset />

      case '/pink/faq':
        return <Faq />
      case '/pink/activity':
        return <Activity />
        case '/pink/collection':
          return <Collection />
      case '/pink/collection/edit':
        return <CollectionEdit />
       
      default:
        return <Home />
    }
  }

  useEffect(() => {
    switch (location.pathname) {
      case '/pink/explore':
        setBottomtab(2)
        break
      case '/pink/profile':
        setBottomtab(4)
        break
      case '/pink/activity':
        setBottomtab(3)
        break
      case '/pink/create':
        break

      default:
        setBottomtab(1)
    }
  }, [])

  const handlePathClick = (item: string) => {
    if (item === 'home') {
      history.push(`${Paths.pink}`)
    }
    if (item === 'explore') {
      history.push(`${Paths.pinkExplore}`)
    }
    if (item === 'activity') {
      history.push(`${Paths.pinkactivity}`)
    }
    if (item === 'profile') {
      history.push(`${Paths.pinkProfileview}`)
    }
  }

  return (
    <MainContainer>
      <PinkContainer>{renderSwitch()}</PinkContainer>
      {isTabletOrMobile ? (
        <BottomMenu>
          <Grid container spacing={2}>
            <Grid item sm={3}>
              <div className={`blk ${bottomtab == 1 ? 'active' : ''}`} onClick={() => handlePathClick('home')}>
                <HomeMobileIcon />
                Home
              </div>
            </Grid>
            <Grid item sm={3}>
              <div className={`blk ${bottomtab == 2 ? 'active' : ''}`} onClick={() => handlePathClick('explore')}>
                <ExploreMobileIcon />
                Explore
              </div>
            </Grid>
            <Grid item sm={3}>
              <div className={`blk ${bottomtab == 3 ? 'active' : ''}`} onClick={() => handlePathClick('activity')}>
                <ActivityMobileIcon />
                Activity
              </div>
            </Grid>
            <Grid item sm={3}>
              <div className={`blk ${bottomtab == 4 ? 'active' : ''}`} onClick={() => handlePathClick('profile')}>
                <ProfileMobileIcon />
                Profile
              </div>
            </Grid>
          </Grid>
        </BottomMenu>
      ) : null}
    </MainContainer>
  )
}

const BottomMenu = styled.div`
  border-top: 1px solid #707070;
  padding: 18px 20px;
  background: #000;
  color: rgba(255, 255, 255, 0.4);
  position: fixed;
  bottom: -4px;
  left: 0;
  z-index: 999;
  right: 0;
  .MuiGrid-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .blk {
    display: flex;
    flex-direction: column;
    align-items: Center;
    justify-content: Center;
    g {
      opacity: 1 !important;
    }
    svg {
      margin-bottom: 8px;
      rect {
        fill: #fff !important;
      }

      path {
        fill: #fff !important;
      }
    }
    &.active {
      svg {
        rect {
          fill: #ff55de !important;
        }
        path {
          fill: #ff55de !important;
        }
      }
    }
  }
`
export default PinkPlanet

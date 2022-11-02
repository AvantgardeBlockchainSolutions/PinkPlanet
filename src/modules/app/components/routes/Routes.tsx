import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { connectEthWallet, disconnectEthWallet } from 'logic/action/wallet.actions'
import { Switch } from 'react-router'
import { Router, Route } from 'react-router-dom'
import history from '../history'
import { Paths } from './types'
import { NotFound } from './NotFound'
import { RouteContainer, StyledRoutesWrapper, StyledRoutesContainer, StyledRoutes, SideNavCont } from './style'
import Base from 'modules/base'
// import Vaults from 'modules/vaults'
// import Pools from 'modules/pools'
// import Swap from 'modules/swap'
import PlanetToken from 'modules/planet-token'
import Pink from 'modules/pink'
import Footer from 'modules/app/components/footer'
import { Header, MobileHeader } from 'modules/app/components/header'
import { SideNav } from '../side-nav'

// import Lending from 'modules/lending'
// import Liquidation from 'modules/liquidations'
// import Markets from 'modules/markets'
// import Metrics from 'modules/metrics'
import Halborn from '../halborn'
import Explore from 'modules/pink/views/Explore'

const notFoundRoute: RouteDefinition = {
  path: '*',
  component: NotFound,
  protected: false,
  title: '',
}

export const routes: RouteDefinition[] = [
  {
    path: Paths.root,
    component: Base,
    protected: false,
    redirect: Paths.root,
  },
  // {
  //   path: Paths.vaults,
  //   component: Vaults,
  //   protected: false,
  //   redirect: Paths.root,
  // },
  // {
  //   path: Paths.pools,
  //   component: Pools,
  //   protected: false,
  //   redirect: Paths.root,
  // },
  // {
  //   path: Paths.swap,
  //   component: Swap,
  //   protected: false,
  //   redirect: Paths.root,
  // },
  // {
  //   path: Paths.liquidity,
  //   component: Swap,
  //   protected: false,
  //   redirect: Paths.root,
  // },
  // {
  //   path: Paths.lending,
  //   component: Lending,
  //   protected: false,
  //   redirect: Paths.root,
  // },
  // {
  //   path: Paths.markets,
  //   component: Markets,
  //   protected: false,
  //   redirect: Paths.root,
  // },
  // {
  //   path: Paths.metrics,
  //   component: Metrics,
  //   protected: false,
  //   redirect: Paths.root,
  // },
  // {
  //   path: Paths.liquidations,
  //   component: Liquidation,
  //   protected: false,
  //   redirect: Paths.root,
  // },


  {
    path: Paths.planetToken,
    component: PlanetToken,
    protected: false,
    redirect: Paths.root,
  },
  {
    path: Paths.pink,
    component: Pink,
    protected: false,
    redirect: Paths.root,
  },
  {
    path: Paths.pinkExplore,
    component: Pink,
    protected: false,
    redirect: Paths.root,
  },
  {
    path: Paths.pinkProfileview,
    component: Pink,
    protected: false,
    redirect: Paths.root,
  },
  {
    path: Paths.pinkProfileedit,
    component: Pink,
    protected: false,
    redirect: Paths.root,
  },
  {
    path: Paths.pinkcreatenfttype,
    component: Pink,
    protected: false,
    redirect: Paths.root,
  },
  {
    path: Paths.pinkcreatenftsingle,
    component: Pink,
    protected: false,
    redirect: Paths.root,
  },
  {
    path: Paths.pinkcreatenftmultiple,
    component: Pink,
    protected: false,
    redirect: Paths.root,
  },

  {
    path: Paths.pinkasset,
    component: Pink,
    protected: false,
    redirect: Paths.root,
  },
  {
    path: Paths.pinkfaq,
    component: Pink,
    protected: false,
    redirect: Paths.root,
  },
  {
    path: Paths.pinkactivity,
    component: Pink,
    protected: false,
    redirect: Paths.root,
  },
  {
    path: Paths.collectionedit,
    component: Pink,
    protected: false,
    redirect: Paths.root,
  },
  {
    path: Paths.pinkcollection,
    component: Pink,
    protected: false,
    redirect: Paths.root,
  },
].concat(notFoundRoute as any) // Ensure that notFound is the last route

export interface RouteDefinition {
  path: string
  protected?: boolean
  redirect?: string
  component?: any
  routes?: RouteDefinition[]
  title?: string
  pathType?: number
}

interface Props { }
interface RoutesProps { }
interface StateProps {
  user: any,
  planet: any
}

function getRouteRenderWithAuth(route: RouteDefinition, i: number) {
  return () => <route.component />
}

const Routes: React.FC<Props & RoutesProps> = () => {
  const selector = useSelector((state: StateProps) => state)
  const dispatch = useDispatch()
  const { bgIcon } = selector.planet
  const { authLoading } = selector.user
  const walletType = localStorage.getItem('walletType')
  console.log(selector.planet.currentPlanet)
  useEffect(() => {
    if (!!walletType) {
      if (parseInt(walletType) === 1) {
        if (!!window && window.ethereum) {
          setTimeout(async () => {
            window.ethereum.on('accountsChanged', function (accounts: any) {
              if (!!accounts && accounts.length > 0) {
                dispatch(connectEthWallet(accounts[0]))
              } else {
                dispatch(disconnectEthWallet())
              }
            })
          }, 500)
        }
      }
      if (parseInt(walletType) === 2) {
        // if (!!window && window.BinanceChain) {
        //   setTimeout(async () => {
        //     window.BinanceChain.on('accountsChanged', function (accounts: any) {
        //       if (!!accounts && accounts.length > 0) {
        //         dispatch(connectEthWallet(accounts[0]))
        //       } else {
        //         dispatch(disconnectEthWallet())
        //       }
        //     })
        //   }, 500)
        // }
      }

    }
  }, [dispatch, walletType])



  return (
    <Router history={history}>
      <RouteContainer>
        {/* <img className="bg-icon1" src={BgPlanetIcon} alt="bg-icon1" /> */}
        <img className="bg-icon2" src={bgIcon} alt="bg-icon2" />
        <img className="bg-icon3" src={bgIcon} alt="bg-icon3" />
        <Header />
        <MobileHeader />
        {selector.planet.currentPlanet != 'pink' ?<Halborn /> :null}
        
        <StyledRoutesWrapper>
          <SideNavCont >
            <SideNav />
          </SideNavCont>
          <StyledRoutesContainer>
            <StyledRoutes>
              <Switch>
                {routes.map((route, i) => {
                  if (authLoading) {
                    return <div key={i}>Loading ...</div>
                  } else {
                    const render = getRouteRenderWithAuth(route, i)
                    const rest = { render }
                    return <Route key={i} path={route.path} exact {...rest} />
                  }
                })}
              </Switch>
            </StyledRoutes>
          </StyledRoutesContainer>
        </StyledRoutesWrapper>
        <Footer />
      </RouteContainer>
    </Router>
  )
}

export default Routes

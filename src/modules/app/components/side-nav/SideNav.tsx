import { useDispatch, connect } from 'react-redux'
import { setCurrentPlanet } from 'logic/action/planet.action'
import { NavContainer, PlanetNavCont, PlanetItemCont, PlanetItemText, PlanetItemSubText, ActiveBorder, ActiveGreenBorder, ActivePinkBorder } from './style'
import BlueIcon from 'assets/icons/blue-icon.svg'
import PinkIcon from 'assets/icons/Pink.png'
import GreenIcon from 'assets/icons/green_planet_no_shadow.svg'
//import GreenIcon from 'assets/icons/green_menu_icon.svg'
import history from 'modules/app/components/history'
import { Paths } from 'modules/app/components/routes/types'

const SideNav = (props: any) => {
  const dispatch = useDispatch()
  const { currentPlanet } = props

  const handlePathClick = (item: string) => {
    if (item === 'base') {
      dispatch(setCurrentPlanet('blue'))
      history.push(`${Paths.root}`)
    }
    if (item === 'lending') {
      dispatch(setCurrentPlanet('green'))
      history.push(`${Paths.lending}`)
    }
    if (item === 'pink') {
      dispatch(setCurrentPlanet('pink'))
      history.push(`${Paths.pink}`)
    }
  }

  return (
    <NavContainer>
      <PlanetNavCont >
        <PlanetItemCont className="active-planet" isActive={currentPlanet === 'blue'} onClick={() => handlePathClick('base')}>
          <img src={BlueIcon} alt="" />
          <div>
            <PlanetItemText>Blue Planet</PlanetItemText>
            <PlanetItemSubText className='blue-planet'>Vaults & Pools</PlanetItemSubText>
          </div>
          <ActiveBorder isActive={currentPlanet === 'blue'} />
        </PlanetItemCont>
        <PlanetItemCont className="active-planet" isActive={currentPlanet === 'green'} onClick={() => handlePathClick('lending')}>
          <img src={GreenIcon} alt="" />
          <div>
            <PlanetItemText>Green Planet</PlanetItemText>
            <PlanetItemSubText className='green-planet'>Lending</PlanetItemSubText>
          </div>
          <ActiveGreenBorder isActive={currentPlanet === 'green'} />
        </PlanetItemCont>
        <PlanetItemCont className="active-planet" isActive={currentPlanet === 'pink'} onClick={() => handlePathClick('pink')}>
          <img src={PinkIcon} alt="" />
          <div>
            <PlanetItemText>Pink Planet</PlanetItemText>
            <PlanetItemSubText className="pink-planet">NFTs (Coming Soon)</PlanetItemSubText>
          </div>
          <ActivePinkBorder isActive={currentPlanet === 'green'} />
        </PlanetItemCont>

      </PlanetNavCont>
    </NavContainer>

  )
}

const mapStateToProps = (state: any) => ({
  currentPlanet: state.planet.currentPlanet,
})
export default connect(mapStateToProps)(SideNav)

import { SET_CURRENT_PLANET } from '../action/action.config'
import BlueIcon from 'assets/icons/blue-icon.svg'
import PinkIcon from 'assets/icons/Pink.png'
import GreenIcon from 'assets/icons/green_planet_no_shadow.svg'
import BlueMenuIcon from 'assets/icons/blue_menu_mob.svg'
//import GreenMenuIcon from 'assets/icons/green_planet_no_shadow.svg'
import GreenMenuIcon from 'assets/icons/green_menu_mob.svg'
import PinkMenuIcon from 'assets/icons/pink_menu_mob.png'
import BluBgIcon from 'assets/icons/bg-planet-icon.png'
import PinkBgIcon from 'assets/icons/pink-bgg.png'

const initialState = {
    currentPlanet: "blue",
    planetIcon: BlueIcon,
    menuIcon: BlueMenuIcon,
    bgIcon: BluBgIcon
}

const getPlanetIcon = (currPlanet: string) => {
    let planetIconVal = BlueIcon
    if (currPlanet === 'green') {
        planetIconVal = GreenIcon
    }
    if (currPlanet === 'pink') {
        planetIconVal = PinkIcon
    }
    return planetIconVal
}
const getMenuIcon = (currPlanet: string) => {
    let menuIconVal = BlueMenuIcon
    if (currPlanet === 'green') {
        menuIconVal = GreenMenuIcon
    }
    if (currPlanet === 'pink') {
        menuIconVal = PinkMenuIcon
    }
    
    return menuIconVal
}
const getBgIcon = (currPlanet: string) => {
    let bgIconVal = BluBgIcon
    if (currPlanet === 'green') {
        bgIconVal = GreenIcon
    }
    if (currPlanet === 'pink') {
        bgIconVal = PinkBgIcon
    }
    return bgIconVal
}

export const planetReducer = (state = initialState, action: any) => {
    const { type, payload } = action
    switch (type) {

        case SET_CURRENT_PLANET:
            return {
                ...state,
                currentPlanet: payload,
                planetIcon: getPlanetIcon(payload),
                menuIcon: getMenuIcon(payload),
                bgIcon: getBgIcon(payload)
            }
        default:
            return state
    }
}

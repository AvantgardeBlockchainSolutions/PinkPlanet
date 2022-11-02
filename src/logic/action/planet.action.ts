import { SET_CURRENT_PLANET } from './action.config'


/* ============================= Lending Platform ================================== */

export const setCurrentPlanet = (currPlanet: string) => {
    return {
        type: SET_CURRENT_PLANET,
        payload: currPlanet
    }
}
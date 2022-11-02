import styled from 'styled-components'
import { colors, screenSizes } from 'shared/styles/theme'

export const NavContainer = styled.div`
  position: fixed;
  top: 76px;
  left: 0;
  bottom: 0;
  background: ${colors.themeBackground};
  width: 50px;
  box-sizing: border-box;
  transition: 0.3s all;
  z-index: 10;
  &:hover{
    width: 190px;
  }
`
/* ================= planet side nav ====================== */

export const PlanetNavCont = styled.div`
  padding-top: 10px;
  box-sizing: border-box;
  background: ${colors.themeBackground};
  height: 100%;
  transition: 0.3s all;
  border-right: 1px solid ${colors.borderColor};
  @media (min-width: ${screenSizes.mediaXXL}px) {
    padding-top: 20px;
  }
  @media (min-width: ${screenSizes.mediaXXXX}px) {
    padding-top: 27px;
  }
  .pink-planet{
    opacity: 0.2 !important;
    cursor: initial;
    overflow: hidden;
    transition: 0.3s all;
    width: 50px;
    &:hover{
      opacity: 0.2;
    }
  }
  .other-planet{
    overflow: hidden;
    transition: 0.3s all;
    width: 50px;
  }
  .active-planet{
    overflow: hidden;
    transition: 0.3s all;
    width: 55px;
  }

  &:hover{
    .pink-planet{
      width: 190px;
    }
    .other-planet{
      width: 190px;
    }
    .active-planet{
      width: 195px;
    }
  }
`
export const PlanetItemCont = styled.div<any>`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 12px 20px 12px 10px;
  height: 60px;
  box-sizing: border-box;
  opacity: ${(props: any) => props.isActive ? 1 : 0.4};
  img{
    width: 27.22px;
    height: 26px;
    margin-right: 14.45px;
  }
  .blue-planet{
    color: ${colors.lightBlue};
  }
  .green-planet{
    color: ${colors.lightGreen};
  }
  .pink-planet{
    color: #DE27DE;
  }
  &:hover{
    opacity: 1;
  }
`
export const ActiveBorder = styled.div<any>`
  position: absolute;
  top:0;
  right: 0;
  background: ${(props: any) => props.isActive ? `transparent linear-gradient(180deg, ${colors.lightBlue} 0%, ${colors.blue} 100%) no-repeat padding-box` : colors.themeBackground};
  border-radius: 0px 10px 10px 0px;
  opacity: 1;
  width: 5px;
  height: 100%;
`
export const ActiveGreenBorder = styled.div<any>`
  position: absolute;
  top:0;
  right: 0;
  background: ${(props: any) => props.isActive ? `transparent linear-gradient(180deg, ${colors.lightGreen} 0%, ${colors.green} 100%) no-repeat padding-box` : colors.themeBackground};
  border-radius: 0px 10px 10px 0px;
  opacity: 1;
  width: 5px;
  height: 100%;
`
export const ActivePinkBorder = styled.div<any>`
  position: absolute;
  top:0;
  right: 0;
  background: ${(props: any) => props.isActive ? `transparent linear-gradient(180deg, #FF55DE 0%, #DE27DE 100%) no-repeat padding-box` : colors.themeBackground};
  border-radius: 0px 10px 10px 0px;
  opacity: 1;
  width: 5px;
  height: 100%;
`
export const OtherPlanetItemCont = styled.div`
  display:flex;
  align-items: center;
  cursor:pointer;
  padding: 12px 20px 12px 10px;
  opacity: 0.2;
  height: 60px;
  box-sizing: border-box;
  text-decoration: none;
  img{
    width: 27.22px;
    height: 26px;
    margin-right: 14.45px;
  }
  &:hover{
    opacity:1;
  }
  .green-planet{
    color: ${colors.lightGreen} ;
  }
`

export const PlanetItemText = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  width: 126px;
`
export const PlanetItemSubText = styled(PlanetItemText)`
  font-size: 12px;
  line-height: 15px;
  font-family: 'Montserrat', sans-serif;
  margin: 4px 0 0 0;
`
/* ============================= Mobile nav ==================================*/

export const MobileNavWrapper = styled.div<any>`
  display: block;
  width: ${(props: any) => (props.open ? '100%' : '0px')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  transition: 0.3s all;
  background: ${colors.themeBackground};
  z-index: 100;
  transition: 0.3s all;
  box-sizing: border-box;
  overflow: hidden;
  @media (min-width: ${screenSizes.mediaM}px) {
    display: none;
  }
`

export const MobileNavCont = styled.div`
  box-sizing: border-box;
  padding: 24.5px 20px 50px 20px;
  height: 100%;
  overflow-y: auto;
  height: 100%;
  background-color: ${colors.themeBackground};
  box-sizing: border-box;
  transition: 0.3s all;
`
export const MobNavHeader = styled.div`
  .planet-icon{
    width: 31.41px;
    height: 30px;
    margin-right: 7px;
  }
  p{
    font-size: 20px;
    line-height: 24px;
    color: ${colors.white};
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }
  .cross-icon{
    width: 20px;
    height: 20px;
  }
`
export const MobAddressBox = styled.div`
  padding: 13px 20px 12px 20px;
  margin-top: 20px;
  background: rgba(85,183,255, 0.1);
  border-radius: 20px;
  min-width: 200px;
  // box-sizing: border-box;
  overflow: hidden;
  p{
    font-size: 12px;
    line-height: 16px;
    color: ${colors.lightBlue};
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    @media (min-width: 380px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
  img{
    width: 20px;
    height: 20px;
  }
  @media (min-width: 380px) {
    min-width: 300px;
  }
`
export const MobNavItemCont = styled.div`
  padding-left: 20px;
  margin-top: 20px;
  .last-item{
    margin-bottom: 0;
  }
  a{
    text-decoration: none;
  }
`
export const MobNavItem = styled.p<any>`
  font-size: 30px;
  line-height: 37px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0 0 20px 0;
  opacity: ${(props: any) => props.isActive ? 1 : 0.4};
  &:hover{
    opacity: 1
  }
`
export const MobNavDivider = styled.div`
  width: 100%;
  height: 1px;
  background: ${colors.borderColor};
  margin-bottom: 20px;
  border:0;
  box-sizing: border-box;
`
export const MobNavLink = styled.p<any>`
  text-decoration: none;
  font-size: 20px;
  line-height: 24px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0 0 20px 0;
  opacity: 0.4;
`
export const MobNavCardCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 13px;
  margin-top: 30px;
  a{
    text-decoration: none;
  }
`
export const MobNavCard = styled.div<any>`
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: #0E1628;
  box-sizing: border-box;
  border: ${(props: any) => props.isActive ? `2px solid ${colors.lightBlue}` : 'none'};
  img{
    width: 56px;
    height: 54px;
  }
  .blue-planet{
    color: ${(props: any) => props.isActive ? `${colors.lightBlue}` : 'none'} ;
  }
`
export const MobNavGreenCard = styled(MobNavCard) <any>`
  background: #0B1F1B;
  border: ${(props: any) => props.isActive ? `2px solid ${colors.lightGreen}` : 'none'};
  .green-planet{
    color: ${(props: any) => props.isActive ? `${colors.lightGreen}` : 'none'} ;
  }
`
export const MovNavPinkCard = styled(MobNavCard)`
  align-items: center;
  background: #280F29;
  margin-top: 13px;
`

export const MobCardTitle = styled.p`
  font-size: 18px;
  line-height: 22px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 10px 0;
`
export const MobCardInfo = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  opacity: 0.4
`
export const MobileNavFooter = styled.div<any>`
  display: ${(props: any) => (props.open ? 'flex' : 'none')};
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 70px;
`
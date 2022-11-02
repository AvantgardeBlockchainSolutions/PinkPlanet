import styled from 'styled-components'
import { colors, screenSizes } from 'shared/styles/theme'
import { Button } from 'shared/button'

export const HeaderCont = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  background: rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid ${colors.borderColor};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 76px;
  box-sizing: border-box;
  z-index: 20;
  backdrop-filter: blur(50px);
  @supports (-moz-appearance: none) {
    background: ${colors.themeBackground};
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    display: flex;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    padding-right: 40px;
  }
  @media (min-width: ${screenSizes.mediaXXXX}px) {
    padding-right: 120px;
  }
`
export const HeaderPathCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PathCont = styled.div`
  position: relative;
  display: flex;
  margin-right: 30px;
`
export const ActivePath = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background: ${colors.lightBlue};
`
export const ActiveLendingPath = styled(ActivePath)`
  background: ${colors.lightGreen};
`
export const Path = styled.p<any>`
  font-size: 16px;
  line-height: 20px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  opacity: ${(props: any) => (props.activeTab ? 1 : 0.4)};
  font-weight: ${(props: any) => (props.activeTab ? 400 : 500)};
  margin: 0;
  cursor: pointer;
  @media (min-width: ${screenSizes.mediaXLL}px) {
    font-size: 20px;
    line-height: 24px;
  }
  &:hover {
    opacity: 1;
  }
`
export const PriceWalletBox = styled.div`
  display: flex;
  align-items: center;
`
export const PriceBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  p {
    font-size: 14px;
    line-height: 17px;
    color: ${colors.white};
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    @media (min-width: ${screenSizes.mediaXLL}px) {
      font-size: 16px;
      line-height: 19px;
    }
  }
`

export const HeaderTitleCont = styled.div`
  display: flex;
  align-items: center;
  padding-left: 27.14px;
  margin-right: 41px;
  img {
    height: 30px;
    width: 30px;
    margin-right: 10px;
    @media (min-width: ${screenSizes.mediaXLL}px) {
      height: 35px;
      width: 35px;
    }
    @media (min-width: ${screenSizes.mediaXXL}px) {
      height: 40px;
      width: 40px;
    }
  }
  p {
    font-size: 18px;
    line-height: 20px;
    color: ${colors.white};
    font-family: 'Montserrat', sans-serif;
    @media (min-width: ${screenSizes.mediaXLL}px) {
      font-size: 20px;
      line-height: 24px;
    }
    @media (min-width: ${screenSizes.mediaXXL}px) {
      font-size: 24px;
      line-height: 29px;
    }
  }
`
export const DotContent = styled.div`
  display: none;
  left: 0;
  float: left;
`
export const DotContWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  &:hover ${DotContent} {
    display: block;
  }
`
export const DotCont = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  border: 1px solid ${colors.borderColor};
  border-radius: 10px;
  width: 28px;
  height: 34px;
  &:hover {
    border: 1px solid ${colors.white};
    span {
      opacity: 1;
    }
  }
  span {
    width: 4px;
    height: 4px;
    background: ${colors.white};
    opacity: 0.4;
    border-radius: 2px;
    margin: 1px 0;
  }
`
export const ConnectWalletBtn = styled(Button)<any>`
  height: 50px;
  font-size: 12px;
  padding: 14px 30px;
  border: 0;
  box-sizing: border-box;
  color:#fff;
  border: 2px solid #FFFFFF26;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 912px) {
    font-size: 18px;
  }



`

// color: ${(props: any) => (props.currPlanet === 'green' ? colors.lightGreen :props.currPlanet === 'pink' ?"white": colors.lightBlue)};
// background: ${(props: any) =>
//   props.currPlanet === 'green'
//     ? `transparent linear-gradient(90deg, rgba(85,255,118, 0.2) 0%, rgba(39,172,64, 0.2) 100%)  0% 0% no-repeat padding-box`
//     :props.currPlanet === 'pink' ?`linear-gradient(to right, #ff55de, #55b7ff)`: `transparent linear-gradient(270deg, rgba(48,55,218, 0.2) 0%, rgba(85,183,255, 0.2) 100%) 0% 0% no-repeat padding-box`};
// &:disabled {
//   background: ${(props: any) =>
//     props.currPlanet === 'green'
//       ? `transparent linear-gradient(90deg, rgba(85,255,118, 0.2) 0%, rgba(39,172,64, 0.2) 100%)  0% 0% no-repeat padding-box`
//       :props.currPlanet === 'pink' ? `transparent linear-gradient(to right, rgba(255, 85, 222, 0.8), rgba(85, 183, 255, 0.8)) 0% 0% no-repeat padding-box` : `transparent linear-gradient(270deg, rgba(48,55,218, 0.2) 0%, rgba(85,183,255, 0.2) 100%) 0% 0% no-repeat padding-box`};
//   cursor: initial;
//   opacity: 0.6;
// }
// &:hover {
//   background: ${(props: any) =>
//     props.currPlanet === 'green'
//       ? `transparent linear-gradient(90deg, rgba(85,255,118, 0.4) 0%, rgba(39,172,64, 0.26) 100%)  0% 0% no-repeat padding-box`
//       :props.currPlanet === 'pink' ? `transparent linear-gradient(to right, rgba(255, 85, 222, 0.8), rgba(85, 183, 255, 0.8)) 0% 0% no-repeat padding-box` : `transparent linear-gradient(270deg, rgba(48,55,218, 0.2) 0%, rgba(85,183,255, 0.2) 100%) 0% 0% no-repeat padding-box`};
// }

export const CreateassetBtn = styled(Button)<any>`
  height: 50px;
  font-size: 12px;
  padding: 14px 30px;
  border: 0;
  box-sizing: border-box;
  margin-left:10px;
  // font-weight:600;
  display:flex;
  align-items:center;
  color: ${(props: any) => (props.currPlanet === 'green' ? colors.lightGreen :props.currPlanet === 'pink' ?"white": colors.lightBlue)};
  background: ${(props: any) =>
    props.currPlanet === 'green'
      ? `transparent linear-gradient(90deg, rgba(85,255,118, 0.2) 0%, rgba(39,172,64, 0.2) 100%)  0% 0% no-repeat padding-box`
      :props.currPlanet === 'pink' ?` transparent linear-gradient(90deg, #FF55DE 0%, #55B7FF 100%) 0% 0% no-repeat padding-box;`: `transparent linear-gradient(270deg, rgba(48,55,218, 0.2) 0%, rgba(85,183,255, 0.2) 100%) 0% 0% no-repeat padding-box`};
  &:disabled {
    background: ${(props: any) =>
      props.currPlanet === 'green'
        ? `transparent linear-gradient(90deg, rgba(85,255,118, 0.2) 0%, rgba(39,172,64, 0.2) 100%)  0% 0% no-repeat padding-box`
        :props.currPlanet === 'pink' ? `transparent linear-gradient(to right, rgba(255, 85, 222, 0.8), rgba(85, 183, 255, 0.8)) 0% 0% no-repeat padding-box` : `transparent linear-gradient(270deg, rgba(48,55,218, 0.2) 0%, rgba(85,183,255, 0.2) 100%) 0% 0% no-repeat padding-box`};
    cursor: initial;
    opacity: 0.6;
  }
  &:hover {
    background: ${(props: any) =>
      props.currPlanet === 'green'
        ? `transparent linear-gradient(90deg, rgba(85,255,118, 0.4) 0%, rgba(39,172,64, 0.26) 100%)  0% 0% no-repeat padding-box`
        :props.currPlanet === 'pink' ? `transparent linear-gradient(to right, rgba(255, 85, 222, 0.8), rgba(85, 183, 255, 0.8)) 0% 0% no-repeat padding-box` : `transparent linear-gradient(270deg, rgba(48,55,218, 0.2) 0%, rgba(85,183,255, 0.2) 100%) 0% 0% no-repeat padding-box`};
  }

  @media (min-width: 912px) {
    font-size: 18px;
  }
`

/* ======================== Header SubLink ============================= */

export const SubLinkCont = styled.div`
  position: absolute;
  top: 35px;
  left: 0;
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.borderColor};
  border-radius: 10px;
  background: ${colors.themeBackground};
  padding: 2.3vw 2.3vw 0.8vw 2.3vw;
  box-sizing: border-box;
  z-index: 100;
  a {
    text-decoration: none;
  }
  min-width: 38vw;
`
export const SubLinkRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-bottom: 35px;
  a {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    cursor: pointer;
  }
`

export const HeadText = styled.p`
  font-size: 18px;
  line-height: 22px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  opacity: 1;
  margin: 0 0 0px 0;
  cursor: pointer;
  @media (max-width: ${screenSizes.mediaL}px) {
    font-size: 11px;
    line-height: 13px;
  }
  @media (max-width: ${screenSizes.mediaXLL}px) {
    font-size: 12px;
    line-height: 14px;
  }
  @media (max-width: ${screenSizes.mediaXXL}px) {
    font-size: 14px;
    line-height: 17px;
  }
  &.menu-link {
    text-align: left;
  }
`

export const HeadDescription = styled.p`
  font-size: 14px;
  line-height: 18px;
  margin: 6px 0 0 0;
  text-align: left;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 0.4;
  @media (max-width: ${screenSizes.mediaL}px) {
    font-size: 10px;
    line-height: 12px;
  }
  @media (max-width: ${screenSizes.mediaXLL}px) {
    font-size: 10px;
    line-height: 13.5px;
  }
  @media (max-width: ${screenSizes.mediaXXL}px) {
    font-size: 12px;
    line-height: 15px;
  }
`

export const SubLink = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  &:hover {
    p {
      opacity: 1;
    }
  }
  div {
    img {
      width: 1.2vw;
      height: 1.21vw;
      margin-right: 0.78vw;
    }
  }
`

// display: flex;
// flex-direction: column;
// justify-content: center;
// export const SubLinkDescription = styled.p`

// `

/* =============== Mobile Header ================== */

export const MobileHeaderCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px 20px 20px;
  background: rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid ${colors.borderColor};
  position: fixed;
  width: 100%;
  height: 70px;
  top: 0;
  left: 0;
  box-sizing: border-box;
  z-index: 10;
  backdrop-filter: blur(50px);
  @supports (-moz-appearance: none) {
    background: ${colors.themeBackground};
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    display: none;
  }
`
export const MobileHeaderTitleCont = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 31.41px;
    height: 30px;
    margin-right: 7px;
  }
  p {
    font-size: 20px;
    line-height: 24px;
    color: ${colors.white};
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }
`
export const MobCollapseIcon = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 0px;
`

export const GreenMobCollapseIcon = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 0px;
`

export const ConnectBtn = styled(Button)`
  background: ${colors.themeBackground};
  font-size: 15px;
  line-height: 19px;
  max-width: 110px;
  padding: 8px 20px;
  text-align: center;
`

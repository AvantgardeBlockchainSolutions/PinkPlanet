import styled from 'styled-components'
import { screenSizes } from 'shared/styles/theme'

export const RouteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  box-sizing: border-box;
  .bg-icon1 {
    position: fixed;
    display: none;
    top: 160px;
    left: 300px;
    width: 350px;
    height: 325px;
    transition: 0.3s all;
    @media (min-width: ${screenSizes.mediaXL}px) {
      display: inline-block;
    }
  }
  .bg-icon2 {
    position: fixed;
    display: none;
    top: 50%;
    left: 75%;
    width: 56.09vw;
    height: 53.28vw;
    @media (min-width: ${screenSizes.mediaL}px) {
      display: inline-block;
    }
  }
  .bg-icon3 {
    position: fixed;
    display: inline-block;
    top: 30px;
    right: -85px;
    width: 220px;
    height: 220px;
    @media (min-width: ${screenSizes.mediaL}px) {
      display: none;
    }
  }
`

export const StyledRoutesWrapper = styled.div`
  display: block;
  box-sizing: border-box;
  @media (min-width: ${screenSizes.mediaM}px) {
    display: grid;
    grid-template-columns: 190px 1fr 50px;
    grid-gap: 20px;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    grid-gap: 20px;
    grid-template-columns: 190px 1fr 100px;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    grid-gap: 40px;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    grid-gap: 40px;
    grid-template-columns: 190px 1fr 140px;
  }
  @media (min-width: ${screenSizes.mediaXXXX}px) {
    grid-gap: 70px;
  }
  @media (min-width: ${screenSizes.mediaM}px) and (max-width: ${screenSizes.mediaXLL}px) {
    display: flex;
  }
`
export const SideNavCont = styled.div`
  display: none;
  position:relative;
  box-sizing: border-box;
  overflow: hidden;
  width: 190px;
  @media (min-width: ${screenSizes.mediaM}px) {
    display: block;
  }
`
export const StyledRoutesContainer = styled.div<any>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-item:flex-start;
  width: 100%;
  box-sizing:border-box;
  @media (min-width: ${screenSizes.mediaM}px) and (max-width: ${screenSizes.mediaXLL}px) {
    width:calc(100% - 190px)
  }
`

export const StyledRoutes = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 1427px;
  margin: 0 auto;
  min-height: 110vh;
  @media (min-width: 1921px) {
    max-width: 80vw !important;
    width: 80vw !important;
  }
`
// export const BackgroundImg = styled.div`
//   position: fixed;
//   display: none;
//   top: -70px;
//   right: -200px;
//   width: 649px;
//   height: 620px;
//   transform: matrix(1, 0.05, -0.05, 1, 0, 0);
//   background: transparent linear-gradient(143deg, #55B7FF 0%, #3037DA 51%, #1F123E 100%) 0% 0% no-repeat padding-box;
//   box-shadow: 0px 3px 20px #00000029;
//   border-radius: 50%;
//   @media (min-width: ${screenSizes.mediaL}px) {
//     display: inline-block;
//   }
// `

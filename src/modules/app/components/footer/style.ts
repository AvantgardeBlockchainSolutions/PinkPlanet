import styled from 'styled-components'
import { colors, screenSizes } from 'shared/styles/theme'

export const FooterWrapper = styled.div`
  margin: 50px 0 0 0;
  border-top: 1px solid ${colors.borderColor};
  box-sizing: border-box;
  z-index: 5;
  background: ${colors.themeBackground};
  backdrop-filter: blur(50px);
  display: block;
  padding: 20px 0 20px 30px;
  @media (min-width: ${screenSizes.mediaS}px) {
    padding: 30px 0 60px 40px;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    padding: 52px 0 80px 0;
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
  @media (max-width: ${screenSizes.mediaM}px) {
    padding-bottom:100px !important;
  }
`
export const FooterSpaceCont = styled.div``
export const FooterCont = styled.div`
  position: relative;
  width: 100%;
  max-width: 1427px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(1,1fr);
  grid-gap: 30px;
  z-index: 1;
  padding: 0;
  @media (min-width: ${screenSizes.mediaS}px) {
    grid-template-columns: 2fr 1fr;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    grid-template-columns: 1.5fr repeat(4,1fr);
    grid-gap: 10px;
    margin: 0 auto;
    padding: 0 20px;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    padding: 0 36px;
  }
`
export const FooterBgImgCont = styled.div`
  position: absolute;
  top: -10px;
  right: 0;
  opacity: 0.2;
  z-index: -1;
  width: 80px;
  overflow: hidden;
  box-sizing: border-box;
  @media (min-width: ${screenSizes.mediaS}px) {
    left: 250px;
    width: 140px;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    top: -36px;
    left: 80px;
    width: 200px;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    overflow: visible;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    width: 250px;
  }
`

export const FooterBgImg = styled.img`
 width: 140px;
 height: 140px;
 @media (min-width: ${screenSizes.mediaM}px) {
  width: 200px;
  height: 200px;
 }
 @media (min-width: ${screenSizes.mediaXXL}px) {
  width: 250px;
  height: 250px;
 }
`
export const FooterItemCont = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`
export const TitleImgBox = styled.div`
  display:flex;
  align-items: center;
  img{
      width:35px;
      height:35px;
      margin:0 10px 0 0;
      @media (min-width: ${screenSizes.mediaM}px) {
        width: 35px;
        height: 35px;
      }
    }
`
export const PlanetTitle = styled.h1`
  font-size: 16px;
  line-height: 20px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 18px;
    line-height: 22px;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    font-size: 20px;
    line-height: 24px;
  }
`
export const FooterTitle = styled.h1<any>`
  font-size: 16px;
  line-height: 20px;
  color: ${(props: any) => props.currPlanet === 'blue' ? colors.lightBlue : props.currPlanet === 'pink' ?"#FF55DE": colors.lightGreen};
  font-family: 'Montserrat', sans-serif;
  margin: 0 0 10px 0;
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 18px;
    line-height: 22px;
    margin: 8px 0 16px 0;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    font-size: 20px;
    line-height: 24px;
  }
`
export const FooterLink = styled.a`
  font-size: 14px;
  line-height: 18px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0 0 10px 0;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  opacity:0.4;
  &:hover{
    opacity:1;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 14px;
    line-height: 17px;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    font-size: 16px;
    line-height: 19px;
  }
`

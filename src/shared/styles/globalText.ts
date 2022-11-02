import styled from 'styled-components'
import { colors, screenSizes } from './theme'

export const TitleText = styled.h1`
 font-size: 24px;
 line-height: 29px;
 color: ${colors.white};
 font-family: 'Montserrat', sans-serif;
 margin: 0;
 @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 30px;
    line-height: 37px;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    font-size: 40px;
    line-height: 50px;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    font-size: 50px;
    line-height: 61px;
  }
`
export const TitleInfo = styled.p`
 font-size: 14px;
 line-height: 18px;
 color: ${colors.white};
 font-family: 'Montserrat', sans-serif;
 margin: 0;
 opacity: 0.4;
 @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 20px;
    line-height: 24px;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    font-size: 24px;
    line-height: 29px;
  }
`
export const CardTitle = styled.h1`
 font-size: 20px;
 line-height: 24px;
 color: ${colors.white};
 font-family: 'Montserrat', sans-serif;
 margin: 0;
 @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 22px;
    line-height: 26px;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    font-size: 24px;
    line-height: 29px;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    font-size: 30px;
    line-height: 37px;
  }
`
export const DataTitle = styled.p`
  font-size: 20px;
  line-height: 24px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 24px;
    line-height: 29px;
  }
`

export const CardSubTitle = styled.p`
 font-size: 20px;
 line-height: 24px;
 color: ${colors.white};
 font-family: 'Montserrat', sans-serif;
 margin: 0;
`
export const CardText = styled.p`
 font-size: 14px;
 line-height: 18px;
 color: ${colors.white};
 font-family: 'Montserrat', sans-serif;
 opacity: 0.4;
 margin: 0;
 @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 12px;
    line-height: 15px;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    font-size: 14px;
    line-height: 17px;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    font-size: 16px;
    line-height: 19px;
  }
`
export const CardSubText = styled.p`
 font-size: 14px;
 line-height: 18px;
 color: ${colors.white};
 font-family: 'Montserrat', sans-serif;
 opacity: 0.4;
 margin: 0;
 @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    font-size: 18px;
    line-height: 22px;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    font-size: 20px;
    line-height: 24px;
  }
`
export const CardBText = styled.p`
  font-size: 20px;
  line-height: 24px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  @media (max-width: ${screenSizes.mediaS}px) {
    font-size: 4.8vw
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 18px;
    line-height: 22px;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    font-size: 20px;
    line-height: 24px;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    font-size: 24px;
    line-height: 29px;
  }
`

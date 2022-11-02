import styled from 'styled-components'
import { colors, screenSizes } from 'shared/styles/theme'

export const HalBornWrapper = styled.div`
  display: none;
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 999;
  @media (min-width: ${screenSizes.mediaM}px){
    bottom:20px;
    right: 20px;
    display: block;
  }
`
export const HalBornCont = styled.div`
  width: 180px;
  max-width: 180px;
  max-height: 40px;
  padding: 10px 20px;
  box-sizing: border-box;
  background: ${colors.themeBackground};
  border-radius: 20px;
  border: 1px solid ${colors.borderColor};
  box-shadow: 0px 3px 10px #00000033;
  display:flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (min-width: ${screenSizes.mediaM}px){
    width: 260px;
    max-width: 260px;
    max-height: 63px;
    padding: 15px 30px;
  }
`
export const AuditText = styled.p`
  font-size: 12px;
  line-height: 16px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  @media (min-width: ${screenSizes.mediaM}px){
    font-size: 15px;
    line-height: 19px;
  }
`
export const HalbornText = styled.p`
  font-size: 12px;
  line-height: 16px;
  color: #8FC63D;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  @media (min-width: ${screenSizes.mediaM}px){
    font-size: 15px;
    line-height: 19px;
  }
`
export const HalBornImg = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 5px;
  @media (min-width: ${screenSizes.mediaM}px){
    width: 32px;
    height:32px;
    margin: 0 8px;
  }
`
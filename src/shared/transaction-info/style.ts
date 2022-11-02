import styled from 'styled-components'
import { colors, screenSizes } from 'shared/styles/theme'
import { Button } from 'shared/button'

export const ModalCont = styled.div`
  background: ${colors.themeBackground};
  box-shadow: 0px 3px 10px #00000033;
  border: 1px solid ${colors.borderColor};
  border-radius: 20px;
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  max-width: 382px;
  box-sizing: border-box;
  margin: 0 auto;
  @media (min-width: ${screenSizes.mediaM}px) {
    padding: 30px;
    width: 450px;
    max-width: 450px;
  }
`
export const TransInfoCont = styled.div`
  .cross-icon {
    cursor: pointer;
  }
`
export const TransImgCont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 30px 0;
`
export const TransImg = styled.img`
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  @media (min-width: ${screenSizes.mediaM}px) {
    width: 300px;
    height: 300px;
  }
`
export const TransLink = styled.a<any>`
  font-size: 16px;
  line-height: 20px;
  color: ${(props: any) => props.currPlanet === 'green' ? colors.lightGreen : colors.lightBlue};
  cursor: pointer;
  text-decoration: none;
`
export const FlexSBCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
`
export const TitleText = styled.h1`
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
export const InfoSmallText = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 16px;
    line-height: 20px;
  }
`
export const PrimaryBtn = styled(Button) <any>`
  height: 49px;
  padding: 15px 0;
  box-sizing: border-box;
  font-size: 15px;
  line-height: 19px;
  background: transparent linear-gradient(270deg, #3037da 0%, #55b7ff 100%) 0% 0% no-repeat padding-box;
  opacity: 1;
  transition: 0.5s;
  text-align: center;
  &:disabled {
    opacity: 0.2;
    background: transparent linear-gradient(270deg, #3037da 0%, #55b7ff 100%) 0% 0% no-repeat padding-box;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    height: 60px;
    padding: 18px 0 17px 0;
    font-size: 20px;
    line-height: 25px;
  }
`
export const PrimaryGreenBtn = styled(PrimaryBtn) <any>`
  background: transparent linear-gradient(270deg, ${colors.lightGreen} 0%, ${colors.green} 100%) 0% 0% no-repeat padding-box;
  opacity: 1;
  transition: 0.5s;
  text-align: center;
  &:disabled {
    opacity: 0.2;
    background: transparent linear-gradient(270deg, ${colors.lightGreen} 0%, ${colors.green} 100%) 0% 0% no-repeat padding-box;
  }
  &:hover:after {
    opacity: 1;
    z-index: -1;
  }
`
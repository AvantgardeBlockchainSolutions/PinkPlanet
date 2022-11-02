import styled from 'styled-components'
import { colors, screenSizes } from 'shared/styles/theme'

export const ModalCont = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 382px;
  background: ${colors.themeBackground};
  box-shadow: 0px 3px 10px #00000033;
  border: 1px solid ${colors.borderColor};
  border-radius: 20px;
  box-sizing: border-box;
  margin: 0 auto;
  @media (min-width: ${screenSizes.mediaM}px) {
    padding: 30px;
    width: 477px;
    max-width: 477px;
  }
`
export const FlexSBCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const FlexCont = styled.div`
  display: flex;
  align-items: center;
`
export const TitleText = styled.h1`
  font-size: 20px;
  line-height: 24px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 30px;
    line-height: 38px;
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
export const SettingCont = styled.div`
  .cross-icon {
    cursor: pointer;
  }
  .setting-header {
    margin-bottom: 24px;
    @media (min-width: ${screenSizes.mediaM}px) {
      margin-bottom: 30px;
    }
  }
  .dead-line-box {
    margin-top: 20px;
  }
  .minute-text {
    margin-left: 15px;
    font-family: MontserratBold !important;
  }
`
export const SettingSubTitle = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 20px;
    line-height: 25px;
  }
`
export const SlippageCont = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  align-items: center;
  margin: 20px 0 30px 0;
  box-sizing: border-box;
`
export const SettingValBox = styled.div`
  text-align: center;
  height: 38px;
  max-width: 70px;
  font-size: 14px;
  line-height: 18px;
  font-family: 'Montserrat', sans-serif;
  padding: 12px 20px;
  color: ${colors.lightBlue};
  background: #55b7ff33;
  border-radius: 15px;
  cursor: pointer;
  box-sizing: border-box;
  @media (min-width: ${screenSizes.mediaM}px) {
    height: 50px;
    font-size: 16px;
    line-height: 20px;
    padding: 17px 30px;
    max-width: 86px;
  }
`
export const SettingInput = styled.input`
  text-align: center;
  background: ${colors.themeBackground};
  border: 1px solid ${colors.borderColor};
  border-radius: 15px;
  color: ${colors.white};
  height: 38px;
  font-size: 14px;
  line-height: 18px;
  font-family: 'Montserrat', sans-serif;
  padding: 12px 25px;
  outline: none;
  max-width: 100px;
  box-sizing: border-box;
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 16px;
    line-height: 20px;
    padding: 17px 20px 13px 20px;
    max-width: 129px;
    height: 50px;
  }
`
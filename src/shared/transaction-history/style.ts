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
export const TransHistoryCont = styled.div`
  .history-header {
    margin-bottom: 30px;
  }
  .history-item {
    margin-bottom: 20px;
  }
  .cross-icon {
    cursor: pointer;
  }
  .trans-status-icon {
    width: 18px;
    height: 18px;
    @media (min-width: ${screenSizes.mediaM}px) {
      width: 20px;
      height: 20px;
    }
  }
`
export const TransactionLink = styled.a`
  img {
    width: 18px;
    height: 18px;
    margin-left: 10px;
    margin:0 10px;
    @media (min-width: ${screenSizes.mediaM}px) {
      width: 20px;
      height: 20px;
      margin: 0 16px;
    }
  }
`
export const TransHistoryText = styled.p<any>`
  font-size: 14px;
  line-height: 18px;
  color: ${(props: any) => (props.transStatus === 'pending' ? colors.yellow : props.status ? colors.lightGreen : colors.red)};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 16px;
    line-height: 20px;
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
export const NoDataAvailable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 16px;
    line-height: 20px;
    color: ${colors.white};
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }
`
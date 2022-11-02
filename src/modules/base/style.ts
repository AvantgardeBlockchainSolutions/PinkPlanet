import styled from 'styled-components'
import { colors, screenSizes } from 'shared/styles/theme'
import { CardBText } from 'shared/styles/globalText'
import { PlanetCard } from 'shared/styles/styled'
import { shimmer } from 'shared/styles/styled'

export const LoadingText = styled.div`
  animation: ${shimmer} 3s;
  animation-iteration-count: infinite;
  background: transparent linear-gradient(270deg, #3037da 0%, #55b7ff 100%) 0% 0% ;
  background-size: 1000px 100%;
  border-radius: 10px;
`
export const LoadingText1 = styled(LoadingText)`
  width: 50%;
  height: 16px;
  margin-top: 10px;
  @media (min-width: ${screenSizes.mediaXS}px) {
    height: 20px;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    height: 18px;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    height: 20px;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    height: 24px;
  }
`
export const LoadingText2 = styled(LoadingText1)`
  width: 100%;
  height: 16px;
  margin-top: 10px;
  @media (min-width: ${screenSizes.mediaXS}px) {
    height: 20px;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    height: 18px;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    height: 20px;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    height: 24px;
  }
`
export const Card = styled(PlanetCard)`
  width: 100%;
  padding: 20px;
  overflow-x: hidden !important;
  @media (min-width: ${screenSizes.mediaM}px) {
    max-width: 460px;
    padding: 30px 20px 24px 20px;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    padding: 30px 24px 24px 24px;
  }
  @media (min-width: ${screenSizes.mediaXXXX}px) {
    max-width: 460px;
    padding: 30px 30px 24px 30px;
  }
`
export const CardNumText = styled(CardBText)`
  margin-top: 10px;
`
export const LevelBox = styled.div`
  padding: 3px 10px;
  margin-left: 7px;
  background: rgba(255,255,255,0.1);
  margin-top: 10px;
  border-radius: 11px;
  p{
    font-size: 12px;
    font-family: 'Montserrat', sans-serif;
    color: ${colors.white};
    margin: 0;
  }
`

export const BaseContainer = styled.div`
  position: relative;
  .title-info{
      margin-top: 10px;
      @media (min-width: ${screenSizes.mediaM}px) {
        margin-top: 20px;
      }
  }
  .val-space{
      margin-top: 10px;
  }
`
export const BaseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export const TvlInfoBox = styled(PlanetCard)`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  width: 280px;
  max-width: 280px;
  height: 120px;
  @media (min-width: ${screenSizes.mediaXLL}px) {
    width: 300px;
    max-width: 300px;
    padding: 20px 20px;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    width: 347px;
    max-width: 347px;
    padding: 20px 30px;
  }
  img{
      width: 60px;
      height: 60px;
      margin-right: 20px;
      @media (min-width: ${screenSizes.mediaXLL}px) {
        width: 70px;
        height: 70px;
      }
      @media (min-width: ${screenSizes.mediaXXL}px) {
        width: 80px;
        height: 80px;
      }
  }
`
export const UserInfoCont = styled.div`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  grid-gap: 15px;
  margin-top: 20px;
  @media (min-width: ${screenSizes.mediaM}px) {
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 30px;
  }
`
export const OverViewInfo = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  grid-gap: 10px;
  margin-top: 20px;
  text-align: left;
  overflow-x: hidden!important;
  @media (min-width: ${screenSizes.mediaM}px) {
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
    margin-top: 30px;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    grid-gap: 10px;
    grid-template-columns: 1.2fr 1fr;
  }
  @media (min-width: ${screenSizes.mediaXXXX}px) {
    grid-gap: 20px;
  }
`
export const BalanceWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  align-items: center;
  .bal-text {
    font-size: 14px;
    line-height: 18px;
  }
`
export const BalanceCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    width: 70px;
    height: 70px;
    margin-bottom:10px;
    @media (min-width: ${screenSizes.mediaXLL}px) {
       width: 80px;
       height: 80px;
      }
    @media (min-width: ${screenSizes.mediaXXL}px) {
       width: 100px;
       height: 100px;
      }
  }
  .buy-btn{
    height: 39px !important;
    max-width: 130px;
    border-radius: 20px !important;
    font-size: 15px !important;
    margin-top: 17px;
  }
`
export const BalanceText = styled(CardBText)`
  margin: 5px 0 0 0;
  span{
    font-size: 16px;
    line-height: 19px;
    opacity: 0.4;
  }
`
/*  ================== User Mobile balance =============== */

export const MobBalWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-top: 15px;
  box-sizing: border-box;
  @media (min-width: ${screenSizes.mediaM}px) {
    display: none;
  }
`
export const MobBalCard = styled(PlanetCard)`
  padding: 20px;
  .total-token{
    margin: 10px 0;
  }
`
export const MobBuyAssetCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  img{
    width: 44px;
    height: 44px;
  }
  button{
    height: 35px;
    max-width: 54px;
    font-size: 12px;
    padding: 10px 15px;
    margin-top: 0 !important;
    box-sizing: border-box;
  }
`
export const MobBalText = styled.p<any>`
  font-size: 18px;
  line-height: 22px;
  color: ${(props: any) => props.tokenType === 'aqua' ? colors.lightBlue : props.tokenType === 'gamma' ? colors.lightGreen : colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
`
import styled from 'styled-components'
import { colors, screenSizes } from 'shared/styles/theme'
import { shimmer } from './styled'
import { Button } from 'shared/button'

export const HAListCont = styled.div`
  margin-top: 20px;
  @media (min-width: ${screenSizes.mediaM}px) {
    margin-top: 40px;
  }
`
export const HATokenWrapper = styled.div`
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin: 0 -16px;
  @media (min-width: ${screenSizes.mediaM}px) {
    margin: 0;
  }
`
export const HATokenCont = styled.div`
  display: grid;
  grid-template-columns: repeat(10,1fr);
  grid-gap: 10px;
  margin-top: 20px;
  margin-bottom: 15px;
  width: 1290px;
  box-sizing: border-box;
  &:first-child{
    margin-left: 16px;
  }
  &:last-child{
    margin-right: 16px;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    width: 100%;
    grid-template-columns: repeat(auto-fit,100px);
    margin-top: 30px;
    &:first-child{
      margin-left: 0;
    }
    &:last-child{
      margin-right: 0;
    }
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    grid-template-columns: repeat(10,1fr);
    grid-gap: 15px;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    grid-gap: 25px;
  }
`
export const HATokenBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  background: ${colors.themeBackground};
  border: 1px solid ${colors.borderColor};
  border-radius: 30px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover{
    background: #050505;
    //box-shadow: 0px -5px 30px rgba(48,140,218, 0.2);
    box-shadow: 0px 4px 31px rgb(48 140 218 / 30%);
  }
  img{
    width: 44px;
    height: 44px;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    padding: 16px 0;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    padding: 20px 0;
  }
`
export const HATokenTxt = styled.p`
  font-size: 12px;
  line-height: 15px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 10px 0 5px 0;
  opacity: 0.4;
  text-align: center;
`
export const HApyTxt = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
`
export const HAImgCont = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 66px;
  height: 44px;
  box-sizing: border-box;
  .second-img {
    position: absolute;
    top: 0;
    left: 22px;
  }
  .third-img{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 16px;
    height: 16px;
  }
`


/* =========================== HA Modal style ============================= */

export const HAModalCont = styled.div`
  width: 100%;
  padding: 20px 20px 20px 20px;
  box-sizing: border-box;
  border: none;
  border-radius: 0;
  background: ${colors.themeBackground};
  margin: 0 auto;
  @media (min-width: ${screenSizes.mediaS}px) {
    width: 100%;
    max-width: 600px;
    padding: 20px;
    border-radius: 20px;
    border: 1px solid ${colors.borderColor};
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    width: 571px;
    max-width: 571px;
    padding: 30px;
  }
  .close-icon{
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
  .earning-card{
    margin-top: 20px;
  }
  .pool-earning-card{
    margin: 10px 0 20px 0;
  }
  &.tooltipOverlay {
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
  }
`
export const HAMDataCont = styled.div`
  padding: 0;
  @media (min-width: ${screenSizes.mediaM}px) {
    padding: 0 10px;
  }
  .without-boost{
    margin-bottom: 20px;
  }
`
export const HAModalTitle = styled.h1`
  font-size: 24px;
  line-height: 29px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
`
export const TokenInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  div.mobCapsuleCont{
    display: flex;
  }
`
export const HATokenIcon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  @media (min-width: ${screenSizes.mediaM}px) {
    width: 120px;
    height: 120px;
  }
`
export const TokenValTxt = styled.h1<any>`
  font-size: 40px;
  line-height: 49px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  opacity: ${(props: any) => props.isValZero ? 0.4 : 1};
`
export const ModalAPYTxt = styled.p`
  font-size: 18px;
  line-height: 22px;
  color: #55FE76;
  font-family: 'Montserrat', sans-serif;
  margin: 10px 0;
  &.borrowedTxt{
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    color: #FFFFFF66;
  }
`
export const TvlTxt = styled.p`
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF66;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
`
export const SwitchCont = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid ${colors.borderColor};
  border-radius: 30px;
  box-sizing: border-box;
  padding: 3px;
  height: 51px;
`
export const DepositSwitch = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: ${(props: any) => props.isActive ? '#55B7FF32 0% 0% no-repeat padding-box;' : colors.themeBackground};
  color: ${(props: any) => props.isActive ? colors.lightBlue : colors.white};
  opacity: ${(props: any) => props.isActive ? 1 : 0.4};
  cursor: pointer;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  &:hover {
    background: ${(props: any) => props.isActive ? 'rgba(85,183,255, 0.3)' : colors.themeBackground};
    opacity: 1;
  }
`

export const SupplySwitch = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: ${(props: any) => props.isActive ? '#55FF7632 0% 0% no-repeat padding-box;' : colors.themeBackground};
  color: ${(props: any) => props.isActive ? colors.lightGreen : colors.white};
  opacity: ${(props: any) => props.isActive ? 1 : 0.4};
  cursor: pointer;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  &:hover {
    background: ${(props: any) => props.isActive ? 'rgba(85,255,118, 0.3)' : colors.themeBackground};
    opacity: 1;
  }
`

export const WithdrawSwitch = styled(DepositSwitch) <any>`
  background: ${(props: any) => props.isActive ? 'rgba(255, 85, 85, 0.2)' : colors.themeBackground};
  &:hover {
    background: ${(props: any) => props.isActive ? 'rgba(255, 85, 85, 0.3)' : colors.themeBackground};
    opacity: 1;
  }
  color: ${(props: any) => props.isActive ? colors.red : colors.white};
  opacity: ${(props: any) => props.isActive ? 1 : 0.4};
`
export const RepaySwitch = styled(DepositSwitch) <any>`
  background: ${(props: any) => props.isActive ? 'rgba(157, 85, 255, 0.2)' : colors.themeBackground};
  &:hover {
    background: ${(props: any) => props.isActive ? 'rgba(157, 85, 255, 0.3)' : colors.themeBackground};
    opacity: 1;
  }
  color: ${(props: any) => props.isActive ? colors.purple : colors.white};
  opacity: ${(props: any) => props.isActive ? 1 : 0.4};
`

export const ModalCard = styled.div`
  padding: 20px;
  box-shadow: 0px 3px 10px #00000033;
  border: 1px solid #FFFFFF26;
  border-radius: 30px;
  background: ${colors.themeBackground};
  margin-top: 10px;
`
export const EarnCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-top: 15px;
  button{
    margin-top: 15px;
  }
  .gamma-reward{
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 9px;
  }
`
export const ModalCardTitle = styled.p`
  font-size: 16px;
  line-height: 19px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
`
export const ModalCardTxt = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  opacity: 0.4;
`
export const UserBalTxt = styled.p`
  font-size: 16px;
  line-height: 19px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  opacity: 0.4;
`
export const ModalInputCont = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${colors.borderColor};
  border-radius: 10px;
  margin: 15px 0;
  padding: 5px 10px 5px 0;
  height: 40px;
  box-sizing: border-box;
`
export const ModalInput = styled.input`
  width: 100%;
  background: ${colors.themeBackground};
  padding: 5px 10px;
  color: ${colors.white};
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  border-radius: 10px;
  border: 0;
  box-sizing: border-box;
  outline: none;
`
export const MaxBoxZero = styled.div`
  background: #FFFFFF33;
  font-size: 11px;
  font-family: 'Montserrat', sans-serif;
  color: ${colors.white};
  padding: 8px 16px;
  border-radius: 15px;
  cursor: pointer;
  &:hover{
    background: rgba(255, 255, 255, 0.3) 0% 0% no-repeat padding-box;
  }
`
export const MaxBox = styled.div`
  background: #55B7FF33;
  font-size: 11px;
  font-family: 'Montserrat', sans-serif;
  color: ${colors.lightBlue};
  padding: 8px 16px;
  border-radius: 15px;
  cursor: pointer;
  &:hover{
    background: rgba(85, 183, 255, 0.3) 0% 0% no-repeat padding-box;
  }
`

export const DataInfoCard = styled.div`
  box-shadow: 0px 3px 10px #00000033;
  border: 1px solid #FFFFFF26;
  border-radius: 30px;
  background: ${colors.themeBackground};
  margin-top: 10px;
  &.popUpSlider{
    padding: 20px;
  }
  &.collateralCard{
    padding:20px 0 20px 20px;
    display: flex;
  }
`
export const InfoHeaderCont = styled.div<any>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  img {
    transform: ${(props: any) => (props.isActive ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: 0.3s;
    width: 14px;
    height: 9px;
  }
`
export const DataInfoTitle = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  @media (min-width: ${screenSizes.mediaM}px) {
    &.collateralText{
      margin: auto 0;
    }
  }
  
`
export const DataInfoCont = styled.div`
  padding: 0 20px 20px 20px;
  .bottom-space{
    margin-bottom: 10px;
  }
  a{
    color: ${colors.white};
  }
`
export const DataInfoTxt = styled.p<any>`
  font-size: 14px;
  line-height: 18px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  opacity: ${(props: any) => props.light ? 0.4 : 1};
`
export const HAModalTokenImg = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  @media (min-width: ${screenSizes.mediaM}px) {
    width: 120px;
    height: 120px;
  }
`
export const HAModalImgCont = styled.div`
  position: relative;
  width: 150px;
  height: 100px;
  margin-bottom: 20px;
  box-sizing: border-box;
  img{
    width: 100px;
    height: 100px;
  }
  .second-img {
    position: absolute;
    top: 0;
    left: 50px;
  }
  .third-img{
    position: absolute;
    bottom: 4px;
    right: 20px;
    width: 20px;
    height: 20px;
  }
  .minicake-img{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 16px;
    height: 16px;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    .minicake-img{
      width: 35px;
      height: 35px;
      right: 0;
    }
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    .minicake-img{
      width: 40px;
      height: 40px;
      right: 0;
    }
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    width: 180px;
    height: 120px;
    img{
      width: 120px;
      height: 120px;
    }
    .second-img {
      position: absolute;
      top: 0;
      left: 60px;
    }
  }
`
export const PoolEarningCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img{
    width: 44px;
    height: 44px;
    margin-right: 10px;
  }
  button{
    width: 104px;
    height: 47px;
    border-radius: 24px;
  }
  .earning-val{
    margin-top: 5px;
  }
`

/* ================================= HA Loading =============================== */

export const LoadingText = styled.div`
  animation: ${shimmer} 3s;
  animation-iteration-count: infinite;
  background: transparent linear-gradient(270deg, #3037da 0%, #55b7ff 100%) 0% 0% ;
  background-size: 1000px 100%;
  border-radius: 10px;
`
export const LoadingText1 = styled(LoadingText)`
  width: 80%;
  height: 19px;
  border-radius: 10px;
`
export const LoadingText2 = styled(LoadingText)`
  width: 80%;
  height: 18px;
  border-radius: 10px;
`
export const LoadingText3 = styled(LoadingText)`
  width: 30%;
  height: 19px;
  border-radius: 10px;
`
export const LoadingText4 = styled(LoadingText)`
  width: 40%;
  height: 29px;
  margin: 10px 0;
  border-radius: 20px;
`

/* ================================= HA Buttons =============================== */

export const CardBtnGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`

export const CardBtn = styled(Button)`
  background: rgba(85,183,255, 0.2);
  color: ${colors.lightBlue};
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  border-radius: 20px;
  border: 0;
  height: 45px;
  &:disabled {
    background: rgba(85,183,255, 0.2);
  }
  &:hover {
    background: rgba(85,183,255, 0.3);
  }
`
export const CardRedBtn = styled(CardBtn)`
  background: rgba(255, 85, 85, 0.2);
  color: ${colors.red};
  &:disabled {
    background: rgba(255, 85, 85, 0.2);
  }
  &:hover {
    background: rgba(255, 85, 85, 0.3);
  }
`
export const RepayCardBtn = styled(CardBtn)`
  background: rgba(157, 85, 255, 0.2);
  color: rgba(157, 85, 255,1);
  &:disabled {
    background: rgba(157, 85, 255, 0.2);
  }
  &:hover {
    background: rgba(157, 85, 255, 0.3);
  }
`
export const CardGreenBtn = styled(CardBtn)`
  background: rgba(85,254,131, 0.2);
  color: ${colors.lightGreen};
  &:disabled {
    background: rgba(85,254,131, 0.2);
  }
  &:hover {
    background: rgba(85,254,131, 0.3);
  }
`
export const TransformBtn = styled(CardBtn)`
  background: rgba(140,113,255, 0.2);
  color: #8C71FF;
  &:disabled {
    background: rgba(140,113,255, 0.2);
  }
  &:hover {
    background: rgba(140,113,255, 0.3);
  }
`

export const ConvertLpBtn = styled(CardBtn)`
  background: rgba(255,85,222, 0.2);
  color: #FF55DE;
  &:hover {
    background: #390830;
  }
  &:disabled {
    background: rgba(255,85,222, 0.2);
  }
  &:hover {
    background: rgba(255,85,222, 0.3);
  }
`

/* ========================= Transform and ConvertLp ============================ */

export const TransModalCont = styled.div`
  width: 100%;
  max-width: 450px;
  background: transparent;
  box-sizing: border-box;
  margin: 0 auto;
  @media (min-width: ${screenSizes.mediaM}px) {
    width: 600px;
    max-width: 600px;
  }
  .trans-info{
    margin-top: 15px;
  }
  .trans-icon{
    width: 18px;
    height: 18px;
    margin-left: 12px;
    cursor: pointer;
    @media (min-width: ${screenSizes.mediaM}px) {
      width: 25px;
      height: 25px;
      margin-left: 20px;
    }
  }
  .info-space{
    margin-bottom: 11px;
  }
`
export const TransCard = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 3px 10px #00000033;
  background: ${colors.themeBackground};
  border: 1px solid ${colors.borderColor};
  border-radius: 20px;
  box-sizing: border-box;
  @media (min-width: ${screenSizes.mediaM}px) {
    padding: 30px;
  }
`
export const TransTabTxt = styled.h1<any>`
  font-size: 20px;
  line-height: 24px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0 10px 0 0;
  cursor: pointer;
  opacity: ${(props: any) => props.isActive ? 1 : 0.2};
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 30px;
    line-height: 37px;
  }
`
export const InputTitle = styled.h1<any>`
  font-size: 14px;
  line-height: 18px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 20px;
    line-height: 24px;
  }
`
export const TransActionCont = styled.div`
  margin-top: 35px;
  .loading-text{
    text-align: center;
    margin: 10px 0;
  }
  .convert-lp-input{
    width: 100%;
    max-width: 34%;
    @media (min-width: ${screenSizes.mediaM}px) {
      max-width: 40%;
    }
  }
  .receive-token-card{
    margin-top: 20px;
  }
`
export const TransInputCont = styled.div`
  padding: 20px;
  border: 1px solid ${colors.borderColor};
  background: ${colors.inputBg};
  border-radius: 20px;
  box-sizing: border-box;
`
export const TransInputBox = styled.div`
  margin-top: 19px;
  .lp-token{
    font-size: 12px;
    line-height: 16px;
    @media (min-width: ${screenSizes.mediaM}px) {
      font-size: 20px;
      line-height: 24px;
    }
  }
`
export const TransInput = styled.input`
  width: 100%;
  background: transparent;
  color: ${colors.white};
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  border: none;
  box-sizing: border-box;
  outline: none;
  padding: 0;
  margin: 0;
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 20px;
  }
`
export const TokenSelectCont = styled.div`
  margin-left: 15px;
  cursor: pointer;
  .token-icon{
    width: 20px;
    height: 20px;
    margin-right: 8px;
    @media (min-width: ${screenSizes.mediaM}px) {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
  }
  .down-icon{
    width: 12px;
    height: 9px;
    margin-left: 10px;
    @media (min-width: ${screenSizes.mediaM}px) {
      width: 17px;
      height: 11px;
      margin-left: 15px;
    }
  }
`
export const LpImgGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 30px;
  height: 20px;
  margin:0 8px 0 10px;
  box-sizing: border-box;
  img{
    width:20px;
    height:20px;
    @media (min-width: ${screenSizes.mediaM}px) {
      width:30px;
      height:30px;
    }
  }
  .second-img {
    position: absolute;
    top: 0;
    left: 10px;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    margin: 0 10px 0 15px;
    width: 45px;
    height: 30px;
    .second-img {
      position: absolute;
      top: 0;
      left: 15px;
    }
  }
`
export const TokenName = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 20px;
    line-height: 24px;
  }
`
export const TransDataCont = styled.div`
  margin-top: 30px;
  .token-data{
    margin-bottom: 19px;
  }
  .icon-data{
    width: 20px;
    height: 20px;
    margin-right: 8px;
    @media (min-width: ${screenSizes.mediaM}px) {
      width: 25px;
      height: 25px;
      margin-right: 10px;
    }
  }
`
export const PriceImpactBox = styled.div`
  padding: 10px 0;
  background: #331d1d;
  margin-bottom: 16px;
  border-radius: 20px;
  margin-top: 20px;
  p{
    font-size: 12px;
    line-height: 16px;
    color: ${colors.red};
    font-family: 'Montserrat', sans-serif;
    margin:0;
    text-align: center;
    @media (min-width: ${screenSizes.mediaM}px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    margin-bottom: 20px;
  }
`
export const TwoImageCont = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 30px;
  height: 20px;
  box-sizing: border-box;
  margin-right:8px;
  img{
    width:20px;
    height:20px;
  }
  .second-img {
    position: absolute;
    top: 0;
    left: 10px;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    width: 39px;
    height: 26px;
    margin-right:10px;
    .second-img {
      position: absolute;
      top: 0;
      left: 13px;
    }
    img{
      width:26px;
      height:26px;
    }
  }
`
export const TransBalTxt = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 20px;
    line-height: 24px;
  }
`
export const TransTxt = styled.p<any>`
  font-size: 14px;
  line-height: 18px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  opacity: ${(props: any) => props.light ? 0.4 : 1};

  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 20px;
    line-height: 24px;
  }
`
export const TransInoTxt = styled.p<any>`
  font-size: 12px;
  line-height: 15px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  opacity: ${(props: any) => props.light ? 0.4 : 1};
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 16px;
    line-height: 19px;
  }
`
export const TransMaxBox = styled.div`
  font-size: 12px;
  color: ${colors.lightBlue};
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  padding: 6px 12px;
  background: #55B7FF33;
  border-radius: 11px;
  box-sizing: border-box;
  margin-left: 3px;
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 14px;
    padding: 10px 15px;
    margin-left: 10px;
  }
`

export const TransButton = styled(Button)`
  height: 49px;
  box-sizing: border-box;
  font-size: 15px;
  margin-top: 30px;
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
    font-size: 20px;
    margin-top: 60px;
  }
`
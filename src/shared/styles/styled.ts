import styled, { keyframes } from 'styled-components'
import { colors, screenSizes } from './theme'
import { Button } from 'shared/button'

export const MainContainer = styled.div`
  position: relative;
  margin-top: 70px;
  box-sizing: border-box;
  padding: 30px 16px 0 16px;
  @media (min-width: ${screenSizes.mediaM}px) {
    padding: 41px 20px 0 0;
    margin-top: 76px;
    &.lending {
      margin-top: 40px !important;
    }
  }
  @media (max-width: 799px) {
    &.lending {
      margin-top: 70px !important;
      padding: 20px 16px 0 16px !important;
    }
  }
  
  .planet-tool-tip{
    border-radius: 10px;
    max-width: 70vw;
    opacity: 1 !important;
  }
  .lending {
    margin-top: 50px !important;
  }
  .on-web{
    display: none;
  }
  .on-mob{
    display: block;
  }
  .show-web{
    display: none;
  }
  .show-mob{
    display: flex;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    .on-web{
      display: block;
    }
    .on-mob{
      display: none;
    }
    .show-web{
      display: flex;
    }
    .show-mob{
      display: none;
    }
  }
  .green-text{
    color: ${colors.lightGreen};
  }
  .blue-text{
    color: ${colors.lightBlue};
  }
  .red-text{
    color: ${colors.red};
  }
 
`
export const NormalCard = styled.div`
  background: ${colors.themeBackground};
  box-shadow: 0px 3px 10px #00000033;
  border: 1px solid ${colors.borderColor};
  border-radius: 20px;
  box-sizing: border-box;
`
export const PlanetCard = styled.div`
  background: rgba(0,0,0,0.6);
  box-shadow: 0px 3px 10px #00000033;
  border: 1px solid ${colors.borderColor};
  @media (max-width: ${screenSizes.mediaM}px) {
    border: 1.5px solid ${colors.borderColor};
  }
  border-radius: 20px;
  box-sizing: border-box;
  backdrop-filter: blur(50px);
  @supports (-moz-appearance:none) {
    background: ${colors.themeBackground};
  }
`
export const Separator = styled.div`
  height: 1px;
  width: 100%;
  border: 0;
  background: ${colors.borderColor};
`
export const PlanetBtn = styled(Button)`
  border: 0;
  color: ${colors.white};
  box-sizing: border-box;
  padding: 0;
  background: linear-gradient(270deg, ${colors.blue} 0%,${colors.lightBlue} 100%) no-repeat padding-box;
  box-shadow: 0px 3px 10px #00000033;
  &:disabled {
    background: linear-gradient(270deg, ${colors.blue} 0%,${colors.lightBlue} 100%) no-repeat padding-box;
    cursor: initial;
    opacity: 0.4;
    color: rgba(255,255,255,0.5);
  }
`
export const PlanetBrownBtn = styled(PlanetBtn)`
  margin-left: 5px;
  width: 50px;
  height: 50px;
  background: #332E11 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 10px #00000029;
  &:disabled {
    background: ${colors.grey};
  }
`
export const PlanetRedBtn = styled(PlanetBtn)`
  color: ${colors.red};
  background: ${colors.redTransBg};
  &:disabled {
    background: ${colors.redTransBg};
  }
`
export const PlanetYellowBtn = styled(PlanetBtn)`
  color: ${colors.yellow};
  background: ${colors.yellowTransBg};
  &:disabled {
    background: ${colors.yellowTransBg};
  }
`
export const CardButton = styled(Button)`
  border: 0;
  color: ${colors.lightBlue};
  box-sizing: border-box;
  padding: 0;
  background: transparent linear-gradient(270deg, rgba(48,55,218, 0.2) 0%, rgba(85,183,255, 0.2) 100%) 0% 0% no-repeat padding-box;
  &:disabled {
    background: transparent linear-gradient(270deg, rgba(48,55,218, 0.2) 0%, rgba(85,183,255, 0.2) 100%) 0% 0% no-repeat padding-box;
    cursor: initial;
    opacity: 0.6;
  }
  &:hover {
    background: transparent linear-gradient(270deg,rgba(48,55,218,0.4) 0%,rgba(85,183,255,0.26) 100%) 0% 0% no-repeat padding-box
  }
`
export const CardButton2 = styled(CardButton)`
  color: ${colors.lightGreen};
  background: transparent linear-gradient(90deg, rgba(85,255,118, 0.2) 0%, rgba(39,172,64, 0.2) 100%)  0% 0% no-repeat padding-box;
  &:disabled {
    background: transparent linear-gradient(90deg, rgba(85,255,118, 0.2) 0%, rgba(39,172,64, 0.2) 100%)  0% 0% no-repeat padding-box;
  }
  &:hover {
    background: transparent linear-gradient(90deg,rgba(85,255,118,0.4) 0%,rgba(39,172,64,0.26) 100%) 0% 0% no-repeat padding-box
  }
`
export const CardButton3 = styled(CardButton)`
  color: ${colors.white};
  background: #333333;
  &:disabled {
    background: #333333;
  }
  &:hover {
    background: #666666;
  }
`

/* ================== Flex Container ================ */

export const FlexCont = styled.div`
  display: flex;
  align-items: center;
  
  &#earnings .gammaInUSD{
    display: none;
  }
  &#earnings .inGamma{
    display: block;
  }
  &#earnings:hover .gammaInUSD{
    display: block;
  }
  &#earnings:hover .inGamma{
    display: none;
  }
  &.borrow-limit{
    width: auto;
    text-align: center;
  }
  &.netApyWeb{
    display: flex;
    justify-content: center;
  }
  &.LendingStats{
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const FlexContStake = styled.div`
  display: flex;
  align-items: right;
  position:absolute;
  right: 40px;
  top: 0px;
`
export const FlexCenterCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FlexSBCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  div.discountCard{
    display:flex;
    height:75px;
  }
  &.discountLevel{
    display: grid;
  }
  &.mobileDropdown{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    margin-left: 25%;
    margin-top: 30px;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    div.borrowLimit{
      display: flex;
    }
  }
  
`

/* =================================== Shimmer ========================== */
export const shimmer = keyframes`
  from {
    background-position: -1000px 0;
  }
  to {
    background-position: 1000px 0;
  }
`
export const AquaPrimaryBtn = styled(Button)`
  background: linear-gradient(to right, ${colors.lightBlue} 0%, ${colors.blue} 100%) no-repeat padding-box;
  position: relative;
  z-index: 1;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to left, ${colors.lightBlue} 0%, ${colors.blue} 100%) no-repeat padding-box;
    opacity: 0;
    border-radius: 20px;
    transition: all 0.5s ease-out;
    z-index: -1;
  }
  &:hover:after {
    opacity: 1;
    z-index: -1;
  }
  &:disabled {
    background: linear-gradient(to left, ${colors.lightBlue} 0%, ${colors.blue} 100%) no-repeat padding-box;
  }
`
export const AquaPriceBox = styled.a`
  background: ${colors.background};
  border: 1px solid ${colors.borderColor};
  display: flex;
  justify-content:center;
  align-items: center;
  width: 100%;
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 0px 3px 5px #00000033;
  text-decoration: none;
  cursor: pointer;
  img{
    width: 34px;
    height: 33px;
    margin-right: 10px;
  }
  p{
    font-size: 14px;
    line-height: 17px;
    color: ${colors.white};
    font-family: 'Montserrat', sans-serif;
    margin:0;
    @media (min-width: ${screenSizes.mediaM}px) {
      font-size: 16px;
      line-height: 19px;
    }
  }
`

export const MaxBtn = styled.div`
  &:hover{
    background: ${colors.blueTransHover}
  }
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  font-family: 'Montserrat', sans-serif;
  color: ${colors.lightBlue};
  text-transform: uppercase;
  cursor: pointer;
  padding: 8px 16px;
  background: ${colors.blueTransBg};
  border-radius: 11px;
  box-sizing: border-box;
`

export const MaxStakeBtn = styled.div`
  &:hover{
    background: ${colors.blueTransHover}
  }
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  font-family: 'Montserrat', sans-serif;
  color: ${colors.lightBlue};
  cursor: pointer;
  padding: 8px 16px;
  background: ${colors.blueTransBg};
  border-radius: 11px;
  box-sizing: border-box;
`

/* =========================== Tooltip ============================ */

export const ToolTipDataCont = styled.div`
  ul {
    text-align: left;
  }
  li{
    font-size: 14px;
    line-height: 24px;
    color: ${colors.white};
    font-family: 'Montserrat', sans-serif;
    margin: 0 0 5px 0;
    @media (min-width: ${screenSizes.mediaM}px) {
      font-size: 12px;
      line-height: 15px;
    }
  }
`

export const ToolTipText = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  text-align: center;
  @media (max-width: ${screenSizes.mediaM}px) {
    word-break: break-word;
  }
`
export const ToolTipIcon = styled.img<any>`
  cursor: pointer;
  margin-left: ${(props: any) => (props.left ? `${props.left}px` : '0px')};
  margin-top: ${(props: any) => (props.top ? `${props.top}px` : '0')};
  width: 14px !important;
  height: 14px !important;
  @media (min-width: ${screenSizes.mediaM}px) {
    margin-top: ${(props: any) => (props.top ? `${props.top}px` : '0')};
    &.tooltip-web{
      height:14px !important;
      width:14px !important;
    }
  }
  &.tooltip-mob{
    height:10px !important;
    width:10px !important;
  }
  &.borrowLimitIcon{
    left: 61%;
    float: left;
    top: 24px;
    position: absolute;
    margin-left: 5px;
  }
  @media not all and (min-resolution:.001dpcm) { 
    @media {
      &.borrowLimitIcon{
        left: 61%;
        float: left;
        top: -21px;
        position: relative;
        margin-left: 5px;
      }
    }
  } 
  &.maxBorrowLimitIcon{
    float: left;
    position: relative;
    margin-left: 5px;
    margin-top:4px;
  }
  &.borrowLimitWeb{
    margin-left: 73%;
    float: left;
    font-size: 18px;
    margin-top: -25px;
  }
  @media (max-width: 767px) {
    &.maxBorrowLimitIcon{
      margin-top: -13px;
    }
  }
  
`
export const ToolTipTitleCont = styled.div`
  display: flex;
  align-items: center;
`

/*  ============================ Lending ================================ */

export const ModalDataCont = styled(NormalCard)`
  padding: 20px;
  width: 100%;
  max-width: 382px;
  box-sizing: border-box;
  @media (min-width: ${screenSizes.mediaM}px) {
    padding: 30px;
    width: 477px;
    max-width: 477px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  font-family: 'Montserrat', sans-serif;
  color: ${colors.lightBlue};
  text-transform: uppercase;
  cursor: pointer;
  padding: 8px 16px;
  background: ${colors.blueTransBg};
  border-radius: 11px;
  box-sizing: border-box;
`
export const NormalBtn = styled(Button)`
  font-size: 18px;
  width: 132px;
  border-radius: 20px;
  margin-left: 30px;
  height: 48px;
  border: 0;
  background: transparent linear-gradient(90deg, rgba(85,255,118, 0.2) 0%, rgba(39,172,64, 0.2) 100%)  0% 0% no-repeat padding-box;
  color: ${colors.lightGreen};
  box-shadow: 0px 0px 10px #00000029;
  &:disabled {
    background: transparent linear-gradient(90deg, rgba(85,255,118, 0.2) 0%, rgba(39,172,64, 0.2) 100%)  0% 0% no-repeat padding-box !important;
    cursor: initial;
    opacity: 1 !important;
  }
  &:hover {
    background: transparent linear-gradient(90deg,rgba(85,255,118,0.4) 0%,rgba(39,172,64,0.26) 100%) 0% 0% no-repeat padding-box;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    height: 50px;
  }
  &.buyGammaMob{
    font-size: 12px;
    width: 67px;
    min-width: 67px;
    padding: auto;
    margin-left:0px;
    font-family: 'Montserrat', sans-serif;
    height:35px;
    margin-bottom: 20px;
    background: rgba(85, 255, 118,0.1);
  }
  &.vaultEarnings{
    font-size: 12px;
    width: 67px;
    min-width: 67px;
    padding: auto;
    margin-left:0px;
    font-family: 'Montserrat', sans-serif;
    height:35px;
    margin-bottom: 20px;
    background: rgba(85, 255, 118,0.1);
  }
`
export const PrimaryBtn = styled(Button)`
background: transparent linear-gradient(270deg, ${colors.lightGreen} 0%, ${colors.green} 100%) 0% 0% no-repeat padding-box;
  position: relative;
  z-index: 1;
  box-shadow: 0px 0px 20px #27AC40;
  border: 0;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: transparent linear-gradient(90deg, ${colors.lightGreen} 0%, ${colors.green} 100%) 0% 0% no-repeat padding-box;
    opacity: 0;
    border-radius: 20px;
    transition: all 0.5s ease-out;
    z-index: -1;
  }
  &:hover:after {
    opacity: 1;
    z-index: -1;
  }
  &:disabled {
    opacity:0.2;
    background: transparent linear-gradient(90deg, ${colors.lightGreen} 0%, ${colors.green} 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 10px #00000033;
  }
`
/* ===============================================Shimmer========================================== */

export const LoadingText = styled.div`
  animation: ${shimmer} 3s;
  animation-iteration-count: infinite;
  background: transparent linear-gradient(270deg, ${colors.green} 0%, ${colors.lightGreen} 100%) 0% 0% ;
  background-size: 1000px 100%;
  border-radius: 10px;
`
export const LoadingText1 = styled(LoadingText) <any>`
  width: ${(props: any) => props.width ? `${props.width}%` : '30%'};
  height: 14px;
  margin-top: ${(props: any) => props.top ? `${props.top}px` : 0};
  margin-bottom: ${(props: any) => props.bottom ? `${props.bottom}px` : 0};
  margin-left: ${(props: any) => props.left ? `${props.left}px` : 0};
  @media (min-width: ${screenSizes.mediaXLL}px) {
    height: 16px;
  }
`
export const LoadingText2 = styled(LoadingText) <any>`
  width: ${(props: any) => props.width ? `${props.width}%` : '50%'};
  height: 20px;
  margin-top: ${(props: any) => props.top ? `${props.top}px` : 0};
  margin-bottom: ${(props: any) => props.bottom ? `${props.bottom}px` : 0};
  @media (min-width: ${screenSizes.mediaM}px) {
    height: 16px;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    height: 18px;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    height: 20px;
  }
`
export const LoadingText3 = styled(LoadingText) <any>`
  width: ${(props: any) => props.width ? `${props.width}%` : '50%'};
  height: 24px;
  margin-top: ${(props: any) => props.top ? `${props.top}px` : 0};
  margin-bottom: ${(props: any) => props.bottom ? `${props.bottom}px` : 0};
  @media (min-width: ${screenSizes.mediaM}px) {
    height: 18px;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    height: 20px;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    height: 22px;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    height: 24px;
  }
`
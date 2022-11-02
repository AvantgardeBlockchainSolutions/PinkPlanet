import styled from 'styled-components'
import { colors, screenSizes } from 'shared/styles/theme'

export const ModalCont = styled.div`
  @media (max-width: 800px) {
    &.tooltip-container{
      padding: 50px 0 15px 0 !important;
    }
  }
  padding: 20px 0 10px 0;
  width: 100%;
  box-shadow: 0px 3px 10px #00000033;
  background: ${colors.themeBackground};
  border: 1px solid ${colors.borderColor};
  border-radius: 20px;
  box-sizing: border-box;
  @media (min-width: ${screenSizes.mediaM}px) {
    padding: 30px 0 0 0;
    width: 477px;
    max-width: 477px;
    &.tooltip-container{
      padding: 50px 0 15px 0;
      width: 415px;
    }
  }
  
`
export const FlexSBCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.btnContainer{
    margin: 70px 30px 25px 30px;
  }
`
export const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div.circleOne{
    height: 160px;
    width: 160px;
    background: #55B7FF33 0% 0% no-repeat padding-box;
    border-radius: 160px;
    -webkit-transition: color 0.5s linear, background-color 0.5s linear;
    -moz-transition: color 0.5s linear, background-color 0.5s linear;
    transition: color 0.5s linear, background-color 0.5s linear;
    margin-left: 10%;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
    filter: alpha(opacity=50);
    z-index: 2;
    position: relative;
    margin-left: -80px;
  }
  div.circleTwo{
    height: 160px;
    width: 160px;
    background: #55FF7633 0% 0% no-repeat padding-box;
    border-radius: 160px;
    -webkit-transition: color 0.5s linear, background-color 0.5s linear;
    -moz-transition: color 0.5s linear, background-color 0.5s linear;
    transition: color 0.5s linear, background-color 0.5s linear;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
    filter: alpha(opacity=50);
    z-index: 3;
    position: absolute;
    
  }
  &.tooltip-logo{
    margin: auto;
  }

  @media (max-width: 768}px) {
    &.tooltip-logo{
      padding-top: 30px !important;
      width: 415px;
    }
  }
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
    &.title{
      margin-top: 50px;
      margin-left: auto;
      font-size: 24px;
      font-family: 'Montserrat', sans-serif;
      text-align: center;
    }
  }
  @media (max-width: 800px) {
    &.title{
      margin-top: 30px;
      margin-left: auto;
      font-size: 20px;
      font-family: 'Montserrat', sans-serif;
      text-align: center;
    }
  }
`

export const Button = styled.div`
  &.apyCapsule{
    color: ${colors.green};
    padding: 7px 15px 7px 15px;
    text-align: center;
    border-radius: 30px;
    box-shadow: 0px 0px 10px #00000029;
    background:  'rgba(255, 85, 85, 0.1) 0% 0% no-repeat padding-box' ;
    font-family: 'Montserrat', sans-serif;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    &.btnCapsule{
      color:  ${colors.lightBlue};
      padding: 15px 30px 15px 30px;
      text-align: center;
      border-radius: 30px;
      width: fit-content;
      align-items: flex-end;
      float: right;
      margin: 0px;
      box-shadow: 0px 0px 10px #00000029;
      background:'rgba(255, 85, 85, 0.1) 0% 0% no-repeat padding-box';
      font-family: 'Montserrat', sans-serif;
      width: -webkit-fill-available;
    }
    &.learnMore{
      color:  ${colors.lightBlue};
      background: #55B7FF32 0% 0% no-repeat padding-box;
      margin-right: 10px;
      font-size: 18px;
      cursor: pointer;
    }
    &.close{
      color:  ${colors.lightGreen};
      background: #55FF7632 0% 0% no-repeat padding-box;
      font-size: 18px;
      cursor: pointer;
    }
  }
  @media (max-width: 800px) {
    &.btnCapsule{
      color:  ${colors.lightBlue};
      padding: 15px 30px 15px 30px;
      text-align: center;
      border-radius: 30px;
      width: fit-content;
      align-items: flex-end;
      float: right;
      margin: 0px;
      box-shadow: 0px 0px 10px #00000029;
      background:'rgba(255, 85, 85, 0.1) 0% 0% no-repeat padding-box';
      font-family: 'Montserrat', sans-serif;
      width: -webkit-fill-available;
    }
    &.learnMore{
      color:  ${colors.lightBlue};
      background: #55B7FF32 0% 0% no-repeat padding-box;
      margin-right: 10px;
      font-size: 14px;
    }
    &.close{
      color:  ${colors.lightGreen};
      background: #55FF7632 0% 0% no-repeat padding-box;
      font-size: 14px;
    }
  }
`

export const MessageText = styled.h1`
  font-size: 14px;
  line-height: 24px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  opacity: 0.4;
  text-align: center;
  @media (min-width: ${screenSizes.mediaM}px) {
    margin: 20px 70px;
  }
  @media (max-width: 800px) {
    margin: 20px 50px;
  }
`

export const TokenSelectTxt = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 20px;
    line-height: 25px;
  }
`
export const TokenSelectSubTxt = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 3px 0 0 0;
  opacity:0.4;
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 16px;
    line-height: 20px;
  }
`
export const TokenValCont = styled.div`
  text-align: right;
`
export const TokenListCont = styled.div`
  .select-token-icon {
    width: 30px;
    height: 30px;
    margin-right: 15px;
    @media (min-width: ${screenSizes.mediaM}px) {
      width: 50px;
      height: 50px;
    }
  }

  .cross-icon {
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
`
export const TokenHeader = styled.div`
  padding: 0 20px;
  @media (min-width: ${screenSizes.mediaM}px) {
    padding: 0 30px;
  }
`

export const TokenListInput = styled.input`
  width: 100%;
  padding: 20px 30px;
  font-size: 14px;
  line-height: 18px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  background: ${colors.themeBackground};
  border: 1px solid ${colors.borderColor};
  border-radius: 20px;
  margin-top: 20px;
  box-sizing: border-box;
  outline: none;
  @media (min-width: ${screenSizes.mediaXS}px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 20px;
    line-height: 25px;
  }
`
export const TokenListData = styled.div`
  height: 100%;
  max-height: 450px;
  overflow: auto;
  box-sizing: border-box;
  margin-top: 30px;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  
  @media (min-width: ${screenSizes.mediaM}px) {
    -ms-overflow-style: block;
    &::-webkit-scrollbar {
      width: 10px;
      display: block;
    }
    /* Track */
    &::-webkit-scrollbar-track {
      background:${colors.themeBackground};
      border:1px solid ${colors.borderColor};
      border-radius: 10px;
    }
     
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, ${colors.lightBlue} 0%, ${colors.blue} 100%) no-repeat padding-box;
      border-radius: 10px;
    }
  }
`
export const NoDataAvailable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:40px;
  p {
    font-size: 16px;
    line-height: 20px;
    color: ${colors.white};
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }
`

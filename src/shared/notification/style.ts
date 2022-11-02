import styled, { keyframes } from 'styled-components'
import { colors, screenSizes } from 'shared/styles/theme'

export const NotificationCont = styled.div`
  position: fixed;
  top: 80px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999999;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (min-width: ${screenSizes.mediaM}px) {
    justify-content: flex-end;
  }
`
export const notificationAnimate = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`
export const notificationMAnimate = keyframes`
  from {
    transform: translateY(-100px);
  }
  to {
    transform: translateX(0);
  }
`

export const NotificationCard = styled.div`
  padding: 16px;
  position: relative;
  background: ${colors.themeBackground};
  border: 1px solid ${colors.borderColor};
  border-radius: 20px;
  box-shadow: 0px 3px 10px #00000033;
  width: 100%;
  max-width: 300px;
  margin-right: 0;
  animation: ${notificationMAnimate} .6s ease;
  @media (min-width: ${screenSizes.mediaM}px) {
    padding: 20px;
    max-width:400px;
    animation: ${notificationAnimate} .6s ease;
    margin-right: 50px;
  }
`
export const CloseSym = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  @media (min-width: ${screenSizes.mediaM}px) {
    top: 20px;
    right: 20px;
  }
`
export const NotificationInfo = styled.div`
  display: flex;
  align-items: center;
`
export const StatusSym = styled.img`
  width: 30px;
  height: 30px;
  margin-right:16px;
  @media (min-width: ${screenSizes.mediaM}px) {
    width: 50px;
    height: 50px;
    margin-right:20px;
  }
`

export const Title = styled.h1`
 font-size: 14px;
 line-height: 18px;
 color: ${colors.white};
 font-family: 'Montserrat', sans-serif;
 margin:0;
 @media (min-width: ${screenSizes.mediaM}px) {
  font-size: 16px;
  line-height: 20px;
 }
`
export const Info = styled.p`
 font-size: 14px;
 line-height: 18px;
 color: ${colors.white};
 font-family: 'Montserrat', sans-serif;
 margin:5px 0;
 @media (min-width: ${screenSizes.mediaM}px) {
  font-size: 16px;
  line-height: 20px;
}
`
export const ChainLink = styled.a<any>`
 font-size: 14px;
 line-height: 18px;
 color: ${(props: any) => props.type ? colors.lightGreen : colors.red};
 font-family: 'Montserrat', sans-serif;
 margin:0;
 text-decoration: none;
 @media (min-width: ${screenSizes.mediaM}px) {
  font-size: 16px;
  line-height: 20px;
}
`
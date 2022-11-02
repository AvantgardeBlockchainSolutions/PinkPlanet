import styled from 'styled-components'
import { colors, screenSizes } from 'shared/styles/theme'
import { Button } from 'shared/button'

export const WalletContainer = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 382px;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: ${colors.themeBackground};
  border:1px solid ${colors.borderColor};
  box-shadow: 0px 3px 10px #00000033;
  @media (min-width: ${screenSizes.mediaM}px) {
    width: 577px;
    max-width: 577px;
    padding: 30px;
  }
`
export const WalletHeader = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:30px;
  img {
    cursor: pointer;
    width:20px;
    height:20px;
  }
`
export const WalletTitle = styled.h1`
  font-size: 24px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  text-align: center;
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 30px;
  }
`
export const WalletCont = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:10px 16px;
  margin-bottom:20px;
  cursor:pointer;
  background-color: ${colors.inputBg};
  border-radius: 20px;
  box-sizing:border-box;
  height: 70px;
  box-shadow: 0px 3px 10px #00000033;
  border:1px solid ${colors.borderColor};
  img{
    width:30px;
    height:30px;
    @media (min-width: ${screenSizes.mediaM}px) {
      width:50px;
      height:50px;
    }
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    padding:25px 30px;
    height: 80px;
  }
`
export const WalletName = styled.p`
  font-size: 20px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 24px;
  }
`
/* =============================== Wallet Logout Style =========================== */

export const WalletLogoutCont = styled.div`
  padding: 30px 30px 20px 30px;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 1px solid ${colors.borderColor};
  background: ${colors.black};
`
export const LogoutTitle = styled.h1`
  font-size: 20px;
  line-height: 24px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  text-align: left;
`
export const AddressText = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 30px 0;
  text-align: left;
  word-break: break-all;
  @media (min-width: 400px) {
    font-size: 14px;
    line-height: 18px;
  }
`
export const LogoutBtn = styled(Button)`
  background: ${colors.redBackground};
  color: ${colors.red};
  font-size: 14px;
`

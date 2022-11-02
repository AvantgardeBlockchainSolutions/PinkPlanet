import styled from 'styled-components'
import { colors, screenSizes } from 'shared/styles/theme'
import { CardBText } from 'shared/styles/globalText'
import { PlanetCard } from 'shared/styles/styled'
import { LoadingText } from 'shared/styles/planetTableStyle'


/* ========================== Projection style =========================== */

export const ProjectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`
export const ProjectionCont = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  border-radius: 30px;
  border: 1px solid ${colors.borderColor};
  padding: 2px;
  margin-top: 30px;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  @media (min-width: ${screenSizes.mediaM}px) {
    max-width: 400px;
  }
`
export const ProjectionTab = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props: any) => props.isActive ? 'transparent linear-gradient(270deg, rgba(48,55,218, 0.2) 0%, rgba(85,183,255, 0.2) 100%) 0% 0% no-repeat padding-box' : "transparent"};
  padding: 10px 15px;
  font-size: 15px;
  border-radius: 30px;
  color: ${(props: any) => props.isActive ? colors.lightBlue : colors.white};
  font-family: 'Montserrat', sans-serif;
  opacity: ${(props: any) => props.isActive ? 1 : 0.2};
  cursor: ${(props: any) => props.isActive ? 'initial' : 'pointer'};
  &:hover {
    background: ${(props: any) => props.isActive ? 'transparent linear-gradient(270deg,rgba(48,55,218,0.4) 0%,rgba(85,183,255,0.26) 100%) 0% 0% no-repeat padding-box' : "transparent"};
  }
  &:hover{
    opacity: 1;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 12px;
    padding: 10px 12px;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    font-size: 14px;
    padding: 10px 16px;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    font-size: 14px;
    padding: 10px 20px;
  }
  @media (min-width: ${screenSizes.mediaXXXX}px) {
    font-size: 15px;
    padding: 10px 24px;
  }
`
export const ProjectionValCont = styled.div`
  font-size: 24px;
  line-height: 29px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 10px 0 0 0;
  @media (min-width: ${screenSizes.mediaM}px) {
    margin: 20px 0 0 0;
    font-size: 24px;
    line-height: 29px;
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    font-size: 28px;
    line-height: 35px;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    font-size: 30px;
    line-height: 37px;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    font-size: 40px;
    line-height: 49px;
  }
`
export const ProjLoading = styled(LoadingText)`
  width: 80%;
  height: 24px;
  margin-top: 10px;
  @media (min-width: ${screenSizes.mediaM}px) {
    margin-top: 20px;
    height: 24px;
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    height: 28px;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    height: 30px;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    height: 40px;
  }
`

/* ========================== Planet token style ======================= */

export const PlanetTokenCont = styled.div`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  box-sizing: border-box;
  grid-gap: 15px;
  margin-top: 15px;
  @media (min-width: ${screenSizes.mediaM}px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 40px;
    grid-gap: 20px;
  }
`
export const TokenCard = styled(PlanetCard)`
  padding: 30px;
`
export const TokenValText = styled(CardBText)`
  margin-top: 10px;
`
export const TokenTypeText = styled.p<any>`
  font-size: 16px;
  line-height: 19px;
  color: ${(props: any) => props.type === 'aqua' ? colors.lightBlue : colors.lightGreen};
  font-family: 'Montserrat', sans-serif;
  margin: 10px 0 0 0;
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 20px;
    line-height: 24px;
    margin: 20px 0 0 0;
  }
`
export const TokenInfoCont = styled.div`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  grid-row-gap: 20px;
  grid-column-gap: 0;
  margin: 20px 0;
  img{
    width: 60px;
    height: 60px;
    margin-right: 15px;
    @media (min-width: ${screenSizes.mediaM}px) {
      width: 50px;
      height: 50px;
    }
    @media (min-width: ${screenSizes.mediaXLL}px) {
      width: 70px;
      height: 70px;
      margin-right: 17px;
    }
    @media (min-width: ${screenSizes.mediaXXL}px) {
      width: 80px;
      height: 80px;
      margin-right: 19px;
    }
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    grid-template-columns: 1.5fr 1fr;
    margin: 32px 0 40px 0;
    grid-row-gap: 40px;
    grid-column-gap: 10px;
  }
`
export const TokenBtnGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  grid-gap: 15px;
  button{
    height: 50px !important;
    font-size: 17px;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    grid-template-columns: 162px 192px;
    grid-gap: 10px;
  }
  a{
    text-decoration: none;
  }
`

/* ================================== Planet News ================================ */

export const NewsWrapper = styled(PlanetCard)`
  margin-top: 15px;
  padding: 20px;
  @media (min-width: ${screenSizes.mediaM}px) {
    margin-top: 40px;
    padding: 30px;
  }
`

export const NewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  margin-top: 20px;
  box-sizing: border-box;
  @media (min-width: ${screenSizes.mediaM}px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 30px;
  }
  img{
    width: 100%;
    height: 265px;
    margin-left: 0;
    margin-bottom: 20px;
    @media (min-width: ${screenSizes.mediaM}px) {
      width: 182px;
      height: 186px;
      margin-left: 20px;
      margin-bottom: 0;
    }
  }
  button{
    width: 100%;
    height: 50px !important;
    font-size: 17px;
    @media (min-width: ${screenSizes.mediaM}px) {
      max-width: 170px;
    }
  }
  .news-info{
    margin: 15px 0 38px 0;
    @media (min-width: ${screenSizes.mediaM}px) {
      margin: 10px 0 20px 0;
    }
  }
`
export const NewsDataCard = styled.div`
  background: rgba(0,0,0,0.2);
  box-shadow: 0px 3px 10px #00000033;
  border: 1px solid ${colors.borderColor};
  border-radius: 20px;
  padding: 20px 40px;
  box-sizing: border-box;
  backdrop-filter: blur(50px);
  @supports (-moz-appearance:none) {
    background: ${colors.themeBackground};
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    padding: 30px;
  }
`
export const NewsContent = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${screenSizes.mediaM}px) {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
`
export const NewsTitle = styled.h1`
  font-size: 18px;
  line-height: 22px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  @media (min-width: ${screenSizes.mediaM}px) {
     font-size: 18px;
     line-height: 22px;
   }
   @media (min-width: ${screenSizes.mediaXLL}px) {
     font-size: 20px;
     line-height: 24px;
   }
   @media (min-width: ${screenSizes.mediaXXL}px) {
     font-size: 24px;
     line-height: 29px;
   }
`
/* ======================= Planet Actions ======================== */

export const PlanetActionCont = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-gap: 10px;
  margin-top: 15px;
  @media (min-width: ${screenSizes.mediaM}px) {
    grid-gap: 20px;
    margin-top: 40px;
    grid-template-columns: repeat(4,1fr);
  }
  a{
    text-decoration: none;
    color: inherit;
  }
`
export const PlanetActionCard = styled(PlanetCard)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 22px 28px 15px 28px;
  cursor: pointer;
  min-height: 186px;
  transition: 0.3s all;
  height: 100%;
  @media (min-width: ${screenSizes.mediaS}px) {
    padding: 18px 20px 18px 20px;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    padding: 18px 20px 18px 20px;
  }  
  &:hover{
    background: #050505;
    //box-shadow: 0px -5px 30px rgba(48,140,218, 0.2);
    box-shadow: 0px 4px 31px rgb(48 140 218 / 30% );
    -webkit-transition : box-shadow ease-in-out .01s;
    transition : box-shadow ease-in-out .01s;
  }
  img{
      margin-bottom: 22px;
      width: auto;
      height: 60px;
      margin-bottom: 22px;
      @media (min-width: 300px) {
        height: 80px;
        margin-bottom: 22px;
      }
      @media (min-width: ${screenSizes.mediaS}px) {
        height: 100px;
        margin-bottom: 22px;
      }
      @media (min-width: ${screenSizes.mediaM}px) {
        height: 100px;
        margin-bottom: 44px;
      }
      @media (min-width: ${screenSizes.mediaXL}px) {
        height: 120px;
      }
      @media (min-width: ${screenSizes.mediaXLL}px) {
        height: 150px;
      }
      @media (min-width: ${screenSizes.mediaXXL}px) {
        height: 160px;
      }
      @media (min-width: ${screenSizes.mediaXXXX}px) {
        height: 200px;
      }
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    padding: 40px 30px 30px 30px;
  }
`
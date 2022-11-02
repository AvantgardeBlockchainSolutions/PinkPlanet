import styled from 'styled-components'
import { colors, screenSizes } from 'shared/styles/theme'
import { PlanetCard, shimmer } from 'shared/styles/styled'
import { Button } from 'shared/button'

export const TableWrapper = styled.div`
`
export const TableCont = styled.div`
  margin-top: 20px;
  @media (min-width: ${screenSizes.mediaM}px) {
    margin-top: 30px;
  } 
`
export const DataCont = styled.div`
  margin-top: 30px;
  @media (min-width: ${screenSizes.mediaM}px) {
    margin-top: 40px;
  } 
  .my-asset{
    margin-bottom: 20px;
    @media (min-width: ${screenSizes.mediaM}px) {
      margin-bottom: 10px;
    }
  }
`
export const Table = styled.div<any>`
  border-top: none;
  @media (min-width: ${screenSizes.mediaM}px) {
    border-top: ${(props: any) => props.isBorderDisable ? 'none' : `1px solid ${colors.borderColor}`};
  }
  a {
    color: ${colors.white};
  }
  @media (min-width: 800px) {
    &.show-mob{
      display: none;
    }

  }
  @media (max-width: 799px) {
    &.show-mob{
      display: block;
    }

  }
`
export const TableTitle = styled.h1`
  font-size: 24px;
  line-height: 29px;
  font-family: 'Montserrat', sans-serif;
  color: ${colors.white};
  margin: 0 0 20px 0;
  @media (min-width: ${screenSizes.mediaM}px) {
    margin: 0 0 30px 0;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    font-size: 30px;
    line-height: 37px;
  }
`
export const BoostedCont = styled.div`
  margin-top: 30px;
  @media (min-width: ${screenSizes.mediaM}px) {
    margin-top: 40px;
  }
`
export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 0.8fr 1fr 16px;
  grid-gap: 0;
  padding: 0 16px 20px 16px;
  @media (min-width: 380px) {
    padding: 0 20px 20px 20px;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    padding: 20px;
    grid-template-columns: 70px 1.5fr 1fr 1fr 1fr 1fr 25px;
    grid-gap: 5px;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    grid-template-columns: 80px 1.5fr 1fr 1fr 1fr 1fr 25px;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    grid-template-columns: 100px 1.5fr 1fr 1fr 1fr 1fr 25px;
  }
`
export const TableBody = styled.div` 
  display: none;
  @media (min-width: ${screenSizes.mediaM}px) {
    display: block;
  }
`
export const MobTableBody = styled.div`
  display: block;
  @media (min-width: ${screenSizes.mediaM}px) {
    display: none;
  }
`
export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 0.8fr 1fr 16px;
  grid-gap: 0;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  @media (min-width: ${screenSizes.mediaM}px) {
    grid-template-columns: 70px 1.5fr 1fr 1fr 1fr 1fr 25px;
    grid-gap: 5px;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    grid-template-columns: 80px 1.5fr 1fr 1fr 1fr 1fr 25px;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    grid-template-columns: 100px 1.5fr 1fr 1fr 1fr 1fr 25px;
  }
  &.supplyTableRowMob{
    grid-template-columns: 1.7fr 1fr 1.2fr 16px;
  }
`
export const TableRowCont = styled(PlanetCard) <any>`
  padding: 16px; 
  border: 1px solid ${colors.borderColor};
  border-radius: 30px;
  margin-bottom: 10px;
  &:hover{
    background: #050505;
    box-shadow: 0px 4px 31px rgb(48 140 218 / 30%);
  }
  &:last-child{
    margin-bottom: 0;
  }
  @media (min-width: 380px) {
    padding: 20px;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    padding: 20px;
    border-radius: 20px;
  }
   @media (min-width: ${screenSizes.mediaXLL}px) {
    padding: 23px 30px;
  }
    
`
export const CellCont = styled.div`
  img{
      width: 30px;
      height: 30px;
      @media (min-width: ${screenSizes.mediaM}px) {
        width: 40px;
        height: 40px;
      } 
      @media (min-width: ${screenSizes.mediaXLL}px) {
        width: 50px;
        height: 50px;
      } 
  }
  .reward-text{
    color: ${colors.lightGreen};
  }
  &.supplyTableRowMob{
    display: flex;
    align-items: center;
  }
  &.supplyTableMarketIcon{
    float: left;
  }
  img.supplyTableMarketIcon{
    height: 36px;
    width: 36px;
    float: left;
  }
  div.supplyTableMarketText{
    margin-left: 15px;
  }
  div.supplyText{
    float: left;
  }
  img.downGreyIcon{
    height: 13px;
  }
`
export const HeadTextCont = styled.div`
  display: flex;
  align-items: center;
  &.supplyHeader{
    display: block;
  }
  &.earn_assets{
    display: flex;
  }
`
export const HeadTextData = styled.div<any>`
  display: flex;
  align-items: center;
  cursor: pointer;
  img{
    width: 8px;
    height: 16px;
    margin-left: 5px;
    transform: ${(props: any) => (props.isDown ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
  &.lendingSupply{
    display: block;
    float: right;
  }
  @media (max-width: ${screenSizes.mediaM}px) {
    img.lendingSupply{
      top: 0px !important;
      transform: none !important;
      height:11px !important;
      width: 6px !important;
      transform: ${(props: any) => (props.isDown ? 'rotate(180deg)' : 'rotate(0deg)')};
    }
  }
  img.lendingSupply{
    transform: ${(props: any) => (props.isDown ? 'rotate(180deg)' : 'rotate(0deg)')};
    top: 50%;
    margin-top:5px;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    img.lendingSupply{
      width: 6px;
      height: 12px;
    }
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    img.lendingSupply{
      width: 7px;
      height: 14px;
    }
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    img.lendingSupply{
      width: 8px;
      height: 16px;
    }
  }
`
export const HeadText = styled.p`
  font-size: 14px;
  line-height: 17px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  opacity: 0.4;
  margin: 0;
  &:hover{
    opacity: 1;
  }
  @media (min-width: ${screenSizes.mediaXS}px) {
    font-size: 16px;
    line-height: 19px;
    &.lendingSupply{
      font-size: 12px;
    }
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 14px;
    line-height: 18px;
    font-family: 'Montserrat', sans-serif;
    &.lendingSupply{
      font-size: 14px;
      line-height: 18px;
    }
    &.earn_assets{
      display: flex;
    }
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    font-size: 18px;
    line-height: 22px;
    &.lendingSupply{
      font-size: 18px;
      line-height: 22px;
    }
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    font-size: 20px;
    line-height: 24px;
    &.lendingSupply{
      font-size: 20px;
    line-height: 24px;
    }
  }
  &.lendingSupply{
    font-size: 16px;
    color: #FFFFFF;
    opacity: 0.4;
    float: left;
  }
  @media (max-width: ${screenSizes.mediaM}px) {
    &.lendingSupply{
      font-size: 12px;
    }
    &img.lendingSupply{
      height: 12px;
    }
  }
  img.lendingSupply{
    margin-top: 4px;
  }
  @media (max-width: ${screenSizes.mediaM}px) {
    img.lendingSupply{
      height:11px !important;
      width: 6px !important;
      margin-top: 4px;
    }
  }
`
export const CellText = styled.p<any>`
  font-size: 12px;
  line-height: 15px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  opacity: ${(props: any) => props.isValZero ? 0.4 : 1};
  @media (min-width: ${screenSizes.mediaXS}px) {
    font-size: 14px;
    line-height: 17px;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 14px;
    line-height: 18px;
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    font-size: 20px;
    line-height: 25px;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    font-size: 24px;
    line-height: 29px;
  }
  &.apyText{
    margin: 0 auto;
    text-align: center;
    color: ${(props: any) => props.isNegative ? colors.red : colors.lightGreen};
  }
  &.apyTextWhite{
    margin: 0 auto;
    text-align: left;
    color: ${(props: any) => props.isNegative ? colors.red : colors.white};
  }
`
export const CellSmText = styled.p<any>`
  font-size: 13px;
  line-height: 16px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  opacity: 0.4;
  margin: 3px 0 0 0;
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 14px;
    line-height: 18px;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    font-size: 15px;
    line-height: 19px;
  }
`
export const ArrowIconCont = styled.div<any>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  img{
    width: 12.55px;
    height: 8px;
    transform: ${(props: any) => (props.isActive ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: 0.3s;
    opacity: 0.4;
    @media (min-width: ${screenSizes.mediaM}px) {
      width: 16px;
      height: 10px;
      opacity: 1;
    }
    @media (min-width: ${screenSizes.mediaXLL}px) {
      width: 20px;
      height: 12px;
      opacity: 1;
    }
    @media (min-width: ${screenSizes.mediaXXL}px) {
      width: 23.53px;
      height: 15px;
      opacity: 1;
    }
  }
`
export const MobArrowIconCont = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  img{
    width: 12.55px;
    height: 8px;
    transform: rotate(270deg);
    opacity: 0.4;
  }
`
export const ExpandedCell = styled.div`
  padding: 20px;
  border-radius: 20px;
  border: 1px solid ${colors.borderColor};
  background: rgba(0,0,0,0.4);
  box-shadow: 0px 3px 10px #00000033;
`
export const ExpendCellTitle = styled.p<any>`
  font-size: 16px;
  line-height: 20px;
  font-family: 'Montserrat', sans-serif;
  color: ${colors.white};
  margin: 0;
  opacity: ${(props: any) => props.light ? 0.4 : 1};
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 12px;
    line-height: 18px;
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    font-size: 18px;
    line-height: 22px;
  }
`
export const EarningCont = styled.div<any>`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  grid-gap: 5px;
  @media (min-width: ${screenSizes.mediaM}px) {
    grid-template-columns:${(props: any) => props.isBoostPool ? '1fr 1fr' : '1fr'};
  }
  .claim-btn{
    height: 40px;
    font-size: 16px;
    @media (min-width: ${screenSizes.mediaM}px) {
      font-size: 12px;
    }
  }
`
export const ClaimTxt = styled.p<any>`
  font-size: 14px;
  line-height: 18px;
  font-family: 'Montserrat', sans-serif;
  color: ${(props: any) => (props.tokenType ? colors.lightGreen : colors.white)};
  opacity: ${(props: any) => (props.light ? 0.4 : 1)};

  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 12px;
    line-height: 16px;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    font-size: 14px;
    line-height: 18px;
  }
`
export const CellBtnGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  .a{
    text-decoration: none;
  }
`

/*  ========================= Table Transaction ===================== */

export const VaultActionRow = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  margin-top: 30px;
  @media (min-width: ${screenSizes.mediaM}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
`
export const PoolActionRow = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  margin-top: 30px;
  .item1 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .item2 {
    grid-area: 3 / 1 / 4 / 2;
  }
  .item3 {
    grid-area: 1 / 1 / 2 / 2;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    grid-template-columns: 1.5fr 1.5fr 1fr;
    grid-gap: 20px;
    .item1 {
      grid-area: 1 / 1 / 2 / 2;
    }
    .item2 {
      grid-area: 1 / 2 / 2 / 3;
    }
    .item3 {
      grid-area: 1 / 3 / 2 / 4;
    }
  }
`

/* ========================== Table input =========================== */

export const TableInputCont = styled.div`
  position: relative;
  margin: 1rem 0;
`
export const TableInput = styled.input`
  width: 100%;
  height: 40px;
  background: rgba(0,0,0,0.4);
  padding: 10px;
  color: ${colors.white};
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid ${colors.borderColor};
  box-sizing: border-box;
  outline: none;
`
/*
export const MaxTxt = styled.span`
  position: absolute;
  top: 10px;
  right: 16px;
  font-size: 16px;
  line-height: 20px;
  font-family: 'Montserrat', sans-serif;
  color: ${colors.lightBlue};
  text-transform: uppercase;
  cursor: pointer;
`
*/

export const MaxTxt = styled.span`
  position: absolute;
  top: 4px;
  right: 16px;
  padding: 8px 16px 8px 16px;
  border-radius: 11px;
  background: #55B7FF33 0% 0% no-repeat padding-box;
  font-size: 11px;
  line-height: 14px;
  font-family: 'Montserrat', sans-serif;
  color: ${colors.lightBlue};
  text-transform: uppercase;
  cursor: pointer;
  &:hover{
    background: rgba(85, 183, 255, 0.3) 0% 0% no-repeat padding-box;
  }
  // @media (min-width: ${screenSizes.mediaM}px) {
  //   font-size: 20px;
  //   line-height: 25px;
  // }
`
export const MaxTxtZero = styled.span`
  position: absolute;
  top: 4px;
  right: 16px;
  padding: 8px 16px 8px 16px;
  border-radius: 11px;
  background: #FFFFFF33 0% 0% no-repeat padding-box;
  font-size: 11px;
  line-height: 14px;
  font-family: 'Montserrat', sans-serif;
  color: ${colors.white};
  text-transform: uppercase;
  cursor: pointer;
  &:hover{
    background: rgba(255, 255, 255, 0.3) 0% 0% no-repeat padding-box;
  }
  // @media (min-width: ${screenSizes.mediaM}px) {
  //   font-size: 20px;
  //   line-height: 25px;
  // }
`
/*  ========================= Table Info ============================ */

export const TableInfoRows = styled.div`
  display: grid;
  width: 100%;
  box-sizing: border-box;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  align-items:flex-start;
  margin-top: 10px;
  .item1 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .item2 {
    grid-area: 3 / 1 / 4 / 2;
    margin-bottom: 10px;
  }
  .item3 {
    grid-area: 1 / 1 / 2 / 2;
  }

  @media (min-width: ${screenSizes.mediaM}px) {
    grid-template-columns: 1.5fr 1.5fr 2fr;
    margin-top: 20px;
    .item1 {
      grid-area: 1 / 1 / 2 / 2;
    }
    .item2 {
      grid-area: 1 / 2 / 2 / 3;
      margin-bottom: 0;
    }
    .item3 {
      grid-area: 1 / 3 / 2 / 4;
    }
  }
`
export const TableInfoBox = styled.div`
  margin-top: 16px;
`
export const TableInfoTxt = styled.p<any>`
  font-size: 13px;
  line-height: 17px;
  font-family: 'Montserrat', sans-serif;
  color: ${colors.white};
  opacity: ${(props: any) => (props.light ? 0.4 : 1)};
  margin: 0 0 10px 0;
`
export const CellDownIcon = styled.div<any>`
  img {
    transform: ${(props: any) => (props.activeStatus ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: 0.3s;
    width: 13px;
    height: 8px;
  }
`

/* ============================== Table Button =============================== */

export const TableBtn = styled(Button)`
  background: rgba(85,255,118, 0.2);
  color: ${colors.lightGreen};
  font-size: 15px;
  border-radius: 10px;
  transition: 0.5s;
  border: 0;
  &:hover {
    background: rgba(85,255,118, 0.3);
  }
  &:disabled {
    background: rgba(85,255,118, 0.2);
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 12px;
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    font-size: 14px;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    font-size: 16px;
  }
`
export const DepositBtn = styled(TableBtn)`
background: #55B7FF33;
color: #55B7FF;
&:hover {
  background: ${colors.blueTransHover};
}
&:disabled {
  background: #55B7FF33;
}
`
export const WithdrawBtn = styled(TableBtn)`
  background: ${colors.redBackground};
  color: ${colors.red};
  &:hover {
    background: ${colors.redTransHover};
  }
  &:disabled {
    background: ${colors.redBackground};
  }
`
export const TransformBtn = styled(TableBtn)`
  background: rgba(140,113,255, 0.2);
  color: #8C71FF;
  &:hover {
    background: rgba(140,113,255, 0.3);
  }
  &:disabled {
    background: rgba(140,113,255, 0.2);
  }
`
export const ConvertLpBtn = styled(TableBtn)`
  background: #FF55DE33;
  color: #FF55DE;
  &:hover {
    background: #390830;
  }
  &:disabled {
    background: rgba(255,85,222, 0.2);
  }
`
/* ====================== Two Img ===================== */

export const TwoImgCont = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 45px;
  height: 30px;
  box-sizing: border-box;
  .second-img {
    position: absolute;
    top: 0;
    left: 15px;
  }
  .third-img{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 16px;
    height: 16px;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    width: 60px;
    height: 40px;
    .second-img {
      position: absolute;
      top: 0;
      left: 20px;
    }
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    width: 75px;
    height: 50px;
    .second-img {
      position: absolute;
      top: 0;
      left: 25px;
    }
  }
`
/* ========================== Table search input & Drop box ===================== */

export const TableSearchCont = styled.div`
  display: none;
  align-items: center;
  flex-direction: row-reverse;
  margin-bottom: 20px;
  @media (min-width: ${screenSizes.mediaM}px) {
    flex-direction: row;
    margin-bottom: 0;
    display: flex;
  }
`
export const TableProtoCalCont = styled.div`
  width: 120px;
  height: 31px;
  box-sizing: border-box;
  margin-right: 10px;
  @media (min-width: ${screenSizes.mediaM}px) {
    width: 130px;
    height: 43px;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    width: 150px;
  }
`
export const TableSearchInputCont = styled.div`
  width: 100%;
  max-width: 100%;
  height: 31px;
  box-sizing: border-box;
  margin: 0 10px 0 0;
  @media (min-width: ${screenSizes.mediaM}px) {
    max-width: 186px;
    height: 43px;
    margin: 0 0 0 10px;
  }
`
export const TableSearchInput = styled.input`
  width: 100%;
  background: rgba(0,0,0,0.4);
  padding: 6px 18px;
  color: ${colors.white};
  font-size: 15px;
  border-radius: 100px;
  border: 1px solid ${colors.borderColor};
  box-shadow: 0px 3px 10px #00000033;
  box-sizing: border-box;
  outline: none;
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 19px;
    padding: 10px 20px;
  }
  backdrop-filter: blur(50px);
  @supports (-moz-appearance:none) {
    background: ${colors.themeBackground};
  }
`

/* ============================== Table Shimmer Effect ============================= */

export const ShimmerCont = styled.div`
  .animate {
    animation: ${shimmer} 3s;
    animation-iteration-count: infinite;
    // background: linear-gradient(to right, #e6e6e6 5%, #cccccc 25%, #e6e6e6 35%);
    background: transparent linear-gradient(270deg, #3037da 0%, #55b7ff 100%) 0% 0% ;
    // background: linear-gradient(to right, #e6e6e6 0%, #cccccc 100%) 0% 0% ;
    background-size: 1000px 100%;
  }
`
export const ShimmerBox = styled.div`
  .bottom-space{
    margin-bottom:10px;
  }
`
export const ShimmerCircle = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  @media (min-width: ${screenSizes.mediaM}px) {
    width: 40px;
    height: 40px;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    width: 50px;
    height: 50px;
  }
`
export const ShimmerLine = styled.div`
  width: 80%;
  height: 12px;
  border-radius: 10px;
  margin-bottom: 5px;
  @media (min-width: ${screenSizes.mediaXS}px) {
    height: 14px;
  }
  @media (min-width: ${screenSizes.mediaS}px) {
    height: 16px;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    height: 18px;
    width: 60%;
    margin-bottom:10px;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    height: 24px;
  }
`
export const ShimmerSubLine = styled.div`
  width: 80%;
  height: 11px;
  border-radius: 10px;
  @media (min-width: ${screenSizes.mediaXS}px) {
    height: 13px;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    height: 14px;
    width: 60%;
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    height: 15px;
  }
`
export const LoadingText = styled.div`
  animation: ${shimmer} 3s;
  animation-iteration-count: infinite;
  background: transparent linear-gradient(270deg, #3037da 0%, #55b7ff 100%) 0% 0% ;
  background-size: 1000px 100%;
  border-radius: 10px;
`
export const LoadingText1 = styled(LoadingText)`
  width: 80%;
  height: 12px;
  border-radius: 10px;
  margin-bottom: 5px;
  @media (min-width: ${screenSizes.mediaXS}px) {
    height: 14px;
  }
  @media (min-width: ${screenSizes.mediaS}px) {
    height: 16px;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    height: 18px;
    width: 60%;
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    height: 20px;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    height: 24px;
  }
`
export const LoadingText2 = styled(LoadingText)`
  width: 80%;
  height: 10px;
  border-radius: 10px;
  @media (min-width: ${screenSizes.mediaXS}px) {
    height: 12px;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    height: 14px;
    width: 60%;
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    height: 15px;
  }
`
export const LoadingText3 = styled(LoadingText)`
  width: 30%;
  height: 12px;
  border-radius: 10px;
  margin-bottom: 5px;
  @media (min-width: ${screenSizes.mediaXS}px) {
    height: 14px;
  }
  @media (min-width: ${screenSizes.mediaS}px) {
    height: 16px;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    height: 18px;
    width: 30%;
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    height: 20px;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    height: 24px;
  }
`
export const LoadingText4 = styled(LoadingText)`
  width: 120px;
  height: 16px;
  margin-top: 5px;
  @media (min-width: ${screenSizes.mediaM}px) {
    margin-top: 0px
    width: 110px;
  }
`
export const ClaimLoading1 = styled(LoadingText)`
  width: 25%;
  height: 10px;
  border-radius: 10px;
  margin: 16px 0;
  @media (min-width: ${screenSizes.mediaXS}px) {
    height: 12px;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    height: 14px;
    width: 60%;
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    height: 15px;
  }
`
export const ClaimLoading2 = styled(LoadingText)`
  width: 25%;
  height: 10px;
  border-radius: 10px;
  margin-bottom: 16px;
  @media (min-width: ${screenSizes.mediaXS}px) {
    height: 12px;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    height: 14px;
    width: 60%;
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    height: 15px;
  }
`
import styled, { css } from 'styled-components'
import { colors, screenSizes } from 'shared/styles/theme'
import { PlanetCard } from 'shared/styles/styled'

export const DropDownHeader = styled(PlanetCard) <any>`
  padding: 6px 15px;
  border-radius: 100px;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${screenSizes.mediaM}px) {
    padding: 10px 20px;
  }
  img{
    width: 10.98px;
    height: 7px;
    margin-left: 10px;
    transform: ${(props: any) => (props.isActive ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: 0.3s;
    @media (min-width: ${screenSizes.mediaM}px) {
      width: 14.12px;
      height: 9px;
    }
  }
  img.GreyDownIcon{
    height: 9px;
    width: 14.2px;
  }
  &:hover {
    background: ${(props: any) => props.iconColor === 'grey' ? '#141414' : 'inherit'};
 }
`
export const DropDownListContainer = styled.div`
  height: 0;
  position: absolute;
  overflow: hidden;
  opacity: 0;
  width: 100%;
  z-index: 999;
`
export const DropDownContNEW = styled.div<any>`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  ${(props: any) =>
    props.isOpen &&
    css`
      ${DropDownListContainer} {
        height: auto;
        opacity: 1;
        top: 0px;
        left: 0;
        @media (min-width: ${screenSizes.mediaM}px) {
            top: 0px;
          }
      }
   `}
`
export const DropDownCont = styled.div<any>`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  ${(props: any) =>
    props.isOpen &&
    css`
      ${DropDownListContainer} {
        height: auto;
        opacity: 1;
        top: 36px;
        left: 0;
        @media (min-width: ${screenSizes.mediaM}px) {
            top: 50px;
          }
      }
   `}
`

export const DropDownList = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.borderColor};
  border-radius: 10px;
  background: ${colors.themeBackground};
  box-shadow: 0px 3px 10px #00000033;
  box-sizing: border-box;
`
export const ItemText = styled.p`
  font-size: 14px;
  line-height: 17px;
  font-family: 'Montserrat', sans-serif;
  color: ${colors.white};
  margin: 0;
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (min-width: ${screenSizes.mediaXLL}px) {
    font-size: 19px;
    line-height: 23px;
  }

`
export const ListItem = styled.div`
  padding: 10px 0 0 15px;
  opacity: 0.4;
  cursor: pointer;
  &:hover{
    opacity: 1;
  }
  &:last-child{
    padding-bottom: 10px;
  }
  @media (min-width: ${screenSizes.mediaM}px) {
    padding: 10px 0 0 20px;
  }
`
export const ListItemText = styled.p`
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  color: ${colors.white};
  margin: 0;
  @media (min-width: ${screenSizes.mediaM}px) {
    font-size: 16px;
  }
`
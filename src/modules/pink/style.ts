import styled from 'styled-components'
import { colors, screenSizes } from 'shared/styles/theme'
import { NormalBtn } from 'shared/styles/styled'
import { Button } from 'shared/button'
import { PlanetCard } from 'shared/styles/styled'

export const WebBlock = styled.div`
  display: none;
  @media (min-width: ${screenSizes.mediaM}px) {
    display: block;
  }
`
export const PinkContainer = styled.div`
  position: relative;
  .title-info {
    margin-top: 10px;
    font-weight:500 !important;
    @media (min-width: ${screenSizes.mediaM}px) {
      margin-top: 20px;
    }
  }
  .val-space {
    margin-top: 10px;
  }
`
export const HeaderTxt = styled.p`
  font-size: 12px;
  line-height: 16px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  opacity: 0.4;
`

export const PinkHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const TagBoxes = styled.div.attrs({
  className: 'tagboxes',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 28px;
  padding: 3px 20px;
  height:36px;
  #stars {
    opacity: 1;
  }
  svg {
    margin-right: 10px;
    filter: drop-shadow(0px 0px 6px #ff55de);
    path {
      fill: #ff55de;
    }
  }
`

export const DisplayHeadings = styled.div<{ font?: number }>`
  font-size: ${(props) => (props.font ? `${props.font}px` : '30px')};
  font-weight: 700;
  margin: 0;
  padding: 20px 0;
  border-bottom: 2px solid rgba(255,255,255,0.15);
  position: relative;
  margin: 30px 0;
  &::before {
    position: absolute;
    content: '';
    bottom: -2px;
    left: 0;
    z-index: 0;
    background: #ff55de;
    height: 2px;
    width: 100px;
  }
`
/*  ========================= ToolTip Style ========================= */

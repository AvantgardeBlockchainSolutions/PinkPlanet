import styled from 'styled-components'
import { colors, screenSizes } from 'shared/styles/theme'

export const HoverInfoCont = styled.div`
  .planet-tool-tip{
    max-width: 250px;
    opacity: 1 !important;
    background: ${colors.themeBackground};
    padding: 30px 10px;
    border: 2px solid ${colors.lightBlue};
    border-radius: 20px;

    @media (min-width: ${screenSizes.mediaM}px) {
      max-width: 280px;
    }
  }
`
export const ToolTipLevelCont = styled.div`
  li{
    font-size: 10px;
    line-height: 13px;
    color: ${colors.white};
    font-family: 'Montserrat', sans-serif;
    margin: 0 0 5px 0;
    @media (min-width: ${screenSizes.mediaM}px) {
      font-size: 12px;
      line-height: 15px;
    }
  }
`
export const HoverInfoTxtNew = styled.p`
  font-size: 12px;
  line-height: 15px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  text-align: left;
  margin-left: 7px;
`
export const HoverInfoTxt = styled.p`
  font-size: 12px;
  line-height: 15px;
  color: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  text-align: left;  
`
/**  word-break: break-all;
 */

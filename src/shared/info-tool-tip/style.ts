import styled from 'styled-components'
import { screenSizes } from 'shared/styles/theme'

export const ToolTipIcon = styled.img<any>`
  margin-left: ${(props: any) => (props.left ? `${props.left}px` : '0px')};
  margin-top: ${(props: any) => (props.top ? `${props.top}px` : '0')};
  width: 14px !important;
  height: 14px !important;
  @media (min-width: ${screenSizes.mediaM}px) {
    width: 18px !important;
    height: 18px !important;
    margin-top: ${(props: any) => (props.top ? `${props.top}px` : '0')};
  }
`
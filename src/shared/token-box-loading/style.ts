import styled from 'styled-components'
import { colors, screenSizes } from 'shared/styles/theme'
import { shimmer } from 'shared/styles/styled'

export const LoadingTokenCont = styled.div`
  .animate {
    animation: ${shimmer} 3s;
    animation-iteration-count: infinite;
    background: transparent linear-gradient(270deg, #3037da 0%, #55b7ff 100%) 0% 0% ;
    background-size: 1000px 100%;
  }
`
export const LoadingTokenBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: ${colors.themeBackground};
  border-radius: 30px;
  border: 1px solid ${colors.borderColor};
  box-sizing: border-box;
  @media (min-width: ${screenSizes.mediaM}px) {
    padding: 16px;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    padding: 20px;
  }
`
export const LoadingCircle = styled.div`
  border-radius: 50%;
  width: 44px;
  height: 44px;
`
export const LoadingLine1 = styled.div`
  width: 100%;
  border-radius: 10px;
  height: 15px;
  margin: 10px 0 5px 0;
`
export const LoadingLine2 = styled(LoadingLine1)`
  height: 18px;
  margin: 0;
`

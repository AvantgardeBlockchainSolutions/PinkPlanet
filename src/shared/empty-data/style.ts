import styled from 'styled-components'
import { colors } from 'shared/styles/theme'

export const EmptyDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 50px;
  h1 {
    font-size: 24px;
    line-height: 30px;
    margin: 10px 0;
    color: ${colors.white};
    font-family: 'Montserrat', sans-serif;
  }
  img {
    width: 100px;
    height: 100px;
  }
`

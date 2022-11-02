import emptyDataImg from 'assets/icons/blue-icon.svg'
import { EmptyDataWrapper } from './style'

const EmptyData = () => {
  return (
    <EmptyDataWrapper>
      <img src={emptyDataImg} alt="No Data Here" />
      <h1>No Data Available</h1>
    </EmptyDataWrapper>
  )
}

export default EmptyData

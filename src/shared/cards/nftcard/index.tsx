import { useEffect, useMemo, useState } from 'react'
// import BoltIcon from '@mui/icons-material/Bolt'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import styled from 'styled-components'
import { CardsMain } from '../style'
import { BoltIcon, GreenNftCard } from 'assets/tsicons'
import { Button } from '@mui/material'
import history from 'modules/app/components/history'
import { Paths } from 'modules/app/components/routes/types'

interface Props {
  preview?: boolean,
  src?:string,
  explorepage?:boolean,
}

const NftCard: React.FC<Props> = (props) => {
  const { preview ,src,explorepage} = props
  const [heartactive, setHeartactive] = useState(false)

  return ( 
    <CardsMain onClick={() => history.push(`${Paths.pinkasset}`)}>
      <CardOuter className={`${explorepage ? "isexplore":""}`}>
        <div className="coversqr">
        <img src={src?src:require('../../../assets/images/pink/NFTs/1.png').default} className="cover" alt="" />
        </div>
        <CardInfo>
          <div className="profilebx">
            <img src={require('../../../assets/images/pink/Profile/pink.png').default} alt="" />
          </div>
          <div className="topvalue">
            <h1>Aquanaut #101</h1>
            {!preview ? (
              <div className="morehoriz">
                <MoreHorizIcon style={{ color: '#fff' }} />
              </div>
            ) : null}
          </div>
          <div className="id">@theaquanauts</div>
          <div className="btmvalue">
            <div className="value">
              {!preview ? <img src={require('../../../assets/images/pink/diamond-green.png').default} alt="" /> : <img src={require('../../../assets/images/pink/pink_currency.png').default} alt="" />}
              2,956
              <span>($657.29)</span>
            </div>
            {!preview ? (
              <div className="bolt">
                {/* <BoltIcon style={{ color: '#FF55DE' }} /> */}
                <BoltIcon/>
              </div>
            ) : null}
          </div>
  {
    explorepage?   <StyledButton variant="contained" fullWidth>
    Buy Now
        </StyledButton>:null
  }
       
        </CardInfo>
      </CardOuter>
    </CardsMain>
  )
}
const StyledButton = styled(Button)`
  width: 100%;
  background: linear-gradient(to right, #ff55de, #55b7ff) !important;
  color: #fff !important;
  margin-top:20px !important;
  display:none !important;
`
const CardInfo = styled.div`
  padding: 20px;
  padding-top: 0;
  background:#000;
  
  .profilebx {
    img {
      height: 38px;
      width: auto;
      border-radius: 50%;
      transform: translateY(-50%);
      margin-bottom: -10px;
      filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));
    }
  }
  .topvalue {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 16px;
    font-weight: bold;
    h1 {
      font-size: 22px;
      font-weight: bold;
      margin: 0;
    }
    .morehoriz {
      border: 2px solid rgba(255, 255, 255, 0.15);
      border-radius: 50%;
      height: 32px;
      width: 32px;
      display: flex;
      align-items: Center;
      justify-content: Center;
      cursor: pointer;
    }
  }
  .id {
    opacity: 0.4;
    font-size: 19px;
    font-weight: bold;
    margin: 14px 0;
  }
  .btmvalue {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 16px;
    font-weight: bold;
    .value {
      display: flex;
      align-items: center;
      img {
        height: 24px;
        width: 24px;
        margin-right: 6px;
      }
    }
    span {
      color: #666666;
      margin-left: 5px;
    }
    .bolt {
      height: 32px;
      width: 32px;
      display: flex;
      align-items: Center;
      justify-content: Center;
    }
  }
`
const CardOuter = styled.div`
  position: relative;
  background: #000000;
  z-index: 1;
  
  .coversqr{
    position:relative;
    padding-top:100%;
    width:100%;
  }
  .cover {
    width: 100%;
    position:absolute;
    top:0;
    left:0;
    height:100%;
    object-fit:cover;
  }
  &.isexplore{
    &:hover{
      .coversqr{
        padding-top:calc(100% - 68px);
      }
      
       ${StyledButton}{
         display:block !important;
       }
     }
  }
  
`

const Section = styled.section``

export default NftCard

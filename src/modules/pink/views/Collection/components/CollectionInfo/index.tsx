import { DisplayHeadings } from 'modules/pink/style'
import { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Grid'
import NftCard from 'shared/cards/nftcard'
import Button from '@mui/material/Button';
import BGIMG from '../../../../../../assets/images/pink/ProfilePage/cover.png'
import { CopyIcon } from 'assets/tsicons'
import history from 'modules/app/components/history'
import { Paths } from 'modules/app/components/routes/types'

interface Props {}

const CollectionInfo: React.FC<Props> = (props) => {
  const {} = props

  return (
    <ComponentOuter>
      <Banner>
        <Content>
          <img src={require('../../../../../../assets/images/pink/Profile/1.png').default} className="profile" alt="" />
          <h2>Arthur Curry</h2>
          <h5>@arthurcurry</h5>
          <div className="address">
            <img src={require('../../../../../../assets/images/pink/ProfilePage/ylwicn.png').default} alt="" />
           <div className="txt"> 0x8y…9ou</div>
            <CopyIcon />
          </div>
        </Content>
      </Banner>
      <div className="bottom">
        <div className="flwfling">
          <div className="inf">
            259 <span>Followers</span>
          </div>
          <div className="inf">
            107 <span>Following</span>
          </div>
        </div>
        <Button variant='contained' className="editbtn" onClick={() => history.push(`${Paths.pinkProfileedit}`)}>Edit</Button>
      </div>
    </ComponentOuter>
  )
}

const ComponentOuter = styled.div`
  text-align: Center;
  .bottom {
    .flwfling {
      display: flex;
      align-items: Center;
      justify-content: Center;
      .inf {
        font-weight: bold;
        font-size: 20px;
        margin: 0 20px;
        span {
          opacity: 0.4;
          margin-left: 10px;
        }
      }
    }
    .editbtn{
      margin-top:30px;
    }
  }
`
const Content = styled.div`
  .profile {
    width: 100px;
  }
  h2 {
    margin: 0;
  }
  h5 {
    margin: 0;
    color: #ff55de;
    font-size: 18px;
  }
  .address{
    background:#000;
    display:flex;
    align-items:center;
    justify-content:center;
    width:fit-content;
    padding:8px 24px;
    border-radius:50px;
    border:2px solid #707070;
    margin:0px auto;
    transform:translateY(50%); 
    margin-top:-8px;
    img{
      height:20px;
    }
    .txt{
      margin:0 8px;
    }
    svg{
      cursor:pointer;
    }
  }
`
const Banner = styled.div`
  background: url('${BGIMG}');
  background-size: cover;
  background-position: Center center;
  border-radius: 20px;
  min-height: 300px;
  display:flex;
  align-items:flex-end;
  justify-content:Center;
  margin-bottom:38px;
`

export default CollectionInfo

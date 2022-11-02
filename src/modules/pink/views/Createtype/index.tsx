import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { TitleText, TitleInfo, CardTitle, CardText, CardSubText } from 'shared/styles/globalText'
import { DisplayHeadings, PinkHeader } from 'modules/pink/style'
import { Button, Input } from '@mui/material'

import { Grid } from '@mui/material'
import { CreateIcon, FixedpriceIcon, OpenBidsIcon, TimeauctionIcon } from 'assets/tsicons'
import history from 'modules/app/components/history'
import { Paths } from 'modules/app/components/routes/types'

const Createtype = () => {
  const [marketplacetab, setMarketplacetab] = useState(1)

  return (
    <Page>
      <PinkHeader>
        <div>
          <TitleText>Choose type</TitleText>
          <TitleInfo className="title-info">Stay up-to-date on all of your activity on Pink Planet</TitleInfo>
        </div>
      </PinkHeader>

      <Content>
        {/* <DisplayHeadings className="displayheading">Personal</DisplayHeadings> */}
        <Grid container spacing={2} className="editpagegrid">
          <Grid item xs={12} md={12} lg={12}>
            <TextBox className="marketplaceblock">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <div className={`marketblockouter`} onClick={() => history.push(`${Paths.pinkcreatenftsingle}`)}>
                    <div className="marketblock">
                      <div className="ic">
                        <img src={require('assets/single.png').default} alt="" />
                      </div>

                      <div className="mktcontent">
                        <Heading>Single NFT</Heading>
                        <TextBoxSmall>Create a one-of-a-kind asset</TextBoxSmall>
                      </div>
                    </div>
                  </div>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <div className={` marketblockouter`} onClick={() => history.push(`${Paths.pinkcreatenftmultiple}`)}>
                    <div className="marketblock">
                      <div className="ic">
                        <img src={require('assets/multiple.png').default} alt="" />
                      </div>
                      <div className="mktcontent">
                        <Heading>Multiple</Heading>
                        <TextBoxSmall>Create a multiple assets within the same collection</TextBoxSmall>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </TextBox>
          </Grid>
        </Grid>
      </Content>
    </Page>
  )
}

const Page = styled.div`
  color: #fff;
  .editpagegrid {
    // @media (max-width:1200px){
    //   flex-direction:column-reverse;
    // }
  }
`
const Heading = styled.div``
const TextBoxSmall = styled.div`
  color: rgba(255, 255, 255, 0.4);
  font-size: 16px;
  margin-top: 12px;
  max-width: 260px;
  span {
    color: #fff;
  }
`
const TextBox = styled.div`
  margin-bottom: 32px;
  ${Heading} {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 14px;
  }
  &.marketplaceblock {
    ${TextBoxSmall} {
      margin-top: 0;
      margin-bottom: 18px;
    }
    ${Heading} {
      // display: flex;
      // align-items: center;
      // justify-content: Space-between;
    }

    .marketblockouter {
      border: 2px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0px 3px 10px rgba(255, 255, 255, 0.16);
      background: #000;
      border-radius: 14px;
      position: relative;
      padding-top: 100%;
      cursor: pointer;

      &.active {
        border-color: #ff55de;
      }
    }
    .marketblock {
      position: absolute;
      width: fit-content;
      top: 50%;
      left: 50%;
      transform: Translate(-50%, -50%);
      .ic {
        display: flex;
        justify-content: center;
        img {
          height: 100px;
          width: Auto;
        }
      }
      .mktcontent {
        text-align: center;
        margin-top: 30px;
      }
    }
  }
`

const Content = styled.div`
  margin-top: 40px;
  .displayheading {
    font-size: 20px;
  }
`

export default Createtype
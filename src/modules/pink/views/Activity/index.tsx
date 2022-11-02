import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { TitleText, TitleInfo, CardTitle, CardText, CardSubText } from 'shared/styles/globalText'
import { DisplayHeadings, PinkHeader, TagBoxes } from 'modules/pink/style'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Grid } from '@mui/material'
import { ActivityMobileIcon, BoltIcon, HeartIcon, PlusIcon, RectangleIcon, TagIcon } from 'assets/tsicons'

const Activity = () => {
  const [value, setValue] = React.useState('1')
  const [placebid, setPlacebid] = React.useState(true)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <Page>
      <PinkHeader>
        <div>
          <TitleText>Activity</TitleText>
          <TitleInfo className="title-info">Stay up-to-date on all of your activity on Pink Planet</TitleInfo>
        </div>
      </PinkHeader>

      <Content>
        <TabContext value={value}>
          <TabsBox>
            <TabList onChange={handleChange} aria-label="activity">
              <Tab label="All Activity" value="1" />
              <Tab label="My Bids" value="2" />
            </TabList>
            <TabContent>
              <TabUpper>
                <TabPanel value="1">
                  <BoxOne>
                    <TagHead>
                      <TagBoxes>
                        <ActivityMobileIcon />
                        Mint
                      </TagBoxes>
                      <TagBoxes>
                        <RectangleIcon />
                        Purchase
                      </TagBoxes>
                      <TagBoxes>
                        <TagIcon />
                        Sales
                      </TagBoxes>

                      <TagBoxes>
                        <HeartIcon />
                        Likes
                      </TagBoxes>

                      <TagBoxes>
                        <PlusIcon />
                        Following
                      </TagBoxes>
                    </TagHead>
                    <BoxList>
                      <BoxContent>
                        <div className="leftbx">
                          <img src={require('assets/images/pink/NFTs/1.png').default} alt="" />
                        </div>
                        <div className="rightbx">
                          <h2>Spectrum #771</h2>
                          <div className="mro">
                            <div>Minted</div>
                            <div>1 min ago</div>
                          </div>
                        </div>
                      </BoxContent>

                      <BoxContent>
                        <div className="leftbx">
                          <img src={require('assets/images/pink/NFTs/1.png').default} alt="" />
                        </div>
                        <div className="rightbx">
                          <h2>Spectrum #771</h2>
                          <div className="mro">
                            <div>Minted</div>
                            <div>1 min ago</div>
                          </div>
                        </div>
                      </BoxContent>
                      <BoxContent>
                        <div className="leftbx">
                          <img src={require('assets/images/pink/NFTs/1.png').default} alt="" />
                        </div>
                        <div className="rightbx">
                          <h2>Spectrum #771</h2>
                          <div className="mro">
                            <div>Minted</div>
                            <div>1 min ago</div>
                          </div>
                        </div>
                      </BoxContent>
                      <BoxContent>
                        <div className="leftbx">
                          <img src={require('assets/images/pink/NFTs/1.png').default} alt="" />
                        </div>
                        <div className="rightbx">
                          <h2>Spectrum #771</h2>
                          <div className="mro">
                            <div>Minted</div>
                            <div>1 min ago</div>
                          </div>
                        </div>
                      </BoxContent>
                      <BoxContent>
                        <div className="leftbx">
                          <img src={require('assets/images/pink/NFTs/1.png').default} alt="" />
                        </div>
                        <div className="rightbx">
                          <h2>Spectrum #771</h2>
                          <div className="mro">
                            <div>Minted</div>
                            <div>1 min ago</div>
                          </div>
                        </div>
                      </BoxContent>
                    </BoxList>
                  </BoxOne>
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
              </TabUpper>
            </TabContent>
          </TabsBox>
        </TabContext>
      </Content>
    </Page>
  )
}

const TabsBox = styled.div`
  .MuiTabs-root {
    margin-top: 34px;
    margin-bottom: 24px;
  }
  .MuiTabs-flexContainer {
    border-bottom: 2px solid rgba(255,255,255,0.15);

    .MuiTab-root {
      font-weight: bold;
      color: #fff;
      font-size: 20px;
      padding: 16px 0;
      margin-right: 24px;
      text-transform: capitalize;
      &.Mui-selected {
        color: #ff55de;
      }
    }
  }
  .MuiTabs-indicator {
    background-color: #ff55de !important;
  }
  .MuiTabPanel-root {
    padding-right: 0;
    padding-left: 0;
    padding-top: 0;
  }
`

const BoxOne = styled.div``
const TagHead = styled.div`
display: flex;
flex-flow:Wrap;
margin-bottom:20px;
.tagboxes{
  margin-right:14px;
  margin-bottom:14px;
}
`
const BoxList = styled.div``
const BoxContent = styled.div`
  display: flex;
  align-items: Center;
  border: 2px solid rgba(255,255,255,0.15);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
  background: #000;
  &:last-child {
    margin-bottom: 0;
  }
  .leftbx {
    img {
      width: 76px;
      height: 76px;
      object-fit: cover;
      border-radius: 10px;
    }
  }
  .rightbx {
    width: calc(100% - 76px);
    padding-left: 20px;
    h2 {
      margin: 0;
      font-size: 20px;
      margin-bottom: 10px;
    }
    .mro {
      display: flex;
      align-items: center;
      justify-content: space-between;
      opacity: 0.4;
      font-size: 16px;
    }
  }
`
const TabContent = styled.div`
max-width:768px;`

const TabUpper = styled.div`
  color: #fff;
`

const Page = styled.div`
  color: #fff;
  .editpagegrid {
  }
`

const Content = styled.div`
  margin-top: 40px;
 
  .displayheading {
    font-size: 20px;
  }
`

export default Activity

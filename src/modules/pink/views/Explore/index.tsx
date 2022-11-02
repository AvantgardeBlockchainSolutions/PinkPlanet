import React, { useState } from 'react'
import styled from 'styled-components'
import { TitleText, TitleInfo, CardTitle, CardText, CardSubText } from 'shared/styles/globalText'
import { PinkHeader } from 'modules/pink/style'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Sidebar from './Sidebar'
import { Grid } from '@mui/material'
import NFTtab from './components/NFTtab'
import Profiletab from './components/Profiletab'
import Collectiontab from './components/Collectiontab'

const Explore = () => {
  const [value, setValue] = React.useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  const tab1 = () => {
    return (
      <div>
        NFTs <span>136,905</span>
      </div>
    )
  }

  const tab2 = () => {
    return (
      <div>
        Profiles <span>39,041</span>
      </div>
    )
  }

  const tab3 = () => {
    return (
      <div>
        Collections <span>19,506</span>
      </div>
    )
  }
  return (
    <Page>
      <PinkHeader>
        <div>
          <TitleText>Explore</TitleText>
          <TitleInfo className="title-info">Discover unique NFTs across the galaxy</TitleInfo>
        </div>
      </PinkHeader>

      <Content>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {/* <TabOuter>
              
            
             </TabOuter> */}
              <Tab label="NFTs" value="1" />
              <Tab label="Profiles" value="2" />
              <Tab label="Collections" value="3" />
            </TabList>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Sidebar activetab={value}/>
            </Grid>
            <Grid item sm={9}>
              <TabPanel value="1">
                <NFTtab />
              </TabPanel>
              <TabPanel value="2"><Profiletab/></TabPanel>
              <TabPanel value="3"><Collectiontab/></TabPanel>
            </Grid>
          </Grid>
        </TabContext>
      </Content>
    </Page>
  )
}

const Page = styled.div`
  color: #fff;
`
const TabOuter = styled.div``
const RightContent = styled.div``

const Content = styled.div`
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
`

export default Explore

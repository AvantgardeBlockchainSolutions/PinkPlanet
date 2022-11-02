import React, { useState } from 'react'
import styled from 'styled-components'
import { TitleText, TitleInfo, CardTitle, CardText, CardSubText } from 'shared/styles/globalText'
import { PinkHeader } from 'modules/pink/style'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Grid } from '@mui/material'
import NFTtab from './components/NFTtab'
import CollectionInfo from './components/CollectionInfo'

const Collection = () => {
  const [value, setValue] = React.useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Page>
      <CollectionInfo/>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} centered aria-label="lab API tabs example">
            <Tab label="Items" value="1" />
            <Tab label="Activity" value="2" />
          </TabList>
        </Box>

        <ProfileBtm>
          <TabPanel value="1">
            <NFTtab />
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
        </ProfileBtm>
      </TabContext>
    </Page>
  )
}

const Page = styled.div`
  color: #fff;
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
      text-transform:capitalize;
      &.Mui-selected {
        color: #ff55de;
      }
      &:last-child{
        margin-right: 0px;
      }
    }
  }
  .MuiTabs-indicator {
    background-color: #ff55de !important;
  }
`
const LeftContent = styled.div``
const RightContent = styled.div``

const ProfileBtm = styled.div`
  
`

export default Collection

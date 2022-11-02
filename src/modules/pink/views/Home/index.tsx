import React, { useState } from 'react'
import styled from 'styled-components'
import { TitleText, TitleInfo, CardTitle, CardText, CardSubText } from 'shared/styles/globalText'
import { PinkHeader } from 'modules/pink/style'
import Collections from './components/Collections'
import TrendingNFT from './components/TrendingNFT'
import TrendingCreators from './components/TrendingCreators'

const Home = () => {
  return (
    <Page>
      <PinkHeader>
        <div>
          <TitleText>Home</TitleText>
          <TitleInfo className="title-info">A unique marketplace giving artists the space to create</TitleInfo>
        </div>
      </PinkHeader>
      <Collections/>
      <TrendingCreators/>
      <TrendingNFT/>
      
    </Page>
  )
}

const Page = styled.div`
  color:#fff;
`

export default Home

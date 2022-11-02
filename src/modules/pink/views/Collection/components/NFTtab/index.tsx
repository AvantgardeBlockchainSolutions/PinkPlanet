import { DisplayHeadings } from 'modules/pink/style'
import { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Grid'
import NftCard from 'shared/cards/nftcard'

interface Props {}

const NFTtab: React.FC<Props> = (props) => {
  const {} = props

  return (
    <ComponentOuter>
      <Content>
        <Grid container spacing={2}>
          {
            [0,1,2,3,4,5,6,7,8].map((index)=> <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <NftCard />
          </Grid>)
          }
        </Grid>
      </Content>
    </ComponentOuter>
  )
}

const ComponentOuter = styled.div``
const Content = styled.div``

export default NFTtab

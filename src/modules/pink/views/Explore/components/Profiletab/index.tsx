import { DisplayHeadings } from 'modules/pink/style'
import { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Grid'
import CreatorsCard from 'shared/cards/creatorscard'


interface Props {}

const Profiletab: React.FC<Props> = (props) => {
  const {} = props

  return (
    <ComponentOuter>
      <Content>
        <Grid container spacing={2}>
          <Grid item sm={4}>
            <CreatorsCard />
          </Grid>
          <Grid item sm={4}>
            <CreatorsCard />
          </Grid>
          <Grid item sm={4}>
            <CreatorsCard />
          </Grid>
          <Grid item sm={4}>
            <CreatorsCard />
          </Grid>
          <Grid item sm={4}>
            <CreatorsCard />
          </Grid>
          <Grid item sm={4}>
            <CreatorsCard />
          </Grid>
          <Grid item sm={4}>
            <CreatorsCard />
          </Grid>
          <Grid item sm={4}>
            <CreatorsCard />
          </Grid>


          

        </Grid>
      </Content>
    </ComponentOuter>
  )
}

const ComponentOuter = styled.div``
const Content = styled.div``

export default Profiletab

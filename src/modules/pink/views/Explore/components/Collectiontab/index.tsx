import { DisplayHeadings } from 'modules/pink/style'
import { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Grid'
import CategoryCard from 'shared/cards/category'



interface Props {}

const Collectiontab: React.FC<Props> = (props) => {
  const {} = props

  return (
    <ComponentOuter>
      <Content>
        <Grid container spacing={2}>
          <Grid item sm={4}>
            <CategoryCard />
          </Grid>
          <Grid item sm={4}>
            <CategoryCard />
          </Grid>
          <Grid item sm={4}>
            <CategoryCard />
          </Grid>
          <Grid item sm={4}>
            <CategoryCard />
          </Grid>
          <Grid item sm={4}>
            <CategoryCard />
          </Grid>
          <Grid item sm={4}>
            <CategoryCard />
          </Grid>
          <Grid item sm={4}>
            <CategoryCard />
          </Grid>
          <Grid item sm={4}>
            <CategoryCard />
          </Grid>


          

        </Grid>
      </Content>
    </ComponentOuter>
  )
}

const ComponentOuter = styled.div``
const Content = styled.div``

export default Collectiontab

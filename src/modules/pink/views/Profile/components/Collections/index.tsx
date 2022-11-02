import { DisplayHeadings } from 'modules/pink/style'
import { useEffect, useMemo, useState } from 'react'
import CategoryCard from 'shared/cards/category'
import styled from 'styled-components'
import Grid from '@mui/material/Grid'

interface Props {}

const Collections: React.FC<Props> = (props) => {
  const {} = props

  return (
    <ComponentOuter>
      <DisplayHeadings>Featured Collections</DisplayHeadings>
      <Content>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CategoryCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CategoryCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CategoryCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CategoryCard />
          </Grid>

        </Grid>
      </Content>
    </ComponentOuter>
  )
}

const ComponentOuter = styled.div``
const Content = styled.div``

export default Collections

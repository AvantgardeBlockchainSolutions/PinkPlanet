import { DisplayHeadings } from 'modules/pink/style'
import { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CreatorsCard from 'shared/cards/creatorscard'

interface Props {}

const TrendingCreators: React.FC<Props> = (props) => {
  const {} = props

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <ComponentOuter>
      <DisplayHeadings>Trending Creators</DisplayHeadings>
      <Content>
        <Slider {...settings}>
          <div>
            <CreatorsCard />
          </div>
          <div>
            <CreatorsCard />
          </div>
          <div>
            <CreatorsCard />
          </div>
          <div>
            <CreatorsCard />
          </div>
        </Slider>
      </Content>
    </ComponentOuter>
  )
}

const ComponentOuter = styled.div``
const Content = styled.div``

export default TrendingCreators

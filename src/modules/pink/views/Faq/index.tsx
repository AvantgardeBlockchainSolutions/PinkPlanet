// @ts-nocheck
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { TitleText, TitleInfo, CardTitle, CardText, CardSubText } from 'shared/styles/globalText'
import { DisplayHeadings, PinkHeader } from 'modules/pink/style'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'
import { ActivityMobileIcon, BoltIcon, PlusIconWhite, TagIcon } from 'assets/tsicons'

const Faq = () => {
  return (
    <Page>
      <TopRow>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <div className="blkbx">
              <img src={require('assets/images/pink/Faq/1.png').default} className="banner" alt="" />
              <img src={require('assets/images/pink/Faq/stars.png').default} className="stars" alt="" />
              <div className="btmbx">
                <h1>
                  <ActivityMobileIcon />
                  Mint NFTs
                </h1>
                <p>Create unique digital assets, art and anything you can imagine</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <div className="blkbx">
              <img src={require('assets/images/pink/Faq/2.png').default} className="banner" alt="" />
              <div className="btmbx">
                <h1>
                  <TagIcon />
                  Buy & Sell Assets
                </h1>
                <p>Acquire unique assets or start your own business</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <div className="blkbx">
              <img src={require('assets/images/pink/Faq/3.png').default} className="banner" alt="" />
              <div className="btmbx">
                <h1>
                  <BoltIcon />
                  Boost
                </h1>
                <p>Spend & lock GAMMA in assets to boost visibility of it on the marketplace</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </TopRow>
      <PinkHeader>
        <div>
          <TitleText>Frequently Asked Questions</TitleText>
          <TitleInfo className="title-info">We’ve got simple answers to all of your questions</TitleInfo>
        </div>
      </PinkHeader>

      <Content>
        <Accordion>
          <AccordionSummary expandIcon={<PlusIconWhite />} aria-controls="acc1" id="acc1">
            <Typography>What is Pink Planet?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<PlusIconWhite />} aria-controls="acc2" id="acc2">
            <Typography>How do I mint an asset?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<PlusIconWhite />} aria-controls="acc3" id="acc3">
            <Typography>What fees exist on Pink Planet?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<PlusIconWhite />} aria-controls="acc4" id="acc4">
            <Typography>Why do I need to lock GAMMA inside of an asset to create it?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<PlusIconWhite />} aria-controls="acc5" id="acc5">
            <Typography>What is Pink Planet?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<PlusIconWhite />} aria-controls="acc6" id="acc6">
            <Typography>How do I mint an asset?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<PlusIconWhite />} aria-controls="acc7" id="acc7">
            <Typography>What fees exist on Pink Planet?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<PlusIconWhite />} aria-controls="acc8" id="acc8 ">
            <Typography>Why do I need to lock GAMMA inside of an asset to create it?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </AccordionDetails>
        </Accordion>
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
const TopRow = styled.div`
margin-top:20px;
margin-bottom:60px;
  .blkbx {
    border:2px solid rgba(255,255,255,0.09);
    border-radius:20px;
    background:#000;
    padding:30px;
    position:Relative;
    .banner {
      width: 100%;
      height: 400px;
      margin:auto;
      display:block;
      
    object-fit: contain;
    }
    .stars{
      position:absolute;
      right:20px;
      top:20px;
      height:50px;
    }
    
    
    .btmbx {
      text-align:Center;
      max-width:300px;
      margin:auto;
      h1{
        font-size:24px;
        display:flex;
        align-items:center;
        justify-content:center;
        margin-top:20px;
        margin-bottom:10px;
      }
      p{
        margin-top:0;
        opacity:0.4;
        font-weight:16px;
        font-weight:bold;
      }
      #stars{
        opacity:1;
      }
      svg{
        margin-right:8px;
        path{
          fill:#FF55DE;
        }
      }
    }
  }

  // .MuiGrid-container{
  //   .MuiGrid-item{
  //     &:first-child{
  //       .banner{
  //         transform:translateX(35px)
  //       }
  //     }
  //   }
  // }
`

const Content = styled.div`
  margin-top: 40px;
  .displayheading {
    font-size: 20px;
  }

  .MuiAccordion-root {
    background: transparent !important;
    color: #fff !important;
    border: 2px solid rgba(255,255,255,0.15);
    border-radius: 16px !important;
    padding: 10px;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    .MuiAccordionSummary-root {
      min-height: unset !important;
    }
    .MuiAccordionSummary-content {
      margin: 10px 0 !important;
      .MuiTypography-root {
        font-size: 20px;
      }
    }
    .MuiAccordionSummary-expandIconWrapper {
      svg {
        path {
          fill: #fff !important;
        }
      }
    }
  }
`

export default Faq

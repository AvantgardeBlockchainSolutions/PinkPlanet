import { DisplayHeadings } from 'modules/pink/style'
import React, { useEffect, useMemo, useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import styled from 'styled-components'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import { PlusIcon, PlusIconWhite } from 'assets/tsicons'
import { Slider } from '@mui/material'

interface Props {
  activetab:any
}

const Sidebar: React.FC<Props> = (props) => {
  const {activetab} = props
  const [value, setValue] = React.useState<number[]>([0, 50])

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[])
  }

  return (
    <ComponentOuter>
      {
      activetab == "2" ?
      <>
       <SideBx>
        <Accordion defaultExpanded={true}>
          <AccordionSummary expandIcon={<PlusIconWhite />} aria-controls="pricevol" id="pricevol">
            <Typography>Total Sales Volume</Typography>
          </AccordionSummary>
          <AccordionDetails className="priceaccordion">
            <Slider value={value} onChange={handleChange} />
            <div className="pricerow">
              <div>$0 MIN</div>
              <div>MAX</div>
            </div>
          </AccordionDetails>
        </Accordion>
      </SideBx>

      <SideBx>
        <Accordion>
          <AccordionSummary expandIcon={<PlusIconWhite />} aria-controls="community" id="community">
            <Typography>Community</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <CheckboxOuter>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Aquanaut" />
                <div className="right">5,000</div>
              </CheckboxOuter>

              <CheckboxOuter>
                <FormControlLabel control={<Checkbox />} label="All" />
                <div className="right">34,041</div>
              </CheckboxOuter>

             
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      </SideBx>
      </>
      :<>
      <SideBx>
        <Accordion defaultExpanded={true}>
          <AccordionSummary expandIcon={<PlusIconWhite />} aria-controls="price" id="price">
            <Typography>Price</Typography>
          </AccordionSummary>
          <AccordionDetails className="priceaccordion">
            <Slider value={value} onChange={handleChange} />
            <div className="pricerow">
              <div>$0 MIN</div>
              <div>$100,000 MAX</div>
            </div>
          </AccordionDetails>
        </Accordion>
      </SideBx>

      <SideBx>
        <Accordion>
          <AccordionSummary expandIcon={<PlusIconWhite />} aria-controls="Availability" id="Availability">
            <Typography>Availability</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <CheckboxOuter>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Buy Now" />
                <div className="right">101</div>
              </CheckboxOuter>

              <CheckboxOuter>
                <FormControlLabel control={<Checkbox />} label="Live Auction" />
                <div className="right">62</div>
              </CheckboxOuter>

              <CheckboxOuter>
                <FormControlLabel control={<Checkbox />} label="Ending Soon" />
                <div className="right">7</div>
              </CheckboxOuter>
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      </SideBx>

      <SideBx>
        <Accordion>
          <AccordionSummary expandIcon={<PlusIconWhite />} aria-controls="Type" id="Type">
            <Typography>Type</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <CheckboxOuter>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Image" />
                <div className="right">101,487</div>
              </CheckboxOuter>

              <CheckboxOuter>
                <FormControlLabel control={<Checkbox />} label="Video" />
                <div className="right">20,011</div>
              </CheckboxOuter>

              <CheckboxOuter>
                <FormControlLabel control={<Checkbox />} label="GIF" />
                <div className="right">15,002</div>
              </CheckboxOuter>
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      </SideBx>
      </>
}
    </ComponentOuter>
  )
}

const ComponentOuter = styled.div``

const CheckboxOuter = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  padding: 4px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
  .right {
    color: #fff;
    opacity: 0.4;
  }
  .MuiCheckbox-root {
    .MuiSvgIcon-root {
      path {
        fill: rgba(255, 255, 255, 0.15) !important;
      }
    }
    &.Mui-checked {
      .MuiSvgIcon-root {
        path {
          fill: #ff55de !important;
        }
      }
    }
  }
`

const SideBx = styled.div`
  border-bottom: 2px solid rgba(255, 255, 255, 0.15);
  padding: 8px 0;
  margin: 8px 0;

  .priceaccordion {
    .pricerow {
      display: flex;
      align-items: Center;
      justify-content: space-between;
    }
    
    .MuiSlider-root {
      .MuiSlider-rail {
        background: rgba(255, 255, 255, 0.15);
      }
      .MuiSlider-track {
        background: #fff !important;
        height: 2px;
      }

      .MuiSlider-thumb {
        background: #fff;
      }
    }
  }
  .MuiAccordion-root {
    background: transparent !important;
    color: #fff !important;
    .MuiAccordionSummary-root {
      min-height: unset !important;
      padding: 0 !important;
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

export default Sidebar

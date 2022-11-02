import { useEffect, useMemo, useState } from "react";
import BoltIcon from '@mui/icons-material/Bolt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import styled from "styled-components";
import { CardsMain } from "../style";
import { GreenNftCard } from "assets/tsicons";
import { Paths } from "modules/app/components/routes/types";
import history from "modules/app/components/history";

interface Props {

}

const CreatorsCard: React.FC<Props> = (props) => {
  const {
  } = props;
 const [heartactive,setHeartactive] = useState(false)

  return (
    <CardsMain onClick={() => history.push(`${Paths.pinkProfileview}`)}>
        <CardOuter>
            <img src={require("../../../assets/images/pink/Creators/1.png").default} className="cover" alt="" />
            <CardInfo>
                <div className="profilebx">
                    <img src={require("../../../assets/images/pink/Profile/1.png").default} alt="" />
                </div>
                <div className="topvalue">
                Sid Kepal
                </div>
                <div className="id">
                2,838 Followers
                </div>
               
            </CardInfo>
        </CardOuter>
    </CardsMain>
  );
};

const CardInfo = styled.div`
padding:20px;
    padding-top:0;
    .profilebx{
        display:flex;
        justify-content:Center;
        img{
            height:60px;
            width:auto;
            border-radius:50%;
            
            margin-top:-45px;
            margin-bottom:15px;
        }
    }
    .topvalue{
        font-size:20px;
            font-weight:bold;
            text-align:Center;
            margin-bottom:6px;
    }
    .id{
        opacity:0.4;
        font-size:16px;
            font-weight:bold;
            text-align:Center;
    }
    
`
const CardOuter = styled.div`
    position:relative;
    background:#000000;
    z-index:1;
    .cover{
        width:100%;
        height:108px;
        object-fit:cover;
    }
`;

const Section = styled.section``;

export default CreatorsCard;

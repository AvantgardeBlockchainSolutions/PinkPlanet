import { useEffect, useMemo, useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styled from "styled-components";
import { CardsMain } from "../style";
import history from "modules/app/components/history";
import { Paths } from "modules/app/components/routes/types";

interface Props {

}

const CategoryCard: React.FC<Props> = (props) => {
  const {
  } = props;
 const [heartactive,setHeartactive] = useState(false)

  return (
    <CardsMain  onClick={() => history.push(`${Paths.pinkcollection}`)}>
        <CardOuter>
            <img src={require("../../../assets/images/pink/Covers/dragon.png").default} className="cover" alt="" />
            <CardInfo>
                <h1>Dragon Tails</h1>
                <div className="profilebx">
                <img src={require("../../../assets/images/pink/Profile/yengshi.png").default} alt="" /> Yengshi
                </div>
                <div className="btmvalue">
                    <div className="value">
                     $4.72M
                    </div>
                    <div className="heart" onClick={() => setHeartactive(!heartactive)}>
                        {
                            !heartactive ?
                            <FavoriteBorderIcon  /> :
                            <FavoriteIcon style={{color:"red"}}/>
                        }
                        
                        
                    </div>
                </div>
            </CardInfo>
        </CardOuter>
    </CardsMain>
  );
};

const CardInfo = styled.div`
position:absolute;
z-index:3;
bottom:30px;
left:20px;
right:20px;
    h1{
        font-size:30px;
        font-weight:500;
        margin:0;
    }
    .profilebx{
        display:flex;
        align-items:center;
        font-weight:bold;
        font-size:18px;
        margin:14px 0;
        background:rgba(255,255,255,0.3);
        padding:6px 10px;
        padding-right:14px;
        border-radius:100px;
        width:fit-content;
        img{
            height:30px;
            width:auto;
            margin-right:8px;
        }
    }
    .btmvalue{
        display:flex;
        align-items:center;
        justify-content:space-between;
        font-weight:16px;
        font-weight:bold;
        .heart{
            cursor:pointer;
             
        }
    }
`
const CardOuter = styled.div`
    position:relative;
    z-index:1;
    &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height:50%;
        background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.9) 100%);
        transition: all 0.5s ease-out;
        z-index: 2;
      }
    .cover{
        width:100%;
    }
`;

const Section = styled.section``;

export default CategoryCard;

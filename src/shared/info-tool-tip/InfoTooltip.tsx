import { useEffect } from "react";
import ReactTooltip from "react-tooltip"
import { ToolTipIcon } from './style'
import QuestionIcon from 'assets/icons/question-icon.svg'

const InfoTooltip = (props: any) => {
    const { infoId, top, left } = props

    useEffect(() => {
        ReactTooltip.rebuild();
    })

    return (
        <ToolTipIcon src={QuestionIcon} alt="" data-tip data-for={infoId} left={left} top={top} />
    );
};

export default InfoTooltip;
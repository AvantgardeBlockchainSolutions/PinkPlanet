import { HalBornWrapper, HalBornCont, AuditText, HalbornText, HalBornImg } from './style'
import HalbornIcon from 'assets/icons/Halborn.png'
import { auditLink } from 'service/global-constant'

const Halborn = () => {
    return (
        <HalBornWrapper onClick={() => window.open(auditLink)}>
            <HalBornCont >
                <AuditText>Audited By</AuditText>
                <HalBornImg src={HalbornIcon} alt="" />
                <HalbornText>Halborn</HalbornText>
            </HalBornCont>
        </HalBornWrapper>

    );
};

export default Halborn;
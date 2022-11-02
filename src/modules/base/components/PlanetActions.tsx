import { CardBText } from 'shared/styles/globalText'
import { PlanetActionCont, PlanetActionCard } from './style'
import VaultImg from 'assets/images/vault-img.png'
import PoolImg from 'assets/images/pool-img.png'
import SwapImg from 'assets/images/swap-img.png'
import LendImg from 'assets/images/lend-img.png'
import { greenPlanetLink } from 'service/global-constant'
import history from 'modules/app/components/history'
import { Paths } from 'modules/app/components/routes/types'

const PlanetActions = () => {

    const gotToPath = (path: string) => {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
        });
        if (path === 'vaults') {
            history.push(Paths.vaults)
        }
        if (path === 'pools') {
            history.push(Paths.pools)
        }
        if (path === 'swap') {
            history.push(Paths.swap)
        }
        if (path === 'lending') {
            history.push(Paths.lending)
        }
    }
    return (
        <PlanetActionCont>
            <PlanetActionCard onClick={() => gotToPath('vaults')}>
                <img src={VaultImg} alt="" />
                <CardBText>Vaults</CardBText>
            </PlanetActionCard>
            <PlanetActionCard onClick={() => gotToPath('pools')}>
                <img src={PoolImg} alt="" />
                <CardBText>Pools</CardBText>
            </PlanetActionCard>
            <PlanetActionCard onClick={() => gotToPath('swap')}>
                <img src={SwapImg} alt="" />
                <CardBText>Swap</CardBText>
            </PlanetActionCard>
            <PlanetActionCard onClick={() => gotToPath('lending')}>
                <img src={LendImg} alt="" />
                <CardBText>Lending</CardBText>
            </PlanetActionCard>
        </PlanetActionCont>
    );
};

export default PlanetActions;
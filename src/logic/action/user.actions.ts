import { POOL_LOADING, UPDATE_POOL_INFO, UPDATE_POOL_DATA, PORTFOLIO_LOADING, UPDATE_USER_PORTFOLIO, PLATFORM_LOADING, UPDATE_PLATFORM_DATA, INFINITY_VAULT_LOADING, UPDATE_GAMMA_INF_VAULT_DATA, UPDATE_AQUA_INF_VAULT_DATA } from './action.config'
// import { getPortfolioData, getInfinityVaultData } from 'modules/block-chain/BlockChainMethods'
import { updateUserAsset } from './lending.action'
import axios from 'axios'
// import { aqua_infinity_vault_address, gamma_infinity_vault_address } from 'modules/block-chain/abi'
import { planetFinanceApiBaseUrl } from "service/global-constant";


const poolInfoUrl = planetFinanceApiBaseUrl+'v1/markets/getallpoolinfo'
const platformInfoUrl = planetFinanceApiBaseUrl+'v1/markets/getallplatformdata'


/*  ============================= POOL INFO ============================= */

export const setPoolInfoLoading = (status: boolean) => {
  return {
    type: POOL_LOADING,
    payload: status,
  }
}

export const updatePoolInfo = (data: any) => {
  return {
    type: UPDATE_POOL_INFO,
    payload: data,
  }
}

export const updatePoolData = (data: any) => {
  return {
    type: UPDATE_POOL_DATA,
    payload: data,
  }
}

export const fetchPoolData = () => async (dispatch: any) => {
  try {
    dispatch(setPoolInfoLoading(true))
    const res: any = {};//await axios.get(poolInfoUrl)
    // console.log("pool Data===>", res.data)
    if (!!res && typeof res !== 'undefined' && res.data) {
      dispatch(updatePoolInfo(res.data))
      const defaultData = {
        userLPArray: [],
        userMarketsArray: []
      }
      dispatch(updatePoolData(defaultData))
    }
  }
  catch (error) {
    console.log(error)
  }
  finally {
    dispatch(setPoolInfoLoading(false))
  }
};


/* ================================== PORTFOLIO ACTIONS ==================================*/

export const setPortfolioLoading = (loadingStatus: boolean) => {
  return {
    type: PORTFOLIO_LOADING,
    payload: loadingStatus,
  }
}

export const updateUserPortfolio = (data: any) => {
  return {
    type: UPDATE_USER_PORTFOLIO,
    payload: data,
  }
}

export const fetchUserPortfolio = (address: any, isUpdate?: any) => async (dispatch: any) => {
  try {
    if (!!address) {
      if (!isUpdate) {
        dispatch(setPortfolioLoading(true))
      }
      const res: any = {};//await getPortfolioData(address)
      // console.log("user portfolio--->", res)
      if (!!res && typeof res != 'undefined') {
        const data = {
          balanceInVaults: !isNaN(parseFloat(res.balance_in_vaults)) ? res.balance_in_vaults : 0,
          currentApy: !isNaN(parseFloat(res.current_apy)) ? res.current_apy : 0,
          currentApr: !isNaN(parseFloat(res.current_apr)) ? res.current_apr : 0,
          dailyEarning: !isNaN(parseFloat(res.daily_earning)) ? res.daily_earning : 0,
          pendingEarnings: !isNaN(parseFloat(res.pending_earnings)) ? res.pending_earnings : 0,
          userAquaBalance: !isNaN(parseFloat(res.userAquaBalance)) ? res.userAquaBalance : 0,
          userAquaBalanceUSD: !isNaN(parseFloat(res.userAquaBalanceUSD)) ? res.userAquaBalanceUSD : 0,
          userGammaBalance: !isNaN(parseFloat(res.userGammaBalance)) ? res.userGammaBalance : 0,
          userGammaBalanceUSD: !isNaN(parseFloat(res.userGammaBalanceUSD)) ? res.userGammaBalanceUSD : 0,
          greenPendingGAMMA: !isNaN(parseFloat(res.greenPendingGAMMA)) ? res.greenPendingGAMMA : 0,
          greenPendingUsd: !isNaN(parseFloat(res.greenPendingUsd)) ? res.greenPendingUsd : 0,
          gammaPrice: !isNaN(parseFloat(res.gammaPrice)) ? res.gammaPrice : 0,
          aquaPrice: !isNaN(parseFloat(res.aquaPrice)) ? res.aquaPrice : 0,
          userLevel: {
            level: !isNaN(res.userLevel.level) ? res.userLevel.level : 0,
            discount: !isNaN(res.userLevel.discount) ? res.userLevel.discount : 0
          },
          suppliedList: res.supplied_list,
          userLPArray: Object.values(res.userLPArray),
          userMarketsArray: Object.values(res.userMarketsArray)
        }
        dispatch(updateUserPortfolio(data))
        dispatch(updatePoolData(data))
      }
    }
  }
  catch (error) {
    console.log(error)
  }
  finally {
    dispatch(setPortfolioLoading(false))
  }
}

/* =============================== PLATFORM ACTIONS =========================== */

export const setPlatformLoading = (loadingStatus: boolean) => {
  return {
    type: PLATFORM_LOADING,
    payload: loadingStatus,
  }
}

export const updatePlatformData = (data: any) => {
  return {
    type: UPDATE_PLATFORM_DATA,
    payload: data,
  }
}

export const fetchPlatformData = () => async (dispatch: any) => {
  try {
    dispatch(setPlatformLoading(true))
    let res: any = []//await axios.get(platformInfoUrl)
    if (!!res && typeof res !== 'undefined' && res.data) {
      res.data.gamma_price = 0;
      res.data.aqua_price = 0;
      dispatch(updatePlatformData(res.data))
    }
  }
  catch (error) {
    console.log(error)
  }
  finally {
    dispatch(setPlatformLoading(false))
  }
}

/* ================================= INFINITY VAULT ACTION ============================= */

export const setInfVaultLoading = (loadingStatus: boolean) => {
  return {
    type: INFINITY_VAULT_LOADING,
    payload: loadingStatus,
  }
}

export const updateGammaInfVault = (data: any) => {
  return {
    type: UPDATE_GAMMA_INF_VAULT_DATA,
    payload: data,
  }
}
export const updateAquaInfVault = (data: any) => {
  return {
    type: UPDATE_AQUA_INF_VAULT_DATA,
    payload: data,
  }
}

export const fetchInfVaultData = (address?: any, isUpdate?: any) => async (dispatch: any) => {
  try {
    if (!!address) {
      if (!isUpdate) {
        dispatch(setInfVaultLoading(true))
      }
      const res: any = [];//await getInfinityVaultData(address)
      // console.log("infinity vault data===>", res)
      if (!!res && typeof res !== 'undefined') {
        // if (res[gamma_infinity_vault_address] !== 'undefined') {
        //   const gGammaVaultData = res[gamma_infinity_vault_address];
        //   dispatch(updateGammaInfVault(gGammaVaultData))
        // }
        // if (res[aqua_infinity_vault_address] !== 'undefined') {
        //   const gAquaVaultData = res[aqua_infinity_vault_address];
        //   dispatch(updateAquaInfVault(gAquaVaultData))
        // }

      }
    } else {
      const res: any = [];//await getInfinityVaultData()
      // if (res[gamma_infinity_vault_address] !== 'undefined') {
      //   const gGammaVaultData = res[gamma_infinity_vault_address];
      //   dispatch(updateGammaInfVault(gGammaVaultData))
      // }
      // if (res[aqua_infinity_vault_address] !== 'undefined') {
      //   const gAquaVaultData = res[aqua_infinity_vault_address];
      //   dispatch(updateAquaInfVault(gAquaVaultData))
      // }
    }

  }
  catch (error) {
    console.log(error)
  }
  finally {
    dispatch(setInfVaultLoading(false))
  }
}


/* ===================================== Update User Balance  ==================================*/

export const updateUserBalance = (address: any) => async (dispatch: any) => {
  dispatch(updateUserAsset(address))
  dispatch(fetchUserPortfolio(address, true))
}
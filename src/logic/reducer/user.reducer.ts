import { POOL_LOADING, UPDATE_POOL_INFO, UPDATE_POOL_DATA, PORTFOLIO_LOADING, UPDATE_USER_PORTFOLIO, PLATFORM_LOADING, UPDATE_PLATFORM_DATA, INFINITY_VAULT_LOADING, UPDATE_GAMMA_INF_VAULT_DATA, UPDATE_AQUA_INF_VAULT_DATA } from 'logic/action/action.config'
// import {revisedPFMarketTokenList} from '../../modules/block-chain/pfTokenList'
const initialState = {
  authLoading: false,
  poolLoading: true,
  poolData: {
    pools: {},
    vaults: {},
  },
  portfolioLoading: false,
  userPortfolio: {
    balanceInVaults: 0,
    currentApy: 0,
    currentApr: 0,
    dailyEarning: 0,
    pendingEarnings: 0,
    userAquaBalance: 0,
    userAquaBalanceUSD: 0,
    userGammaBalance: 0,
    userGammaBalanceUSD: 0,
    greenPendingGAMMA: 0,
    greenPendingUsd: 0,
    userLevel: { level: 0, discount: 0 },
    suppliedList: [],
    userLPArray: [],
    userMarketsArray: [],
    aquaPrice: 0,
    gammaPrice: 0,
  },
  platformLoading: false,
  platformData: {},
  infVaultLoading: false,
  gammaInfData: {},
  aquaInfData: {}
}

const getTotalRewards = (firstReward: any, secondReward: any) => {
  let finalAmount: any = 0
  const firstAmt = !!firstReward && !isNaN(parseFloat(firstReward)) ? firstReward : 0
  const secondAmt = !!secondReward && !isNaN(parseFloat(secondReward)) ? secondReward : 0
  finalAmount = parseFloat(firstAmt) + parseFloat(secondAmt)
  return finalAmount
}

const updatePools = (addressVal: string, userPortfolio: any) => {

  let userPoolData: any = {
    vaultBalance: 0,
    vaultBalanceUSD: 0,
    walletBalance: 0,
    walletBalanceUSD: 0,
    uranusRewards: 0,
    uranusRewardsUSD: 0,
    userRewards: 0,
    userRewardsUSD: 0,
    allowance: '0',
    isAllowanceApproved: false,
    totalRewardsUSD: 0
  }

  if (userPortfolio.userLPArray.length > 0) {
    const data = userPortfolio.userLPArray.filter((e: any) => e.wantAddress_farmAddress.toLowerCase() === addressVal.toLowerCase())
    if (data.length > 0) {
      const dataVal: any = data[0]
      userPoolData = {
        vaultBalance: !!dataVal.LPTokens ? dataVal.LPTokens : 0,
        vaultBalanceUSD: !!dataVal.LPTokenUSD ? dataVal.LPTokenUSD : 0,
        walletBalance: !!dataVal.walletBalance ? dataVal.walletBalance : 0,
        walletBalanceUSD: !!dataVal.walletBalanceUSD ? dataVal.walletBalanceUSD : 0,
        uranusRewards: !!dataVal.uranusRewards ? dataVal.uranusRewards : 0,
        uranusRewardsUSD: !!dataVal.uranusRewardsUSD ? dataVal.uranusRewardsUSD : 0,
        userRewards: !!dataVal.userRewards ? dataVal.userRewards : 0,
        userRewardsUSD: !!dataVal.userRewardsUSD ? dataVal.userRewardsUSD : 0,
        allowance: !!dataVal.allowance ? dataVal.allowance : '0',
        isAllowanceApproved: !!dataVal.isAllowanceApproved ? true : false,
        totalRewardsUSD: getTotalRewards(dataVal.uranusRewardsUSD, dataVal.userRewardsUSD)
      }
    }
  }
  return userPoolData
}

const updateVaults = (address: string, userPortfolio: any, isBoostPool?: boolean) => {
  let userVaultData: any = {
    vaultBalance: 0,
    vaultBalanceUSD: 0,
    walletBalance: 0,
    walletBalanceUSD: 0,
    uranusRewards: 0,
    uranusRewardsUSD: 0,
    userRewards: 0,
    userRewardsUSD: 0,
    allowance: '0',
    isAllowanceApproved: false,
    totalRewardsUSD: 0,
    set: false
  }
  if (userPortfolio.userMarketsArray.length > 0) {
    let data: any;
    if(isBoostPool){
      data = userPortfolio.userMarketsArray.filter((e: any) => e.strategyAddress.toLowerCase() === address.toLowerCase())
    } else{
      data = userPortfolio.userMarketsArray.filter((e: any) => e.marketAddress.toLowerCase() === address.toLowerCase())
    }
    
    if (data.length > 0) {
      const dataVal: any = data[0]
      userVaultData = {
        vaultBalance: !!dataVal.vaultBalance ? dataVal.vaultBalance : 0,
        vaultBalanceUSD: !!dataVal.vaultBalanceUSD ? dataVal.vaultBalanceUSD : 0,
        walletBalance: !!dataVal.walletBalance ? dataVal.walletBalance : 0,
        walletBalanceUSD: !!dataVal.walletBalanceUSD ? dataVal.walletBalanceUSD : 0,
        uranusRewards: !!dataVal.uranusRewards ? dataVal.uranusRewards : 0,
        uranusRewardsUSD: !!dataVal.uranusRewardsUSD ? dataVal.uranusRewardsUSD : 0,
        userRewards: !!dataVal.userRewards ? dataVal.userRewards : 0,
        userRewardsUSD: !!dataVal.userRewardsUSD ? dataVal.userRewardsUSD : 0,
        allowance: !!dataVal.allowance ? dataVal.allowance : '0',
        isAllowanceApproved: !!dataVal.isAllowanceApproved ? true : false,
        totalRewardsUSD: getTotalRewards(dataVal.uranusRewardsUSD, dataVal.userRewardsUSD),
        set: true
      }
    }
  }
  return userVaultData
}

const getUpdatedPoolData = (poolData: any, userPortfolio: any) => {
  let pools = poolData.pools
  let vaults = poolData.vaults
  if (!!pools && Object.values(pools).length > 0) {
    const active: any = []
    const finished: any = []
    if (pools.active.length > 0) {
      for (const item of pools.active) {

        const userVal: any = updatePools(item.wantaddress_farmaddress, userPortfolio)
        const data = { ...item, ...userVal }
        active.push(data)
      }
    }
    if (pools.finished.length > 0) {
      for (const item of pools.finished) {
        const userVal: any = updatePools(item.wantaddress_farmaddress, userPortfolio)
        const data = { ...item, ...userVal }
        finished.push(data)
      }
    }
    pools = { active, finished }
  }

  if (!!vaults && Object.values(vaults).length > 0) {
    const active: any = []
    const finished: any = []
    let aqua: any = {}
    let gamma: any = {}
    //  && item.strategyAddress !== "0xf18F4770Ee76E6459b6b2CECc919Ea5D3c58e8D9"
    if (vaults.active.length > 0) {
      for (const item of vaults.active) {
        const userVal: any = updateVaults(item.isBoostPool ? item.strategyAddress : item.address, userPortfolio, item.isBoostPool ? true : false)
        const data = { ...item, ...userVal }
        if(userVal.set || (item.isBoostPool && item.strategyAddress.toLowerCase() !== "0x2336F606250851c8D58088Fb6097420aCc78c142".toLowerCase()) || (userPortfolio.userMarketsArray.length === 0 )){
          if(item.isBoostPool){
            data.address = data.strategyAddress;
            // console.log("boosted vault details", data)
          }
          active.push(data)
        }
        
        if(item.address === "0x0c6dd143F4b86567d6c21E8ccfD0300f00896442"){
          gamma = data;
        }
        if(item.address === "0xb7eD4A5AF620B52022fb26035C565277035d4FD7"){
          aqua = data;
        }
      }
    }
    if (vaults.finished.length > 0) {
      for (const item of vaults.finished) {
        const userVal: any = updateVaults(item.isBoostPool ? item.wantAddress : item.address, userPortfolio)
        const data = { ...item, ...userVal }
        finished.push(data)
      }
    }
    vaults = { active, finished, aqua, gamma }
  }

  const newPoolData = {
    pools: pools,
    vaults: vaults,
  }
  return newPoolData
}

export const userReducer = (state = initialState, action: any) => {
  const { type, payload } = action
  switch (type) {

    case POOL_LOADING:
      return {
        ...state,
        poolLoading: payload,
      }
    case UPDATE_POOL_INFO:
      return {
        ...state,
        poolData: payload,
      }

    case UPDATE_POOL_DATA:
      return {
        ...state,
        poolData: getUpdatedPoolData(state.poolData, payload),
      }

    case PORTFOLIO_LOADING:
      return {
        ...state,
        portfolioLoading: payload,
      }
    case UPDATE_USER_PORTFOLIO:
      return {
        ...state,
        userPortfolio: payload,
      }

    case PLATFORM_LOADING:
      return {
        ...state,
        platformLoading: payload,
      }
    case UPDATE_PLATFORM_DATA:
      return {
        ...state,
        platformData: payload,
      }

    case INFINITY_VAULT_LOADING:
      return {
        ...state,
        infVaultLoading: payload,
      }

    case UPDATE_GAMMA_INF_VAULT_DATA:
      return {
        ...state,
        gammaInfData: payload,
      }
    case UPDATE_AQUA_INF_VAULT_DATA:
      return {
        ...state,
        aquaInfData: payload,
      }

    default:
      return state
  }
}

import { LENDING_PLATFORM_LOADING, USER_ASSET_LOADING, MARKET_ASSET_LOADING, BORROW_LIMIT_LOADING, ADD_NULL_LOADING, UPDATE_LENDING_PLATFORM_DATA, UPDATE_USER_ASSET_DATA, UPDATE_ASSET_MARKET_DATA, UPDATE_BORROW_LIMIT } from './action.config'
// import { getTotalPlatformData, getUserSuppliedAndBorrowedAssetData, getBorrowLimitData } from 'modules/block-chain-green/LendingBase'
import {  } from './user.actions'

/* ============================= Lending Platform ================================== */

export const setAddNullLoading = (status: boolean) => {
    return {
        type: ADD_NULL_LOADING,
        payload: status
    }
}

export const setLendingPlatformLoading = (status: boolean) => {
    return {
        type: LENDING_PLATFORM_LOADING,
        payload: status
    }
}

export const updateLendingPlatformData = (data: any) => {
    return {
        type: UPDATE_LENDING_PLATFORM_DATA,
        payload: data
    }
}

export const fetchLendingPlatformData = (address: any) => async (dispatch: any) => {
    try {
        if (!!address) {
            dispatch(setLendingPlatformLoading(true))
        }
        else {
            dispatch(setAddNullLoading(true))
        }
        const res = {};//await getTotalPlatformData(address)
        if (!!res && res !== 'undefined') {
            dispatch(updateLendingPlatformData(res))
        }
    }
    catch (error) {
        console.log(error)
    }
    finally {
        if (!!address) {
            dispatch(setLendingPlatformLoading(false))
        }
        else {
            dispatch(setAddNullLoading(false))
        }
    }
}

export const updateLendingPlatform = (address: any) => async (dispatch: any) => {
    try {
        const res = {};//await getTotalPlatformData(address)
        if (!!res && res !== 'undefined') {
            dispatch(updateLendingPlatformData(res))
        }
    }
    catch (error) {
        console.log(error)
    }
}

/* ========================== USER ASSET DATA =========================== */

export const setUserAssetLoading = (status: boolean) => {
    return {
        type: USER_ASSET_LOADING,
        payload: status
    }
}

export const updateUserAssetData = (data: any) => {
    return {
        type: UPDATE_USER_ASSET_DATA,
        payload: data
    }
}

export const fetchUserAssetData = (address: any) => async (dispatch: any) => {
    try {
        if (!!address) {
            dispatch(setUserAssetLoading(true))
        }
        const res = {};// await getUserSuppliedAndBorrowedAssetData(address)
        if (!!res) {
            const data = {
                
            }
            dispatch(updateUserAssetData(data))
        }
    }
    catch (error) {
        console.log(error)
    }
    finally {
        if (!!address) {
            dispatch(setUserAssetLoading(false))
        }
    }
}

export const updateUserAsset = (address: any) => async (dispatch: any) => {
    try {
        const res = {}//await getUserSuppliedAndBorrowedAssetData(address)
        if (!!res) {
            const data = {
                
            }
            dispatch(updateUserAssetData(data))
        }
    }
    catch (error) {
        console.log(error)
    }
}


/* ======================== MARKET ASSET DATA =========================== */

export const setMarketLoading = (status: boolean) => {
    return {
        type: MARKET_ASSET_LOADING,
        payload: status
    }
}

export const updateAssetMarketData = (data: any) => {
    return {
        type: UPDATE_ASSET_MARKET_DATA,
        payload: data
    }
}

/* ===================================== BORROW LIMIT ==================================== */

export const setBorrowLimitLoading = (status: boolean) => {
    return {
        type: BORROW_LIMIT_LOADING,
        payload: status
    }
}

export const updateBorrowLimit = (data: any) => {
    return {
        type: UPDATE_BORROW_LIMIT,
        payload: data
    }
}

export const fetchBorrowLimit = (address: any) => async (dispatch: any) => {
    try {
        if (!!address) {
            dispatch(setBorrowLimitLoading(true))
        }
        const res = {}//await getBorrowLimitData(address)
        if (!!res) {
            dispatch(updateBorrowLimit(res))
        }
    }
    catch (error) {
        console.log(error)
    }
    finally {
        if (!!address) {
            dispatch(setBorrowLimitLoading(false))
        }
    }
}

export const updateBorrowLimitData = (address: any) => async (dispatch: any) => {
    try {
        const res = {}//await getBorrowLimitData(address)
        if (!!res) {
            dispatch(updateBorrowLimit(res))
        }
    }
    catch (error) {
        console.log(error)
    }
}

/* ==================================   Update All Lending =============================================== */

export const updateUserLendingData = (address: any) => async (dispatch: any) => {
    dispatch(updateLendingPlatform(address))
    dispatch(updateUserAsset(address))
    dispatch(updateBorrowLimitData(address))
    // dispatch(fetchUserPortfolio(address, true))
}
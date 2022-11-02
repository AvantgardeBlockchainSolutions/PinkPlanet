import { LENDING_PLATFORM_LOADING, USER_ASSET_LOADING, BORROW_LIMIT_LOADING, ADD_NULL_LOADING, UPDATE_LENDING_PLATFORM_DATA, UPDATE_USER_ASSET_DATA, UPDATE_BORROW_LIMIT } from '../action/action.config'

const initialState = {
    addNullLoading: false,
    gPlatformLoading: false,
    gPlatformData: {},
    userAssetLoading: false,
    userAssetData: {
        suppliedAssets: [],
        borrowedAssets: [],
        marketData: [],
        gammaObj:{},
        levelBorrowApyArray:[],
    },
    borrowLimitLoading: false,
    borrowLimit: {},


}

export const lendingReducer = (state = initialState, action: any) => {
    const { type, payload } = action
    switch (type) {

        case ADD_NULL_LOADING:
            return {
                ...state,
                addNullLoading: payload,
            }
        case LENDING_PLATFORM_LOADING:
            return {
                ...state,
                gPlatformLoading: payload,
            }
        case UPDATE_LENDING_PLATFORM_DATA:
            return {
                ...state,
                gPlatformData: payload,
            }

        case USER_ASSET_LOADING:
            return {
                ...state,
                userAssetLoading: payload,
            }
        case UPDATE_USER_ASSET_DATA:
            return {
                ...state,
                userAssetData: payload,
            }

        case BORROW_LIMIT_LOADING:
            return {
                ...state,
                borrowLimitLoading: payload,
            }

        case UPDATE_BORROW_LIMIT:
            return {
                ...state,
                borrowLimit: payload,
            }
        default:
            return state
    }
}

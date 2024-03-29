import { CONNECT_ETH_WALLET, DISCONNECT_ETH_WALLET } from '../action/action.config'

const initialState = {
  ethWalletConnected: false,
  address: null,
}

export const ethReducer = (state = initialState, action: any) => {
  const { type, payload } = action
  switch (type) {
    case CONNECT_ETH_WALLET:
      return {
        ...state,
        ethWalletConnected: true,
        address: payload,
      }
    case DISCONNECT_ETH_WALLET:
      return {
        ...state,
        ethWalletConnected: false,
        address: null,
      }
    default:
      return state
  }
}

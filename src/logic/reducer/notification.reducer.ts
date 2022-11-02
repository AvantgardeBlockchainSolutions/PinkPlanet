import { NOTIFICATION_OPEN, NOTIFICATION_CLOSE } from 'logic/action/action.config'

const initialState = {
    isOpen: false,
    info: {
        type: '',
        message: '',
        link: ''
    },
}

export const notificationReducer = (state = initialState, action: any) => {
    const { type, payload } = action
    switch (type) {
        case NOTIFICATION_OPEN:
            return {
                ...state,
                isOpen: true,
                info: payload,
            }
        case NOTIFICATION_CLOSE:
            return {
                ...state,
                isOpen: false,
            }
        default:
            return state
    }
}

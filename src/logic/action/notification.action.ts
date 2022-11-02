import { NOTIFICATION_OPEN, NOTIFICATION_CLOSE } from './action.config'

export const notificationOpen = (data: any) => {
    return {
        type: NOTIFICATION_OPEN,
        payload: data
    }
}

export const notificationClose = () => {
    return {
        type: NOTIFICATION_CLOSE,
    }
}
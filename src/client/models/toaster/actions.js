export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const resetNotification = () => ({
    type: RECEIVE_MESSAGE,
    payload: {
        type: "",
        title: "",
        message: ""
    }
})

export const displayNotification = (type, title, message) => ({
    type: RECEIVE_MESSAGE,
    payload: {
        type: type,
        title: title,
        message: message
    }
})

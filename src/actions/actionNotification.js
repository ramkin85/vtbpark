import * as types from './actionsTypes';

export function showNotification(data) {
    return {
        "type": types.SHOW_NOTIFICATION,
        "payload": {
            data
        }
    };
}



export function hideNotification() {
    return {
        "type": types.HIDE_NOTIFICATION,
        "payload": {}
    };
}

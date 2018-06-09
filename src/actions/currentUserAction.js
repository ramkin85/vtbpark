import * as types from './actionsTypes';

export function saveCurrentUser(currentUserData) {
    return {
        "type": types.SAVE_CURRENT_USER,
        "payload": {
            currentUserData
        }
    };
}



export function removeCurrentUser() {
    return {
        "type": types.REMOVE_CURRENT_USER,
        "payload": {}
    };
}

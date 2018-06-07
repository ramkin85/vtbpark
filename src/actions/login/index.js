

export const showLogin = () => {
    console.log("showLogin");
    return {
        type:"SHOW_LOGIN_DIALOG",
        open: true
    }
};


export const hideLogin = () => {
    return {
        type:"SHOW_LOGIN_DIALOG",
        open: false
    }
};


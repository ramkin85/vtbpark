

const isAuth = () =>{
    return Boolean(localStorage.getItem("token"));
};

const getToken = () => {
    return localStorage.getItem("token")||'';
};

export default {
    isAuth,
    getToken
}
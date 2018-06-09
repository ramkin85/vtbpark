

const isAuth = () =>{
    return Boolean(localStorage.getItem("token"));
};


export default {
    isAuth
}
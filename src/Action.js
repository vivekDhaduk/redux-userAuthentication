export const userRegister =(data)=>{
    return{
        type:'ADD_USER',
        payload:data
    }
}

export const userlogin =(num)=>{
    return{
        type:'LOGIN_USER',
        payload:num
    }
}

export const userlogout =(num)=>{
    return{
        type:'LOGOUT_USER',
        payload:num
    }
}


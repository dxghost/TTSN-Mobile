export function updateAll(payload){
    return {
        type: 'UPDATE_ALL',//we can refactor code and use constant action strings later
        payload
    }
}

export function updateUser(payload){
    return {
        type: 'UPDATE_USER',
        payload
    }
}

export function clear(){
    return{
        type: 'CLEAR',
        payload: {}
    }
}


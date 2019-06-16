export function updateTodo(payload){
    return {
        type: 'UPDATE_TODO',//we can refactor code and use constant action strings later
        payload
    }
}

export function updateInProgress(payload){
    return {
        type: 'UPDATE_INPROGRESS',
        payload
    }
}

export function updateDone(payload){
    return{
        type: 'UPDATE_DONE',
        payload
    }
}


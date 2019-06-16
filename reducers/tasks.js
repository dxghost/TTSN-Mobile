initalState = { //initialState for tasks data
    to_do:[],
    in_progress:[],
    done:[]
}
const tasks = (state = initalState, action) => {
    switch(action.type){
        case("UPDATE_TODO"):
            return {
                ...state,
                to_do: action.payload.data
            }
        case("UPDATE_INPROGRESS"):
            return {
                ...state,
                in_progress: action.payload.data
            }
        case("UPDATE_DONE"):
            return {
                ...state,
                done: action.payload.data
            }
        default:
            return state
    }
}

export default tasks
initalState = { //initialState for tasks data
    user:null,
    all:null,
}
const projects = (state = initalState, action) => {
    switch(action.type){
        case("UPDATE_ALL"):
            return {
                ...state,
                all: action.payload.data
            }
        case("UPDATE_USER"):
            return {
                ...state,
                user: action.payload.data
            }
        case("CLEAR"):
            return initalState
        default:
            return state
    }
}

export default projects
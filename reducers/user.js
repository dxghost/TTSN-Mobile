initalState = { //initialState for loggedin user
    id:null,
    token:null
}
const user = (state = initalState, action) => {
    switch(action.type){
        case("UPDATE_USER"):
            return {
                ...state,
                id: action.payload.id,
                token: action.payload.token
            }
        default:
            return state
    }
}

export default user
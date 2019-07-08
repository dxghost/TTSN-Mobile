initalState = { //initialState for current project
}
const project = (state = initalState, action) => {
    switch(action.type){
        case("UPDATE_PROJECT"):
            return action.payload.project
        default:
            return state
    }
}

export default project
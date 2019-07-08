initalState = { //initialState for current project
    project: null
}
const project = (state = initalState, action) => {
    switch(action.type){
        case("UPDATE_PROJECT"):
            return{
                ...state,
                project: action.payload.project
            }
        default:
            return state
    }
}
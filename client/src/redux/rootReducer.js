import { SET_TODOS, CHANGE_THEME } from "./types"

const initialState = {
    themeIsDay : true,
    todos : []
}

export default function rootReducer(state = initialState, action){
    if (action.type === CHANGE_THEME) {
        if (state.themeIsDay) {
            return {...state, themeIsDay: false}
        } else {
            return {...state, themeIsDay: true}
        } 
    } 

    if (action.type === SET_TODOS) {
        return { ...state, todos : action.payload } 
    }
    return state
}

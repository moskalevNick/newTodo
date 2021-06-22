import { SET_TODOS, CHANGE_THEME, SET_WEATHER, REG_USER } from "./types"

const initialState = {
    themeIsDay : true,
    todos : [],
    weather : {},
    regUsers : []
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
    
    if (action.type === SET_WEATHER) {
        return { ...state, weather : action.payload } 
    }

    if (action.type === REG_USER) {
        return { ...state, regUsers : action.payload } 
    }

    return state
}

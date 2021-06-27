<<<<<<< HEAD
import { SET_TODOS, CHANGE_THEME, SET_WEATHER, SET_AUTH, SET_USER, SET_LOADING } from "./types"
=======
import { SET_TODOS, CHANGE_THEME, SET_WEATHER, REG_USER } from "./types"
>>>>>>> 5838a3fde47a05a2fe41db034bc2b0dc5085ba63

const initialState = {
    themeIsDay : true,
    todos : [],
    weather : {},
<<<<<<< HEAD
    user: {},
    isAuth: false,
    isLoading: false
=======
    regUsers : []
>>>>>>> 5838a3fde47a05a2fe41db034bc2b0dc5085ba63
}

export default function rootReducer(state = initialState, action){
    if (action.type === CHANGE_THEME) {
        return { ...state, themeIsDay : action.payload }
    } 

    if (action.type === SET_TODOS) {
        return { ...state, todos : action.payload } 
    }
    
    if (action.type === SET_WEATHER) {
        return { ...state, weather : action.payload } 
    }

<<<<<<< HEAD
    if (action.type === SET_AUTH) {
        return { ...state, isAuth : action.payload } 
    }

    if (action.type === SET_USER) {
        return { ...state, user : action.payload } 
    }

    if (action.type === SET_LOADING) {
        return { ...state, isLoading : action.payload } 
=======
    if (action.type === REG_USER) {
        return { ...state, regUsers : action.payload } 
>>>>>>> 5838a3fde47a05a2fe41db034bc2b0dc5085ba63
    }

    return state
}

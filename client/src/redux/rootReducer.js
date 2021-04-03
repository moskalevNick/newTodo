import { CHANGE_THEME } from "./types"

const initialThemeValue = {
    value : "light"
}

export function rootReducer(state = initialThemeValue, action){
    if (action.type === CHANGE_THEME) {
        if (state.value === "light") {
            state.value = "dark"
        } else if (state.value === "dark"){
            state.value = "light"
        } 
    }
    return state
}

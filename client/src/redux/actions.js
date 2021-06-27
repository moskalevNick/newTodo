import axios from 'axios';

import { SET_TODOS, CHANGE_THEME, SET_WEATHER, SET_LOADING, SET_AUTH, SET_USER } from "./types"
import AuthService from "../services/AuthService";
import TodoService from '../services/TodoService';

export const changeTheme = (value) => ({
  type: CHANGE_THEME,
  payload: value
})

export const setLoading = (value) => ({
  type: SET_LOADING,
  payload: value
})

export const setAuth = (value) => ({
  type: SET_AUTH,
  payload: value
})

export const setUser = (value) => ({
  type: SET_USER,
  payload: value
})

export const setTodos = () => {
  return async dispatch => {
    const data = await AuthService.getTodos();
    dispatch({
    	type : SET_TODOS,
      payload : data
    });   
  };
};

export const removeTodo = (id) => async dispatch => {
  try{
    await TodoService.removeTodo(id)
    const data = await AuthService.getTodos()
    dispatch({
      type : SET_TODOS,
      payload : data
    }); 
  } catch (e) {
    console.log(e.response?.data?.message);
  }
};

export const addTodo = ( title ) => async dispatch => {
  try{
    await TodoService.addTodo(title);
    const data = await AuthService.getTodos();
    dispatch({
      type : SET_TODOS,
      payload : data
  	}); 
  } catch (e) {
    console.log(e.response?.data?.message);
  }
};

export const changeTodo = (id, type) => async dispatch => {
	try{
    await TodoService.changeTodo(id, type); 
    const data = await AuthService.getTodos();
      dispatch({
        type : SET_TODOS,
        payload : data
      });   
	} catch (e) {
    console.log(e.response?.data?.message);
  }
}

export const removeAllChecked = () => async dispatch => {
	try{
    await TodoService.removeAllChecked()	
		const data = await AuthService.getTodos()
    dispatch({
      type : SET_TODOS,
      payload : data
    }); 
	}catch (e){
    console.log(e.response?.data?.message);
  }
}

export const fetchData = (city) => async dispatch => {
  const weatherURL = process.env.REACT_APP_API_URL_WEATHER + city + process.env.REACT_APP_API_URL_WEATHER_2
  try {
    const responce = await fetch(weatherURL)
    const data = await responce.json()
    if ( data.cod === '404' ) {
      
    }
    dispatch({
      type : SET_WEATHER,
      payload : data
    })
  }catch(e){
    console.log('error');
  }  
}

export const login = (email, password) => async dispatch => {
  try {
      const response = await AuthService.login(email, password);
      localStorage.setItem('token', response.data.accessToken);
      dispatch(setAuth(true))
      dispatch(setUser(response.data.user))
  } catch (e) {
      console.log(e.response?.data?.message);
  }
}

export const registration = (email, password) => async dispatch => {
  try {
      const response = await AuthService.registration(email, password);
      localStorage.setItem('token', response.data.accessToken);
      dispatch(setAuth(true))
      dispatch(setUser(response.data.user))
  } catch (e) {
      console.log(e.response?.data?.message);
  }
}

export const logout = () => async dispatch => {
  try {
    await AuthService.logout();
    localStorage.removeItem('token');
    dispatch(setAuth(false))
    dispatch(setUser({}))
  } catch (e) {
    console.log(e.response?.data?.message);
  }
}

export const checkAuth = () => async dispatch => {
  dispatch(setLoading(true))
  try {
    const response = await axios.get(`${ process.env.REACT_APP_API_URL}/api/refresh`, {withCredentials: true})
    localStorage.setItem('token', response.data.accessToken);
    dispatch(setAuth(true))
    dispatch(setUser(response.data.user))
  } catch (e) {
    console.log(e.response?.data?.message);
  } finally {
    dispatch(setLoading(false))
  }
}
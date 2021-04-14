import { SET_TODOS, CHANGE_THEME, SET_WEATHER } from "./types"

const uri = process.env.REACT_APP_API_URL

export function changeTheme() {
  return {
    type : CHANGE_THEME
  }
}

export const setTodos = () => {
  return async dispatch => {
    const response = await fetch(uri) 
    const data = await response.json()
    dispatch({
    	type : SET_TODOS,
      payload : data
    });   
  };
};

export const removeTodo = (id) => {
  return async dispatch => {
    const response = await fetch(`${uri}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    const data = await response.json()
    dispatch({
      type : SET_TODOS,
      payload : data
    }); 
  };
};

export const addTodo = ( todo ) => {
  return async dispatch => {
    const response = await fetch(uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(todo),
    })
    const data = await response.json()
    dispatch({
      type : SET_TODOS,
      payload : data
  	}); 
  };
};

export const changeTodo = (id, type) => {
	return async dispatch => {
	  const response = await fetch(`${uri}/${id}`, {
	  	method: "PUT",
	  	headers: {
	  		"Content-Type": "application/json",
	  		Accept: "application/json",
	  	},
	  	body: JSON.stringify({ type: type }),
	  })
	  const data = await response.json()
		dispatch({
      type : SET_TODOS,
      payload : data
  	}); 
	}
}

export const removeAllChecked = () => {
	return async dispatch => {
		const response = await fetch(uri, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
		const data = await response.json()
		dispatch({
      type : SET_TODOS,
      payload : data
  	}); 
	}
}

export const fetchData = (city) => {
  const weatherURL = process.env.REACT_APP_API_URL_WEATHER + city + process.env.REACT_APP_API_URL_WEATHER_2
  return async dispatch => {
    const responce = await fetch(weatherURL)
    const data = await responce.json()
    dispatch({
      type : SET_WEATHER,
      payload : data
    })  
  }
}
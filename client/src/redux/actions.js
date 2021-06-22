import { SET_TODOS, CHANGE_THEME, SET_WEATHER, REG_USER } from "./types"

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
}

export const registrationUser = ( user ) => {
  return async dispatch => {
    const response = await fetch(`${uri}/api/registration`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    })
    const data = await response.json()
    dispatch({
      type : REG_USER,
     payload : data
  	});  
  };
};

export const loginUser = ( user ) => {
  return async () => {
    const response = await fetch(`${uri}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    })
    const data = await response.json()
    localStorage.setItem('token', data.accessToken)
  };
};

export const logout = () => {
  return async () => {
    await fetch(`${uri}/api/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    })
  };
};
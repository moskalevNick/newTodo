import React, {useState} from "react"
import {useDispatch} from 'react-redux'
import {IonButton, IonLabel, IonItem, IonInput, IonRouterLink} from "@ionic/react"
import "./styles.css"
import {loginUser} from '../../redux/actions'

const Auth = () => {
  const [inputEmailValue, setInputEmailValue] = useState("")
	const [inputPasswordValue, setInputPasswordValue] = useState("")
	
  const dispatch = useDispatch()

  const login = () => {
    dispatch(loginUser( { email: inputEmailValue, password: inputPasswordValue } ))
    setInputEmailValue('')
    setInputPasswordValue('') 
  }  

	return (
    <div className="loginContainer">
      <IonItem >
        <IonLabel className="ionItem" position="floating">Login</IonLabel>
        <IonInput 
          value={inputEmailValue} 
          onIonChange={(e) => {
            setInputEmailValue(e.target.value)
          }}
        />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput
          type="password" 
          value={inputPasswordValue} 
          onIonChange={(e) => {
            setInputPasswordValue(e.target.value)
          }}
        />
      </IonItem>
      <IonButton 
        expand="block"
        onClick={login}
      >
        Login
      </IonButton>
      <div className="noAcc">
        <IonRouterLink color="secondary" href='/registration'>I don't have an account</IonRouterLink>
      </div>
    </div>    
  )}

export default Auth
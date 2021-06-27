<<<<<<< HEAD
import {IonButton, IonLabel, IonItem, IonInput, IonRouterLink} from "@ionic/react"
import "./styles.css"
import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import { login } from '../../redux/actions';

const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 	const dispatch = useDispatch()
=======
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
>>>>>>> 5838a3fde47a05a2fe41db034bc2b0dc5085ba63

	return (
    <div className="loginContainer">
      <IonItem >
<<<<<<< HEAD
        <IonLabel 
          className="ionItem" 
          position="floating"
        >Username</IonLabel>
        <IonInput
          onIonChange={e => setEmail(e.target.value) }
          value={email}
          type="text"/>
      </IonItem>
      <IonItem>
        <IonLabel 
          position="floating"
        >Password</IonLabel>
        <IonInput
          type="password"
          onIonChange={e => setPassword(e.target.value)}
          value={password}/>
      </IonItem>
      <IonButton 
        className="ion-margin-top" 
        type="submit" 
        expand="block" 
        onClick={() => dispatch(login(email, password)) }
      >Login
=======
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
>>>>>>> 5838a3fde47a05a2fe41db034bc2b0dc5085ba63
      </IonButton>
      <div className="noAcc">
        <IonRouterLink color="secondary" href='/registration'>I don't have an account</IonRouterLink>
      </div>
    </div>    
  )}

export default Auth
import React from "react"
import {IonButton, IonLabel, IonItem, IonInput, IonRouterLink} from "@ionic/react"
import "./styles.css"

const Auth = () => {
	return (
    <div className="loginContainer">
      <IonItem >
        <IonLabel className="ionItem" position="floating">Username</IonLabel>
        <IonInput />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput type="password" />
      </IonItem>
      <IonButton className="ion-margin-top" type="submit" expand="block">
        Login
      </IonButton>
      <div className="noAcc">
        <IonRouterLink color="secondary" href='/registration'>I don't have an account</IonRouterLink>
      </div>
    </div>    
  )}

export default Auth
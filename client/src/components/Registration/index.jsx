import React from "react"
import {IonButton, IonLabel, IonItem, IonInput, IonRouterLink} from "@ionic/react"
import "./styles.css"

const Registration = () => {
	return ( 
    <div className="registrContainer">
      <IonItem >
        <IonLabel className="ionItem" position="floating">Email</IonLabel>
        <IonInput />
      </IonItem>
      <IonItem >
        <IonLabel className="ionItem" position="floating">Name</IonLabel>
        <IonInput />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput type="password" />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Replace password</IonLabel>
        <IonInput type="password" />
      </IonItem>
      <IonButton className="ion-margin-top" type="submit" expand="block">
        Registration
      </IonButton>
      <div className="noAcc">
        <IonRouterLink color="secondary" href='/auth'>I have an account</IonRouterLink>
      </div>
    </div>    
  )}

export default Registration
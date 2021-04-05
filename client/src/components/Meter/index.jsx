import React from "react"
import {IonProgressBar} from "@ionic/react"

import "./styles.css"

const Meter = ( {checkedTodo} ) => {
	return (
		<div className="meter-container">
			<IonProgressBar value={checkedTodo/100} className={"meter"}/>
		</div>
	)
}

export default Meter
import React from "react"

const Meter = ( {checkedTodo} ) => {
	return (
		<div>
			<meter 
				value={checkedTodo || 0} 
				className={"meter"} 
				max="100" 
				low="33" 
				high="66" 
				optimum="80" 
			/>
		</div>
	)
}

export default Meter
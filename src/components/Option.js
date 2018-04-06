import React from 'react';

// stateless Option Component
export const Option = (props) => {
	return (
		<li> 
			{props.optionText} 
			<button onClick={ (e) => {
				props.handleDeleteOption(props.optionText);
			}}>remove</button>
		</li>
	);
};
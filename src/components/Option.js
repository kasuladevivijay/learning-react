import React from 'react';

// stateless Option Component
export const Option = (props) => {
	return (
		<ul>
			<li> 
				{props.optionText} 
				<button onClick={ (e) => {
					props.handleDeleteOption(props.optionText);
				}}>remove</button>
			</li>
		</ul>
	);
};
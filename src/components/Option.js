import React from 'react';

// stateless Option Component
export const Option = (props) => {
	return (
		<div className='option'> 
			<p className='option__text'>
				{props.count}. {props.optionText}
			</p>
			<button 
				className='button button--link'
				onClick={ (e) => {
					props.handleDeleteOption(props.optionText);
				}}
			>Remove
			</button>
		</div>
	);
};
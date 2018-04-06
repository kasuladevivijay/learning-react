import React from 'react';
import { Option } from './Option';

// stateless Options component
export const Options = (props) => {
	return (
		<div>
			{ props.options.length === 0 && <p>Add an option to get started.</p>}
			<ul>
				{ props.options.map((option) => (
					<Option 
						key={option} 
						optionText={option}
						handleDeleteOption={props.handleDeleteOption}>
					</Option>
				) ) }
			</ul>
			<button onClick={props.handleDeleteOptions}>Remove All</button>
		</div>
	);
};
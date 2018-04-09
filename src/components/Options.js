import React from 'react';
import { Option } from './Option';

// stateless Options component
export const Options = (props) => {
	return (
		<div>
			<div className='widget-header'>
				<h3 className='widget-header__title'>Your Options</h3>
				<button 
					onClick={props.handleDeleteOptions} 
					className=' button button--link'
				>Remove All
				</button>
			</div>
			{ props.options.length === 0 && <p  className='widget-header__message'>Add an option to get started.</p>}
			<div>
				{ props.options.map((option, index) => (
					<Option 
						key={option} 
						optionText={option}
						count = {index+1}
						handleDeleteOption={props.handleDeleteOption}>
					</Option>
				) ) }
			</div>
		</div>
	);
};
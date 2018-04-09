import React from 'react';
import AddOption from './AddOption';
import { Options } from './Options';
import { Header } from './Header';
import { Action } from './Action';
import OptionModal from './OptionModal';

export default class IndecisonApp extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: 'Indecision',
			subtitle: 'Put your life in the hands of a computer.',
			options: props.options,
			selectOption: undefined
		};
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.handleDeleteSelectedOption = this.handleDeleteSelectedOption(this);
	}
	// Life Cycle methods 
	componentDidMount(){
		// fetching data
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
			if(options) {
				this.setState(() => ({ options }));
			}
		} catch (error) {
			// do nothing
		}
	}
	componentDidUpdate(prevProps, prevState){
		if(prevProps.options.length !== this.state.options.length){
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}
	componentWillUnmount(){
		// console.log('componentWillUnmount');
	}
	// handleDeleteOptions method for Options
	handleDeleteOptions(){
		this.setState(() => ({options: []}));
		localStorage.removeItem('options');
	}
	// remove a single item
	handleDeleteOption(selectedOption){
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => {
				return selectedOption !== option;
			})
		}));
	}
	// handlePick method for Action
	handlePick(){
		let randNum = Math.floor(Math.random()*this.state.options.length);
		const option = this.state.options[randNum];
		// console.log(`picked number is ${option}`);
		this.setState(()=>{
			return {
				selectOption: option
			};
		});
	}
	// handleAddOption for AddOption
	handleAddOption(option){
		if(!option){
			return 'Enter a valid value to add an item';
		}else if(this.state.options.indexOf(option) > -1){
			return 'This option already exists';
		}
		this.setState((prevState)=> ( {options: prevState.options.concat(option)} ));
	}
	// 
	handleDeleteSelectedOption(){
		this.setState(() => {
			return {
				selectOption: undefined
			};
		});
	}
	render() {
		return (
			<div>
				<Header title={this.state.title} subtitle={this.state.subtitle}></Header>
				<div className='container'>
					<Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
					<div className='widget'>
						<Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}></Options>
						<AddOption options={this.state.options} handleAddOption={this.handleAddOption}/>
					</div>
					<OptionModal 
						selectedOption={this.state.selectOption} 
						handleDeleteSelectedOption={this.handleDeleteSelectedOption} />
				</div>
			</div>
		);
	}
}
// Adding Default values to the state
IndecisonApp.defaultProps = {
	options: []
};
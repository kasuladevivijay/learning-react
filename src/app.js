// React Components
class IndecisonApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Indecision',
            subtitle: 'Put your life in the hands of a computer.',
            options: []
        };
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    // handleDeleteOptions method for Options
    handleDeleteOptions(){
        this.setState(()=>{
            return {
                options: []
            };
        });
    }
    // handlePick method for Action
    handlePick(){
        let randNum = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randNum];
        console.log(`picked number is ${option}`);
    }
    // handleAddOption for AddOption
    handleAddOption(option){
        if(!option){
            return 'Enter a valid value to add an item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }
        this.setState((prevState)=>{
            return {
                options: prevState.options.concat(option)
            };
        });
    }
    render() {
        return (
            <div>
                <Header title={this.state.title} subtitle={this.state.subtitle}></Header>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}></Options>
                <AddOption options={this.state.options} handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.subtitle}</h3>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button disabled={!this.props.hasOptions}
                        onClick={this.props.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                { this.props.options.map((option) => <Option key={option} optionText={option}></Option> ) }
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <ul>
               <li> {this.props.optionText} </li>
            </ul>
        );
    }
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(()=>{
            return {
                error: error
            }
        });
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text"  name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


const app = document.querySelector('#app');

ReactDOM.render(<IndecisonApp />, app);
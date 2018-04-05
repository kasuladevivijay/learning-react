// React Components
class IndecisonApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Indecision',
            subtitle: 'Put your life in the hands of a computer.',
            options: props.options
        };
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }
    // handleDeleteOptions method for Options
    handleDeleteOptions(){
        this.setState(() => ({options: []}));
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
        console.log(`picked number is ${option}`);
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
    render() {
        return (
            <div>
                <Header title={this.state.title} subtitle={this.state.subtitle}></Header>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}></Options>
                <AddOption options={this.state.options} handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}
// Adding Default values to the state
IndecisonApp.defaultProps = {
    options: []
}

// stateless Header component
const Header = (props) =>{
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
        </div>
    );
};

// stateless Action component
const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions}
                    onClick={props.handlePick}>What should I do?</button>
        </div>
    );
}
// stateless Options component
const Options = (props) => {
    return (
        <div>
            { props.options.map((option) => (
                <Option 
                    key={option} 
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}>
                </Option>
            ) ) }
            <button onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
    );
}
// stateless Option Component
const Option = (props) => {
    return (
        <ul>
           <li> 
            {props.optionText} 
            <button onClick={ (e) => {
                props.handleDeleteOption(props.optionText)
            }}>remove</button>
           </li>
        </ul>
    );
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
        this.setState(() => ( {error: error} ));
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

ReactDOM.render(<IndecisonApp options={['Devils Den', 'Omerta']}/>, app);
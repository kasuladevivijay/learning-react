/**
 *  Visibility toggle
 */

class Visibility extends React.Component {
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isVisible: false,
            title: 'Visibility Toggle',
            text: 'These are some details that you can see'
        };
    }
    toggle(e){
        e.preventDefault();
        this.setState((prevState)=>{
            return {
                isVisible: !prevState.isVisible
            };
        });
    }
    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <button onClick={this.toggle}>{!this.state.isVisible ? 'Show Details' : 'Hide Details'}</button>
                { this.state.isVisible && <p>{this.state.text}</p>}
            </div>
        );
    }
}

ReactDOM.render(<Visibility />, document.querySelector('#app'));


// const app = {
//     title: 'Visbility Toggle',
//     text: 'These are some details that you can see',
//     default: false
// };

// const toggle = () => {
//  app.default = !app.default;
//  render();
// };



// const appRoot = document.querySelector('#app');
// const render = () => {
//     const template = (
//         <div>
//             <h2>{app.title}</h2>
//             <button onClick={toggle}>{app.default ? 'Hide Details' : 'Show Details'}</button>
//             { app.default && <p>{app.text}</p> }
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// render();

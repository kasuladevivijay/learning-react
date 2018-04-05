/**
 *  Counter using React
 */

 class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleRemoveOne = this.handleRemoveOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        };
     }
    //  Lifecycle methods
    componentDidMount(){
        const value = localStorage.getItem('count');
        const count = parseInt(value);
        if(!isNaN(count)){
            this.setState(() => ({ count }));
        }
    }
    componentDidUpdate(prevProps, prevState){
        const value = this.state.count;
        localStorage.setItem('count', value);
    }
    //  methods
    handleAddOne(e) {
        e.preventDefault();
        this.setState((prevState)=>{
            return {
                count: prevState.count + 1
            };
        });
    }
    handleRemoveOne(e) {
        e.preventDefault();
        this.setState((prevState)=>{
            return {
                count: prevState.count - 1
            };
        });
    }
    reset(e) {
        e.preventDefault();
        this.setState((prevState)=>{
            return {
                count: 0
            };
        });
    }
     render(){
         return (
             <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleRemoveOne}>-1</button>
                <button onClick={this.reset}>reset</button>
             </div>
         );
     }
 }

 ReactDOM.render(<Counter />, document.querySelector('#app'));




// let count = 0;
// const actions = {
//     addOne: () => { 
//         count++;
//         console.log('addOne');
//         // manual data binding by calling the render
//         renderCounterApp();
//      },
//     minusOne: () => { 
//         console.log('minusOne'); 
//         count--;
//         renderCounterApp();
//     },
//     reset: () => { 
//         console.log('reset');
//         count = 0;
//         renderCounterApp(); 
//     }
// };


// const appRoot = document.querySelector('#app');

// const renderCounterApp = () => {
//     const template3 = (
//         <div>
//             <h2>Count: {count}</h2>
//             <button onClick={actions.addOne}>+1</button>
//             <button onClick={actions.minusOne}>-1</button>
//             <button onClick={actions.reset}>reset</button>
//         </div>
//     );

//     ReactDOM.render(template3, appRoot);
// }

// // render it atleast once
// renderCounterApp();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *  Counter using React
 */

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.handleAddOne = _this.handleAddOne.bind(_this);
        _this.handleRemoveOne = _this.handleRemoveOne.bind(_this);
        _this.reset = _this.reset.bind(_this);
        _this.state = {
            count: 0
        };
        return _this;
    }
    //  Lifecycle methods


    _createClass(Counter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var value = localStorage.getItem('count');
            var count = parseInt(value);
            if (!isNaN(count)) {
                this.setState(function () {
                    return { count: count };
                });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            var value = this.state.count;
            localStorage.setItem('count', value);
        }
        //  methods

    }, {
        key: 'handleAddOne',
        value: function handleAddOne(e) {
            e.preventDefault();
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: 'handleRemoveOne',
        value: function handleRemoveOne(e) {
            e.preventDefault();
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
        }
    }, {
        key: 'reset',
        value: function reset(e) {
            e.preventDefault();
            this.setState(function (prevState) {
                return {
                    count: 0
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Count: ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleAddOne },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleRemoveOne },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.reset },
                    'reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.querySelector('#app'));

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

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// React Components
var IndecisonApp = function (_React$Component) {
    _inherits(IndecisonApp, _React$Component);

    function IndecisonApp(props) {
        _classCallCheck(this, IndecisonApp);

        var _this = _possibleConstructorReturn(this, (IndecisonApp.__proto__ || Object.getPrototypeOf(IndecisonApp)).call(this, props));

        _this.state = {
            title: 'Indecision',
            subtitle: 'Put your life in the hands of a computer.',
            options: props.options
        };
        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        return _this;
    }
    // handleDeleteOptions method for Options


    _createClass(IndecisonApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
        // remove a single item

    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(selectedOption) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return selectedOption !== option;
                    })
                };
            });
        }
        // handlePick method for Action

    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randNum];
            console.log('picked number is ' + option);
        }
        // handleAddOption for AddOption

    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter a valid value to add an item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists';
            }
            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: this.state.title, subtitle: this.state.subtitle }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0, handlePick: this.handlePick }),
                React.createElement(Options, { options: this.state.options, handleDeleteOptions: this.handleDeleteOptions, handleDeleteOption: this.handleDeleteOption }),
                React.createElement(AddOption, { options: this.state.options, handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisonApp;
}(React.Component);
// Adding Default values to the state


IndecisonApp.defaultProps = {
    options: []

    // stateless Header component
};var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h3',
            null,
            props.subtitle
        )
    );
};

// stateless Action component
var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { disabled: !props.hasOptions,
                onClick: props.handlePick },
            'What should I do?'
        )
    );
};
// stateless Options component
var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                optionText: option,
                handleDeleteOption: props.handleDeleteOption });
        }),
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove All'
        )
    );
};
// stateless Option Component
var Option = function Option(props) {
    return React.createElement(
        'ul',
        null,
        React.createElement(
            'li',
            null,
            props.optionText,
            React.createElement(
                'button',
                { onClick: function onClick(e) {
                        props.handleDeleteOption(props.optionText);
                    } },
                'remove'
            )
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);
            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var app = document.querySelector('#app');

ReactDOM.render(React.createElement(IndecisonApp, { options: ['Devils Den', 'Omerta'] }), app);

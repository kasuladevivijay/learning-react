console.log('App.js running!');

// JSX syntax
const app = {
    title: 'React Tutorial',
    subTitle: 'Learning from Udemy',
    options: []
};

const onFormSubmit = (e) => {
// prevent refreshing the page
e.preventDefault();

const option = e.target.elements.option.value;

if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
}

};

const removeOptions = () => {
    app.options = [];
    renderApp();
};

const makeDecision = () => {
    let randNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randNum];
    console.log(option);
};


// event handling
const appRoot = document.querySelector('#app');

const renderApp = () => {
    const template = (
        <div>
            <h3>{app.title}</h3>
            { (app.subTitle) && <p>{app.subTitle}</p> }
            <p>{app.options.length > 0 ? 'Here are your options' : 'No Options!'}</p>
            <button disabled={!app.options.length} onClick={makeDecision}>Make a decision</button>
            <ol>
                {app.options.map((option)=>{
                    return <li key={option}>{option}</li>
                })}
            </ol>
            <button onClick={removeOptions}>Remove All</button>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderApp();    



// Conditional rendendering using if-else
/** const getLocation = (location) => {
    if(location) {
        return <p>Location: {location}</p>;
    }
};

const user = {
    name: 'Vijay Kumar',
    age: 26,
    location: 'Mumbai'
};
const template2 = (
    <div>
        <h4>{user.name ? user.name : 'Anonymous'}</h4>
        { user.age >=18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
*/
// ES6 exports and imports
console.log('person file running');

const isAdult = (age) => {
    if(age >18){
        return `The person is an adult`;
    }
};

const canDrink = (age) => {
    if(age > 21){
        return `The person can drink`;
    }
};

// export the functions - default export or named exports

export { isAdult, canDrink};

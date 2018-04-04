const multiplier = {
    numbers: [2,3,5,6],
    multiplyBy: 4,
    multiply(){
        return this.numbers.map((number)=> number*this.multiplyBy);
    }
};

console.log(multiplier.multiply());

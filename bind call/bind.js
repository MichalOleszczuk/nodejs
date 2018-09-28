Function.prototype.bind2ES5 = function(caller, ...args){
    let self = this;
    return function(...args2){
        return self.call(caller, ...args, ...args2);
    };
};

Function.prototype.bind2 = function(caller, ...args){
    return (...args2) => this.call(caller, ...args, ...args2);
};

const class1 = {
    name: '1'
};

const class2 = {
    name: '2'
};

function log(...a){
    console.log(this.name, ...a)
    return 0;
}

console.log(log.bind2(class1, 2, 3)(4,5))
console.log(log.bind2ES5(class1, 2, 3)(4,5))
console.log(log.bind(class1, 2, 3)(4,5))
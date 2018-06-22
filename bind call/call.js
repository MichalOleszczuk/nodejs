Function.prototype.call2 = function(){
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

// console.log(log.call2(class1))
console.log(log.call(class1, 2, 3))
const stack = [];
stack.push(1);       // push
stack.push(2);
let top = stack[stack.length-1]; // peek
let x = stack.pop(); // pop
console.log(top);
console.log(x);
console.log(stack);
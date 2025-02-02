number in the array
let arr = [ 2, ,1, 6, 9, 3, 8];
const output = arr.reduce((pre, curr) =>{
    return pre > curr ? pre :curr;
})
console.log(output);
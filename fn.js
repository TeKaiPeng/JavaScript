// function add(x, y){
//     return x + y;
// }
// function multiply(x, y){
//     return x * y;
// }

// console.log(multiply(add(1, 2), 11))

let res50 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
res50[0] = 100;

for(var i = 2; i < res50.length; i += 2) {
    let result = res50[i] + 1;
    console.log('I got a number', result)
}
console.log(i)
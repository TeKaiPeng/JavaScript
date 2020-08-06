let pp = console.log

// cook('beef', 'water', putInPot);
// cook('chicken', 'coconut', boomboom);
cook('beef', 
     'water', 
     i => console.log(`${x} in pot`))
cook('beef', 
     'water', 
     i => console.log(`cooking ${x}`))



function cook(i1, i2, f){
    f(i1)
    f(i2)
    console.log(`I make dinner with ${i1}`)
}

// putInPot('beef');
// putInPot('water');
// console.log('I make dinner with beer')

// boomboom('chicken');
// boomboom('coconut');
// console.log('I make dinner with chicken')


function putInPot(x) {
    console.log(`${x} in pot`)
}
    
function boomboom(x){
    console.log(`cooking ${x}`)
}


// ES6
// let addOne = function(x){return x + 1}
// let addOne = (x, y) => x + y + 1
// let addOne2 = x => x + 1

// [1, 2, 3].map(function(x) {return x + 1})


[1, 2, 3, 4, 5].map(x => x + 1)
[1, 2, 3, 4, 5].select(x => x > 3)
[1, 2, 3, 4, 5].reduce(x, acc => x + acc)

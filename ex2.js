var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
    };

var sum = 0;

for (var v of Object.values(fruit)){
    sum += v;
}

console.log(sum);
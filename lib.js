function sum(numbers){
    return numbers.reduce((prev, curr)=>prev+curr, 0);
}

function avg(numbers){
    return sum(numbers)/numbers.length;
}

function max(numbers){
    let m =numbers[0];
    for(let i = 1; i<numbers.length; i++) if (m < numbers[i]) m =numbers[i];
    return m;
}

function med(numbers){
    let len = numbers.length;
    numbers.sort(function(a, b){ return a-b; });
    if(len%2) return numbers[parseInt(len/2)];
    else return (numbers[len/2-1]+numbers[len/2])/2;
}

module.exports = {
    sum,
    avg,
    max
}

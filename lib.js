function sum(numbers){
    return numbers.reduce((prev, curr)=>prev+curr, 0);
}

function avg(numbers){
    return sum(numbers)/numbers.length + 1;
}

function max(numbers){
    let m =numbers[0];
    for(let i = 1; i<numbers.length; i++) if (m < numbers[i]) m =numbers[i];
    return m;
}

module.exports = {
    sum,
    avg,
    max
}
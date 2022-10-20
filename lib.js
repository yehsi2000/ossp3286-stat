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

function q3(numbers){
    let len = numbers.length;
    let halflen = parseInt(len/2);
    numbers.sort(function(a, b){ return a-b; });
    if(len%2) return med(numbers.slice(halflen+1,len));
    else return med(numbers.slice(halflen,len));
}

function q1(numbers){
    let len = numbers.length;
    let halflen = parseInt(len/2);
    numbers.sort(function(a, b){ return a-b; });
    if(len%2) return med(numbers.slice(0,halflen));
    else return med(numbers.slice(0,halflen));
}

function iqr(numbers){
    return q3(numbers)-q1(numbers);
}

function outlier(numbers){
    let originNumbers = numbers;
    let outliers = originNumbers.filter(num => {
        if( num < q1(numbers)-iqr(numbers)*1.5 || num > q3(numbers)+iqr(numbers)*1.5) return num;
    });
    return outliers;
}

module.exports = {
    sum,
    avg,
    max,
    med,
    iqr,
    outlier
}

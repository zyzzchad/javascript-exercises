const fibonacci = function(num) {
    if(num<0){
        return "OOPS"
    }
    Number(num)
    let firstnum=0;
    let secondnum=1;
    let fib=[secondnum]
    let sum=0
    
    for(let i=1;i<=num;i++){
        sum=firstnum+secondnum
        fib.push(sum)
        firstnum=secondnum
        secondnum=sum
    }
    return fib[num-1]
   
};

// Do not edit below this line
module.exports = fibonacci;

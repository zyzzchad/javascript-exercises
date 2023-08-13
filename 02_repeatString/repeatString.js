const repeatString = function(string,num) {
    let result=""
    if(num>=1){
        for (let i=1; i<=num;i++){
            result=result.concat(string)
        }
    }
    else if(num<0){
        result="ERROR"
    }
    else{
        result=""
    }
    
    return result
};

// Do not edit below this line
module.exports = repeatString;

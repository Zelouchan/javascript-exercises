const sumAll = function(num1, num2 ) {
    let sum = 0;
    let error = 'ERROR';

// Check for problems with input
    if ((num2 <= 0) || (num1 <= 0)) 
        return error;
        
        if ((!Number.isInteger(num1)) || (!Number.isInteger(num2))) 
            return error;
            
            if ((typeof num2 !== "number") || (typeof num1 !== "number")) 
                return error;

// Sorts the highest and lowest number
        let big = Math.max(num1, num2);
        let small = Math.min(num1, num2);
   
// actual loop that does the calculations
                    for (let i = small; i <= big; i++)
                    {sum += i;} return sum;    

};

module.exports = sumAll;

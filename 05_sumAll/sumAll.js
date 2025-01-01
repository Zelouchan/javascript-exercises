const sumAll = function(num1, num2 ) {
    let sum = 0;
    let error = 'ERROR';

// Sorts the highest and lowest number
    let big = Math.max(num1, num2);
    let small = Math.min(num1, num2);

// Check for problems with input
    if ((big <= 0) || (small <= 0)) return error;
    if ((!Number.isInteger(small)) || (!Number.isInteger(big))) return error;
    if ((typeof big !== "number") || (typeof small !== "number")) return error;
   
// actual loop that does the calculations
    else  if ((big <= 0) || (small <= 0)) return error; 
            for (let i = small; i <= big; i++)
        {sum += i} return sum;    

};

module.exports = sumAll;

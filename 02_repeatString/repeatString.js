const repeatString = function(x, y) {
  var hey = '';
if (y <= -1) {
    return "ERROR"
}
  
  for (var a = 0; a < y; a++)
     {
    hey += x;}
    
  return hey; 

};

// Do not edit below this line
module.exports = repeatString;
'use strict';

var encoder = function(phrase){
  //code your solution here
  let result = "";
  for(const char of phrase)
  {
    result += String.fromCharCode(char.charCodeAt(0) + 5);
  }
  result = result.split("").reverse().join("");
  return result;
};

module.exports = encoder;

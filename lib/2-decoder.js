'use strict';

var decoder = function(encoded){
  //code your solution here
  const reversed = encoded.split('').reverse().join('');
  let result = "";
  for(const char of reversed)
  {
    result += String.fromCharCode(char.charCodeAt(0) - 5);
  }
  return result;
};


module.exports = decoder;

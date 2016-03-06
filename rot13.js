function rot13(str) {
  var arr = str.split();
  var charArr = [];
  for (var i = 0; i < arr[0].length; i++){
    charArr.push(arr[0][i].charCodeAt());
  }
  
  var shiftedNums = charArr.map(shift);
  
  function shift(num) {
    if (num < 64 || num > 90)
      return num;
    else if (num < 78) {
      return num + 13;
    }
    else {
      return num - 13;
    }
  }

  var decodedArr = shiftedNums.map(function(num){
    return String.fromCharCode(num);
  });
  
  return decodedArr.join("");
}

rot13("WNINFPEVCG");

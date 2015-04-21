FIZZ = "Fizz";

function process(limit) {
  var result = [];
  for (var i = 1; i<=limit; i++) {
    if(i == 3){
      result.push(FIZZ);
    }else{
      result.push(i);
    }
  }
  return result;
}

module.exports = {
  process: process
}

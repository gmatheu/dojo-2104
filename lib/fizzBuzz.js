FIZZ = "Fizz";
BUZZ = "Buzz";
FIZZBUZZ = "FizzBuzz"
function process(limit) {
  var result = [];
  for (var i = 1; i<=limit; i++) {
    result.push(processNumber(i));
  }
  return result;
}
function processNumber(input){
  var isDivisibleBy3 = isDivisibleBy(input,3);
  if(isDivisibleBy3 && isDivisibleBy(input,5)){
      return FIZZBUZZ;
    }
    else if(isDivisibleBy3){
      return FIZZ;
    }
    else if(isDivisibleBy(input,5)){
      return BUZZ;
    }
    else if (input.toString().match(/3/)) {
      return FIZZ;
    }
    else if (input.toString().match(/5/)) {
      return BUZZ;
    }
    return input;

}

function isDivisibleBy(num,mod){
    return (num % mod == 0);
}

module.exports = {
  process: process
}

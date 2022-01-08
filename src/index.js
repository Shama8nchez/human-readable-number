module.exports = function toReadable (number) {
  let arr1 = ['zero' , 'one' , 'two' , 'three' , 'four' , 'five' , 'six' , 'seven' , 'eight' , 'nine' , 'ten' , 'eleven' , 'twelve' , 'thirteen' , 'fourteen' , 'fifteen' , 'sixteen' , 'seventeen' , 'eighteen' , 'nineteen' , 'twenty'];
  let arr2 = ['zero' , 'ten' , 'twenty' , 'thirty' , 'forty' , 'fifty' , 'sixty' , 'seventy' , 'eighty' , 'ninety'];
  if (number <= 20) {
    return arr1[number];
  }
  else if (number > 20 && number <=99) {
    let num1 = Math.floor(number / 10);
    let num2 = number % 10;
    if (num2 == 0) {
      return arr2[num1];
    }
    else {
    return arr2[num1] + ' ' + arr1[num2];
  }
  }
  else {
    if (number % 100 == 0) {
      let num = number/100;
      return arr1[num] +' hundred';
    }
    else {
      return arr1[Math.floor(number/100)] + ' hundred ' + toReadable(number%100);
    }
  }

}


//slice method
var foods = [ "pizza", "burger", "fingerChips", "donuts", "springRoll" ];

var modifiedFood = foods.slice(1,4);
console.log(modifiedFood);


//splice method
var foods = [ "pizza", "burger", "fingerChips", "donuts", "springRoll" ];
 foods.splice(2, 0, "noodles", "icecream");
console.log(foods);

//find even numbers
const numberArray = [12,324,213,4,2,3,45,4234];
function isEven(numberArray){
var result = numberArray.filter(x => x % 2 == 0)
console.log(result);

}

//find prime numbers
const numberArray1 = [12,324,213,4,2,3,45,4234];
const isPrime = n => {
    if (n===1){
    return false;
    }else if(n === 2){
       return true;
    }else{
       for(let x = 2; x < n; x++){
          if(n % x === 0){
             return false;
          }
       }
       return true;
    };
 };
 const filterPrime = numberArray1 => {
   const filtered = numberArray1.filter(el => isPrime(el));
  return filtered;
 };
 console.log(filterPrime(numberArray1));

//non prime numbers
/*const filterPrime = numberArray => {
    const filtered = numberArray.filter(el => !isPrime(el));
   return filtered;
  };
  console.log(filterPrime(numberArray));*/
 

//Square of Numbers
const arr = [11, 34, 20, 5, 53, 16];

        function findSquareOfNumbers(arr) {
            return arr.map(function(i) {
              return i * i;
            })
          
          }
          console.log(findSquareOfNumbers(arr))

        //multiplication of array
        var array2 = [1,2,3];
       
        function multiply(array2){
            var a=2;
        for(var i=0;i<array2.length;i++){
    var sum = array2.reduce((i,a) => {
        return i * a;
    },1);
    console.log(sum);
    
}
}

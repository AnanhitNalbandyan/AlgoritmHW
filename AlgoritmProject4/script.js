/*const arr=[1, 56, 78, 22,-66, -3, 4 ]
let k = 78
function Algoritm(arr, k){
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] === k) {
         return true
        
       }
        
    }
    return -1;
}
const arr=[1, 56, 78, 22,-66, -3, 4 ]
let k = 78
function Algoritm(arr, k){
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] === k) {
         return i
       }
        
    }
    return -1
}
arr()
*/
function linerSearch (){
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(`Sum = ${getNumber(arr,2)}`);}
  function getNumber (arr, number){
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === number) {
       return true; 
      }
    }
    return false
  }
  linerSearch()

const a =+ prompt("input 3 numbers");
const b =+ prompt("input 3 numbers");
const c=+ prompt("input 3 numbers");
let sum = 0;
sum = a + b +c;
console.log(sum)
    

/*
START
READ function sum() 
FOR i = 0 to 3 read i
PRINT SUM
END

*/ 

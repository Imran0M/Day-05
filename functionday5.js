// // 1.print the odd numbers in the array
// let array = [1,2,3,4,5,6,7,8,9,10];
// let newArray=[];
// for(let i=0; i<=array.length; i++){
//      if(array[i]%2==1){
//         newArray+= array[i] +' '
//      }
// }
// console.log(newArray);

// // output:1 3 5 7 9

// // 2.convert all the string to title caps in the string arrays

// // 3.sum of the numbers in the array

// let sumArray = [1,2,3,4,5,6,7,8,9,10];
// let sum=0;
// for(let i=0; i<sumArray.length; i++){
//     sum = sum +sumArray[i];
// }
// console.log(sum)

// // output: 55

// // 4.write all prime numbers in array.

// let primeNumbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// let result=''
// for(let i=0; i<primeNumbers.length; i++){
//     if(primeNumbers[i]%2==1){
//         result+= primeNumbers[i]+' '
//     }
// }
// console.log(result)
// // 5.write all palindromes into an array

// let palindromes=[1,2,3,3,2,1]
// let returnPalindrome='';
// for(let i=0; i<palindromes.length; i++){
//     returnPalindrome+= palindromes[i]+' '
// }
// console.log(returnPalindrome.trim())

// // output: 1 2 3 3 2 1

// do arrow function

// print odd numbers in array

// let array= [1,2,3,4,5,6,7,8,9]
// let emptyArray=[];
//  odd=()=>{
//     for(let i=0; i<array.length; i++){
//         if(array[i]%2==1){
//            emptyArray.push(array[i])
//         }
//     }
// }
// odd()
// console.log(emptyArray)

// output 
// [1, 3, 5, 7, 9]

// print sum using arrow function

// let num= [1,2,3,4,5,6,87,8,9]
// let add=0;
// sum=()=>{
//    for(let i=0; i<num.length; i++){
//     add= add+ num[i]
//    }
// }
// sum()
// console.log(add)

// output
// 125

// print palindrome in arrow function

// let pali =[1,2,3,3,2,1]

// let repali=[];

// paline=()=>{
//     for(let i=pali.length-1; i>=0; i--){
//         repali.push(pali[i]+' ')
//     }
// }
// paline()
// console.log(repali)
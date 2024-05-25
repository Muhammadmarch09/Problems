// write a function that reverse a string 
function reverseString(str){
    let reverseStr = ""
    for(let i =str.length -1 ;i>=0;i--){
        
        reverseStr += str[i]
        
    }
    return reverseStr

}
// let result = reverseString("Hello")
// console.log(result)

// Write a FizzBuzz function 
function fizzbuzz(){
    for(let i =0;i<=100;i++){
        if(i%3==0 & i%5 == 0){
            console.log("FizzBuzz")
        }
        else if(i%3 == 0){
            console.log("Fizz")
        }
        else if(i%5 == 0){
            console.log("Buzz")
        }
        else{
            console.log(i)
        }
    }
}
// fizzbuzz()

// Write a function that return the largest number from an Array 

function largestNumber(arr){
let largest = arr[0]
for(let i = 1;i<arr.length;i++){
    if(largest<arr[i]){
        largest = arr[i]

    }
    

}
return largest
}
myArray = [1,3,5,6,3,1]
// let resultArr = largestNumber(myArray)
// console.log(resultArr)

// Make a function that check a string is palindrom 
 
function ispalindrom(str){
    let reverseStr = str.split("").reverse().join("")
    if(str == reverseStr){
        return `Yes ${str} is palindrom`

    }
    else{
        return `No ${str} isn't palindrom`
    }
}
// let result = ispalindrom("eye")
// console.log(result)
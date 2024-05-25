// write a function that reverse a string 
function reverseString(str){
    let reverseStr = ""
    for(let i =str.length -1 ;i>=0;i--){
        
        reverseStr += str[i]
        
    }
    return reverseStr

}
let result = reverseString("Hello")
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

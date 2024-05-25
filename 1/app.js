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

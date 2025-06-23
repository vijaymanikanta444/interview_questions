// PROBLEM STATMENT : 
// Given a string s containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid.

// ✅ A string is valid if:

// Open brackets are closed by the same type of brackets.
// Open brackets are closed in the correct order.
// Every closing bracket has a corresponding open bracket of the same type.

const isValidParantheses = (s) => {
    const stack =[];
    const mapper = {
        ')' : '(',
        ']' : '[',
        '}' : '{',
    }

for(let item of s){
    if(['(', '[', '{'].includes(item)){
        stack.push(item)
    }else{
        if(mapper[item] !== stack.pop()){
           return false 
        }
    }
}
return stack.length === 0
} 

console.log(isValidParantheses("()"));        // true
console.log(isValidParantheses("()[]{}"));    // true
console.log(isValidParantheses("(]"));        // false
console.log(isValidParantheses("([)]"));      // false
console.log(isValidParantheses("{[]}"));      // true
// ✅ Problem Statement
// Given a string like:
// "aaaabbbcdddgssbbb"
// You need to compress it as:
// "4a3b1c3d1g2s3b"
// (count of each group of consecutive same characters, followed by the character)

const getCharCount = (str) => {
  if (str.length === 0) {
    return "send proper string";
  }
//   let result = "";
  let count = 1;
  const arr = []

  for(let i = 1; i <= str.length; i++){
    if(str[i] === str[i - 1]){
        count++
    }else{
        result = result + count + str[i - 1]
        arr.push(count + str[i - 1])
        count = 1

    }
  }
//   return `${str} => ${result}`
return `${str} => ${arr.join('_')}`
};

console.log(getCharCount("aaaabbbcdddgssbbb"));
console.log(getCharCount(""));
console.log(getCharCount("aaaaaaaaaaa1aaaaaaa"));

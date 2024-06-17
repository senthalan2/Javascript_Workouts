const reverseTheWords = (str) => {
  let result = "";
  let tempStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      tempStr = tempStr + str[i];
    } else {
      result = " " + tempStr + result;
      tempStr = "";
    }
  }
  result = tempStr + result;
  return result;
};

console.log(reverseTheWords("my name is senthalan"));

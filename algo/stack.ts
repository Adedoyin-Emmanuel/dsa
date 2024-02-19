/**
 * @description Stack is a linear type of  Data Structure that follows the
 * LIFO specification. Last In, First out
 */

// we can implement this using a palindrome function

const isPalindrome = (word: string) => {
  let reversedWord = "";
  let stack: string[] = [];

  for (let i = 0; i < word.length; i++) {
    stack.push(word[i]);
  }

  for (let i = 0; i < word.length; i++) {
    reversedWord += stack.pop();
  }

  console.log(word);
  console.log(reversedWord);
  console.log(stack);
};

isPalindrome("Emma");

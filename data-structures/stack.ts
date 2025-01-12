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

  if (word.toLocaleLowerCase() === reversedWord.toLocaleLowerCase()) {
    console.log(`${word} is palindrome`);
  } else {
    console.log(`${word} is not palindrome`);
  }
};

/**
 * We can actually use an array as a stack but an array doesn't provide all the
 * methods for a stack, so let's build one.
 */

class Stack {
  public length: number = 0;
  private store: {} = {};

  constructor() {}

  push(element: string | number): void {
    this.store[this.length] = element;
    this.length++;
  }

  pop(): string | number | undefined {
    if (this.length === 0) return undefined;
    this.length--;
    const result = this.store[this.length];
    delete this.store[this.length];

    return result;
  }

  size(): number {
    return this.length;
  }

  peek(): void {
    return this.store[this.length - 1];
  }
}

const myStack = new Stack();

myStack.push(28);
myStack.push(22);
myStack.push("Emmanuel");
myStack.push("Adedoyin");

const lastElement = myStack.pop();

//console.log(myStack.peek());

//now we can use our stack to rewrite the palindrome function

const isPalindrome2 = (word: string): void => {
  if (!word) console.log(`Please enter a word`);

  let reversedWord = "";
  const stack = new Stack();

  for (let i = 0; i < word.length; i++) {
    stack.push(word[i]);
  }

  for (let i = 0; i < word.length; i++) {
    reversedWord += stack.pop();
  }

  if (word.toLowerCase() === reversedWord.toLowerCase()) {
    console.log(`${word} is a palindrome`);
  } else {
    console.log(`${word} is not a palindrome`);
  }
};

isPalindrome2("total");
isPalindrome2("tot");
isPalindrome2("Tot");
isPalindrome2("racecar");

/**
 * @description The Queue is a linear Data structure is that follows the FIFO principle. The Queue for example is just like the normal queue at Justrite or Shoprite or Abula (Iya Alamala (BUKA)). Where the first person to get on the queue is the first to get out or get attended to. Unlike the stack which follows the LIFO principle.
 * */

class MyQueue {
  private collection;

  constructor() {
    this.collection = [];
  }

  public length() {
    return this.collection.length;
  }

  public enqueue(element) {
    this.collection.push(element);
  }

  public dequeue() {
    const removedElement = this.collection.shift();

    return removedElement;
  }

  public first() {
    return this.collection[0];
  }
}

const queue = new MyQueue();

queue.enqueue("Emmanuel");
queue.enqueue("Gift");

console.log(queue.first());

queue.dequeue();

console.log(queue.length());
console.log(queue.first());

queue.enqueue("Emmanuel");

console.log(queue.length());
console.log(queue.first());
queue.dequeue();
queue.enqueue("Gift");

console.log(queue.first());

console.log(queue.length());

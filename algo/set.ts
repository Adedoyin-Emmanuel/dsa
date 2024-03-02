// Let's try to implement a set

class MySet {
  private collection;

  constructor() {
    this.collection = [];
  }

  public length = () => {
    return this.collection.length;
  };

  public has = (element) => {
    return this.collection.indexOf(element) !== -1;
  };

  public add = (element) => {
    // check for duplicate
    if (this.has(element)) return false;
    this.collection.push(element);
    return true;
  };

  public remove = (element) => {
    if (!this.has(element)) return false;

    const index = this.collection.indexOf(element);

    this.collection.splice(index, 1);

    return true;
  };
}

const set1 = new MySet();

set1.add("ant");
set1.add("bata");

console.log(set1.remove("ant"));

console.log(set1.length());

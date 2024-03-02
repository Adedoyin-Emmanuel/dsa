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

  public values = () => {
    return this.collection;
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

  public intersection = (set) => {
    const firstSet = this.collection;
    const intersectionSet = new MySet();

    firstSet.forEach((element, index) => {
      if (set.has(element)) {
        intersectionSet.add(element);
      }
    });

    return intersectionSet;
  };

  public union = (set) => {
    const firstSet = this.values();
    const secondSet = set.values();
    const unionSet = new MySet();

    firstSet.forEach((element, index) => {
      unionSet.add(element);
    });

    secondSet.forEach((element, index) => {
      unionSet.add(element);
    });

    return unionSet;
  };
}

const set1 = new MySet();

set1.add("ant");
set1.add("bata");

const set2 = new MySet();

set2.add("baba");
set2.add("m4a1");

set2.add("ant");
set2.add("bata");
set1.add("baba");
set1.add("m4a1");

const result = set1.union(set2);

console.log(result.length());
console.log(result.values());

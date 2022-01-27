class NumberStore {
  data: number;
}

class StringStore {
  data: string;
}

// class AnyStore {
//   data: any;
// }

class Store<T> {
  data: T;

  getStore(): T {
    // T:type, U, V,T1,T2,T3
    return this.data;
  }
}

let stringData = new Store<string>();

let numberData = new Store<number>();

let booleanData = new Store<boolean>();

function hello<T>(keyword: T) {
  console.log(`legs : ${keyword}`);
}

hello<string>('Hello, Tao!');
hello<number>(10000);

class Component<T, U> {
  name: T;
  created: U;
}

let component = new Component<string, number>();

component.created = 20200401;

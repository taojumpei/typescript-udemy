// アロー関数
// () => {};
let add = (x1: number, x2: number): number => {
  return x1 + x2;
};
console.log(add(1, 3));

let hello = (name) => `Hello, ${name}!`;
console.log(hello('Tao'));

document.getElementById('button1').addEventListener('click', function () {
  console.log(this);
});

document.getElementById('button1').addEventListener('click', () => {
  console.log(this);
});

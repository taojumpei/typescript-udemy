// スプレッド演算子
let categories = ['post', 'news', 'info'];
// ...categories

// 複製
let copyCat = [...categories];
// console.log(copyCat, copyCat === categories);

// 連結
let pushCat = ['other', ...categories];
// console.log(pushCat);

let unshiftCat = [...categories, 'other'];
// console.log(unshiftCat);

// 挿入
let insertCat = ['other', ...categories, 'Q&A'];
// console.log(insertCat);

// マージ
let mergeCat = [...categories, ...copyCat];
// console.log(mergeCat);

// オブジェクト
let post = { id: 1, content: 'dummy', created: '2020-01-01' };

let copyObj = { ...post };
// console.log(copyObj);

let pushObj = { ...post, updated: '2020-04-05' };
// console.log(pushObj);

let mergeObj = { ...post, pushObj };
// console.log(mergeObj);

let test = { ...categories };

console.log(test);

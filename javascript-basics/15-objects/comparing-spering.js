const first = { a: 1, b: 2 };
const second = { b: 1, a: 2, };


console.assert(
  Object.keys(first).length === Object.keys(second).length
  && Object.keys(first).every(e => first[e] === second[e])
);

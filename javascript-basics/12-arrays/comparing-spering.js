const first = [1, 2, 3, 4];
const second = [1, 2, 3, 4];

console.assert(
  first.length === second.length
  && first.every((e, i) => e === second[i])
);

//TODO Some

const numbers = [1, 2, 3, 7, 5];
const hasEvenNumber = numbers.some((n) => n % 2 === 0);

const currentUserRoles = ["user", "editor"];
const featureAccessRoles = ["admin", "manager"];

const canAccess = currentUserRoles.some((v) => featureAccessRoles.includes(v));

//TODO Array.from()
const arr = Array.from({ length: 5 }, (_, i) => i + 1); //? .fill(2)
const arr2 = Array.from([1, 3, 5, 7], (value, i) => value * value);

//TODO make range(python) in js
const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil(stop - start) / step },
    (_, i) => start + i * step,
  );
console.log(range(4, 8, 2));

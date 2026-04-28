//TODO Some

const numbers = [1, 2, 3, 7, 5];
const hasEvenNumber = numbers.some((n) => n % 2 === 0);

const currentUserRoles = ["user", "editor"];
const featureAccessRoles = ["admin", "manager"];

const canAccess = currentUserRoles.some((v) => featureAccessRoles.includes(v));

//TODO Array.from()

// problem-1
const sumArray = (nums: number[]): number => {
  return nums.reduce((acc, current) => acc + current, 0);
};
sumArray([1, 2, 3, 4, 5]);

// problem-2
const removeDuplicates = (nums: number[]): number[] => {
  const noDuplicates: number[] = [];
  nums.forEach((n) => {
    if (!noDuplicates.includes(n)) {
      noDuplicates.push(n);
    }
  });
  return noDuplicates;
};

removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

// problem-3
const countWordOccurrences = (str: string, value: string): number => {
  const splitSentence: string[] = str.split(" ");
  let count: number = 0;
  splitSentence.forEach((s: string) => {
    if (s.toLocaleLowerCase() === value.toLocaleLowerCase()) {
      count++;
    }
  });

  return count;
};
countWordOccurrences(
  "typescript I typescript typescript love Typescript",
  "typescript"
);

// problem-4
interface Circle {
  shape: string;
  radius: number;
}
interface Rectangle {
  shape: string;
  width: number;
  height: number;
}

const calculateShapeArea = (obj: Circle | Rectangle): number => {
  if ("radius" in obj) {
    return parseFloat((Math.PI * obj.radius * obj.radius).toFixed(2));
  } else {
    return obj.width * obj.height;
  }
};

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

// problem-5
const person = { name: "Alice", age: 30 };

const getProperty = <X extends { name: string }, Y extends keyof X>(
  user: X,
  key: Y
) => {
  return user[key];
};

console.log(getProperty(person, "name"));

// problem-6
interface Profile {
  name: string;
  age: number;
  email: string;
}
const myProfile: Profile = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};

const updateProfile = (obj: Profile, update: object) => {
  return { ...obj, ...update };
};
updateProfile(myProfile, { age: 26 });

// problem-7
class Car {
  constructor(public make: string, public model: string, public year: number) {}

  getCarYear(): number {
    return new Date().getFullYear() - this.year;
  }
}
const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarYear());

// problem-8
const validateKeys = <T>(obj: T, keys: (keyof T)[]) : boolean => {
    return keys.every((key) => key in (obj as object))   
}
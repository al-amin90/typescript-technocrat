// -----------task 1
type CartItem = {
  name: string;
  price: number;
  quantity?: number;
};

const calculateTotal = (item: CartItem[]) => {
  let total;
  item?.forEach((i) => {
    const { price, quantity = 1 } = i;
    total = +price * quantity;
  });
  return total;
};

// -----------task 2

type Person = { name: string; age: number };
type JobDetails = { role: string; salary: number };

type Employee = Person & JobDetails;

const getProfile = (employee: Employee) =>
  `Name: ${employee.name} , Role: ${employee.role}`;

// -----------task 3

type UserResponse = {
  info?: {
    address?: {
      zipCode?: string;
    };
  };
};

const getZipCode = (user: UserResponse) =>
  user?.info?.address?.zipCode ?? "00000";

// -----------task 4

let secretValue: unknown = "typescript is awesome";
let upperValue = (secretValue as string).toUpperCase();

// -----------task 5

const logLength = <T extends { length: number }>(input: T) => input.length;

// -----------task 6

const product = { id: 101, name: "Keyboard", price: 50 };
const getProductProp = <T, K extends keyof T>(obj: T, key: K) => obj[key];

// -----------task 7

const Colors = {
  Primary: "RED",
  Secondary: "BLUE",
} as const;

type ValidColor = (typeof Colors)[keyof typeof Colors];
const setColor = (c: ValidColor) => c;

// -----------task 8
interface MyDocument {
  title: string;
  content: string;
  author: string;
}

type Draft<T> = {
  readonly [K in keyof T]?: T[K];
};

const data: Draft<MyDocument> = {
  title: "weee",
  content: "w",
};

// -----------task 9

type DataType<T> = T extends any[] ? "Large" : "Small";

const task9: DataType<Number[]> = "Large";

// -----------task 10
interface UserAccount {
  id: number;
  username: string;
  password: string;
}

type PublicUser = Omit<UserAccount, "password">;

console.log("setColor", setColor(Colors.Primary));

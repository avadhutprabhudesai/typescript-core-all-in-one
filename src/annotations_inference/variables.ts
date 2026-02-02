const variables = () => {
  /**
   *
   * Curriculum
   * - Type annotations: We tell TS about type information
   *      - Primitive types: string, number, boolean, null, undefined, symbol, bigint
   *      - Object types: arrays, functions, objects, classes, interfaces, type aliases
   * - Type inference: TS tries to guess type information
   */

  /**
   * ================= Type annotaions =================
   */

  // Primitive types
  let username: string = "john_doe";
  let age: number = 30;
  let isAdmin: boolean = false;
  let userSymbol: symbol = Symbol("user");
  let bigNumber: bigint = 9007199254741991n;
  let nullableValue: null = null;
  let undefinedValue: undefined = undefined;

  // Built-in Object types
  let date: Date = new Date();

  // Array type
  let scores: number[] = [95, 85, 76];
  let names: string[] = ["Alice", "Bob", "Charlie"];
  let places: string[] = ["New York", "Los Angeles", "Chicago"];

  //Object literal
  let point: { x: number; y: number } = { x: 10, y: 20 };

  // Function type
  let logContent: (c: string) => void = (cont: string) => {
    console.log(cont);
  };

  /**
   * 3 cases where we have to provide type annotations
   *
   * 1. When a variable is declared but not initialized
   * 2. When a function returns 'any' type
   * 3. When we want a variable to have a type that cannot be inferred correctly
   *
   */

  //1. Variable declared but not initialized
  let isFound: boolean; // If we do not provide type annotation, TS infers it as 'any'
  isFound = true;

  //2. Function that returns 'any' type
  var a: { x: number; y: number } = JSON.parse('{"x": 10, "y": 20}'); // JSON.parse returns 'any' type so we have to explicitly provide type annotation for 'a'

  //3. Variable whose type cannot be inferred correctly
  let numbers = [1, -2, 3]; // TS infers this as number[]
  let numberAboveZero: boolean | number = false; // We want this variable to hold either boolean or number
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      numberAboveZero = numbers[i];
      break;
    }
  }

  /**
   * ================ Type inference =================
   *
   * 1. When variable declaration and initialization are done together
   * 2. When function return type can be inferred from return statements
   * 3. Undeclared variables get 'any' type
   */

  // When variable declaration and initialization are done together, TS infers the type
  const inferredString = "I am inferred as string";

  // Function return type can be inferred from return statements
  function add(a: number, b: number) {
    return a + b; // TS infers the return type as number
  }

  // Undeclared variables get 'any' type (***not recommended***)
  let uninferredNumber; // This will have type as 'any'
  uninferredNumber = 42;

  uninferredNumber = "another string";
};

export default variables;

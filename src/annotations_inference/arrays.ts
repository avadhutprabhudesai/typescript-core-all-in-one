const arrays = () => {
  /**
   * Curriculum
   * 1. Untyped Arrays
   * 2. 1D Arrays
   * 3. 2D Arrays
   * 4. Arrays containing multiple types
   */

  // 1. Untyped Arrays
  let untypedArray = []; // TypeScript infers this as 'any[]' which defeats the purpose of using TypeScript

  // 2. 1D Arrays
  let fruits: string[] = ["Apple", "Banana", "Orange"];
  let scores: number[] = [95, 85, 76];
  let mixedArray: (string | number)[] = ["Alice", 30, "Bob", 25];

  // 3. 2D Arrays
  let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  let stringAndNumberMatrix: (string | number)[][] = [
    ["Alice", 30],
    ["Bob", 25],
    ["Charlie", 28],
  ];

  // 4. Arrays containing multiple types
  let diverseArray: (string | number | boolean)[] = ["Alice", 30, true];
};

export default arrays;

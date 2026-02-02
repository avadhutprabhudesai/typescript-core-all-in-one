const tuples = () => {
  /**
   * 1. Basic Tuple Declaration
   * 2. Tuple with declared type
   */

  // 1. Basic Tuple Declaration
  let rgb: [number, number, number] = [255, 0, 0]; // RGB for Red color

  // Accessing tuple elements
  let red = rgb[0];
  let green = rgb[1];
  let blue = rgb[2];

  console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);

  // 2. Tuple with declared type
  type Person = [string, number, boolean];
  let person: Person = ["Alice", 30, true]; // [name, age, isEmployed]
};

export default tuples;

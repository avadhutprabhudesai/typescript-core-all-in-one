const interfaces = () => {
  /**
   * =========== Interfaces ===========
   * 1. An interface is a custom type that defines the structure of an OBJECT.
   * 2. Intefaces only work with OBJECTS.
   * 3. Interfaces are used to define the shape of data, ensuring that objects adhere to a specific structure.
   * 4. Interfaces can be extended, allowing for the creation of complex types based on simpler ones.
   * 5. Interfaces support optional properties and readonly properties.
   * 6. Interfaces can define methods that objects must implement.
   * 7. Interfaces can be used to describe the shape of function types.
   * 8. Interfaces can be merged, allowing for the extension of existing interfaces.
   * 9. Interfaces are a powerful way to enforce type safety and create reusable code structures in TypeScript.
   */

  //Basic Interface
  interface Person {
    name: string;
    age: number;
  }

  const Person: Person = {
    name: "Avadhut",
    age: 26,
  };

  console.log("Person:", Person);

  // Interfaces can be extended
  interface Employee extends Person {
    employeeId: string;
  }

  const employee: Employee = {
    name: "Avadhut",
    age: 26,
    employeeId: "EMP001",
  };

  console.log("Extended Employee:", employee);

  // Optional Properties
  interface Car {
    make: string;
    model: string;
    year?: number; // Optional property
  }

  const myCar: Car = {
    make: "Toyota",
    model: "Camry",
  };

  console.log("Car with optional property:", myCar);

  // Readonly Properties
  interface Book {
    readonly title: string;
    readonly author: string;
  }
  const myBook: Book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  };

  console.log("Book with readonly properties:", myBook);
  //myBook.title = "New Title"; // Error: Cannot assign to 'title' because it is a read-only property.

  // Method Definitions
  interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
  }

  const myCalculator: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
  };

  console.log("Calculator Add:", myCalculator.add(5, 3));
  console.log("Calculator Subtract:", myCalculator.subtract(5, 3));

  // Function Types
  interface StringManipulator {
    (input: string): string;
  }

  const toUpperCase: StringManipulator = (input) => input.toUpperCase();

  console.log("String Manipulator:", toUpperCase("hello"));

  // Interface Merging
  interface Animal {
    name: string;
  }

  interface Animal {
    age: number;
  }

  const myAnimal: Animal = {
    name: "Lion",
    age: 5,
  };

  console.log("Merged Interface Animal:", myAnimal);
};

console.log("\n\n===== Interfaces =====");

interfaces();

export default interfaces;

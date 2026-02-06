const classes = () => {
  /**
   * ============= Classes in TypeScript =============
   * 1. Fields and Methods
   * 2. Access modifiers public, private, protected
   * 3. Extending Classes (Inheritance)
   * 4. Constructors
   */

  //1. Fields and Methods
  class Animal {
    isMammal: boolean = true; // Field
  }

  const dog = new Animal();
  console.log("Is Dog a Mammal?", dog.isMammal);

  // 2. Access Modifiers
  class Person {
    public name: string; // Public field
    private age: number; // Private field

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  const person = new Person("John", 26);
  console.log("Person Name:", person.name);
  //   console.log("Person Age:", person.age); // Typescript Error: Property 'age' is private

  // 3. Extending Classes (Inheritance)
  class Employee extends Person {
    employeeId: string;
    constructor(name: string, age: number, employeeId: string) {
      super(name, age);
      this.employeeId = employeeId;
    }
  }

  const employee = new Employee("Alice", 30, "EMP001");
  console.log("Employee Name:", employee.name);
  console.log("Employee ID:", employee.employeeId);
};

console.log("\n\n===== Classes =====");
classes();

const objects = () => {
  /**
   * Object declarations with type annotations in TypeScript
   *
   */

  const profile = {
    name: "John Doe",
    age: 28,
    isEmployed: true,
    summarise(): string {
      return `${this.name}, Age: ${this.age}, Employed: ${this.isEmployed}`;
    },
  };

  //Destructuring with type annotations
  const {
    name,
    age,
    isEmployed,
  }: { name: string; age: number; isEmployed: boolean } = profile;

  console.log("Profile Summary:", profile.summarise());
  console.log(`Name: ${name}, Age: ${age}, Employed: ${isEmployed}`);
};

export default objects;

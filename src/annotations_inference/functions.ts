const functions = () => {
  /**
   * ============== ALWAYS SPECIFY TYPE ANNOTATIONS FOR FUNCTION ARGUMENTS AND RETURN VALUES ==============
   *
   * We can annotate functions in 2 ways:
   * 1. We can type the function signature directly
   * 2. We can type the parameters and return type separately
   */

  // 1. Typing the function signature directly
  let add: (a: number, b: number) => number = function (
    x: number,
    y: number,
  ): number {
    return x + y;
  };

  // 2. Typing the parameters and return type separately
  const multiply = (x: number, y: number): number => {
    return x * y;
  };

  /**
   * ================ Destructuring function parameters =================
   *
   * We can also provide type annotations while destructuring function parameters
   */
  const logWeather = ({ date, temp }: { date: Date; temp: number }): void => {
    console.log(`Date: ${date}, Temp: ${temp}`);
  };
  const todaysWeather = { date: new Date(), temp: 25 };

  logWeather(todaysWeather);
};

export default functions;

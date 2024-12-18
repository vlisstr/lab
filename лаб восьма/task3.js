const contract = (fn, ...types) => {
    return (...args) => {
      if (args.length !== types.length - 1) {
        throw new TypeError('Invalid number of arguments');
      }
  
      args.forEach((arg, index) => {
        if (typeof arg !== types[index].name.toLowerCase()) {
          throw new TypeError(`Argument ${index + 1} must be of type ${types[index].name}`);
        }
      });
  
      const result = fn(...args);
      const resultType = types[types.length - 1];
      if (typeof result !== resultType.name.toLowerCase()) {
        throw new TypeError(`Result must be of type ${resultType.name}`);
      }
  
      return result;
    };
  };
  
  const add = (a, b) => a + b;
  const addNumbers = contract(add, Number, Number, Number);
  console.log(addNumbers(2, 3)); 
  const concat = (s1, s2) => s1 + s2;
  const concatStrings = contract(concat, String, String, String);
  console.log(concatStrings('Hello ', 'world!')); 
  
function seq(...funcs) {
    const chain = [...funcs];
  
    function wrapper(arg) {
      if (typeof arg === 'function') {
        chain.push(arg);
        return wrapper;
      }
      return chain.reduce((result, func) => func(result), arg);
    }
  
    return wrapper;
  }
  
  console.log(
    seq(x => x + 7)
      (x => x * 2)(5) // результат: 17
  );
  
  console.log(
    seq(x => x * 2)
      (x => x + 7)(5) // результат: 24
  );
  
  console.log(
    seq(x => x + 1)
      (x => x * 2)
      (x => x / 3)
      (x => x - 4)(7) // результат: 3
  );
  
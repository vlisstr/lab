const pipe = (...fns) => {
    if (!fns.every(fn => typeof fn === 'function')) {
      throw new Error('All arguments must be functions');
    }
    return x => fns.reduce((acc, fn) => fn(acc), x);
  };
  
  const inc = x => ++x;
  const twice = x =>
  
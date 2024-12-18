const composeWithErrors = (...fns) => {
    if (!fns.every(fn => typeof fn === 'function')) {
      throw new Error('All arguments must be functions');
    }
  
    const listeners = [];
    const on = (event, callback) => {
      if (event === 'error') listeners.push(callback);
    };
  
    const composed = x => {
      try {
        return fns.reduceRight((acc, fn) => fn(acc), x);
      } catch (error) {
        listeners.forEach(listener => listener(error));
        return undefined;
      }
    };
  
    composed.on = on;
    return composed;
  };
  
  const faulty = x => {
    if (x === 0) throw new Error('Division by zero');
    return 1 / x;
  };
  
  const g = composeWithErrors(cube, faulty, twice);
  
  g.on('error', e => console.error('Error caught:', e.message));
  
  console.log(g(5)); 
  console.log(g(0)); 
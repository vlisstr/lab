function sumWhile(...args) {
    let total = 0;
    let i = 0;
    while (i < args.length) {
      total += args[i];
      i++;
    }
    return total;
  }
  console.log(sumWhile(1, 2, 3)); 
  
function sumReduce(...args) {
    return args.reduce((total, num) => total + num, 0);
  }
  console.log(sumReduce(1, 2, 3));
  
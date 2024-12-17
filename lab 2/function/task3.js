
function average(a, b) {
    return (a + b) / 2;
  }
  
  function square(x) {
    return x ** 2;
  }
  
  function cube(x) {
    return x ** 3;
  }
  
  function calculate() {
    const results = [];
    for (let i = 0; i <= 9; i++) {
      const sq = square(i);
      const cb = cube(i);
      results.push(average(sq, cb));
    }
    return results;
  }
  console.log(calculate());
  
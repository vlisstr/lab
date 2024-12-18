function random(min, max) {
    if (max === undefined) {
      max = min;
      min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Приклади:
  console.log(random(5, 10)); // випадкове число от 5 до 10
  console.log(random(10));    // випадкове число от 0 до 10
  
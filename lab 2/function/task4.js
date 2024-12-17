// Робота з об'єктами
function fn() {
    const obj1 = { name: "John" };
    let obj2 = { name: "Doe" };
  
    obj1.name = "Jane";
    obj2.name = "Smith";
    obj2 = { name: "Mike" };
  
    console.log(obj1, obj2);
  }
  fn();
  
  function createUser(name, city) {
    return { name, city };
  }
  console.log(createUser("Marcus Aurelius", "Roma"));
  
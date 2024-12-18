function array() {
    const storage = [];
  
    function wrapper(index) {
      return storage[index];
    }
  
    wrapper.push = value => storage.push(value);
    wrapper.pop = () => storage.pop();
  
    return wrapper;
  }
  
  const arr = array();
  
  arr.push('first');
  arr.push('second');
  arr.push('third');
  
  console.log(arr(0));
  console.log(arr(1)); 
  
  console.log(arr.pop()); 
  console.log(arr.pop()); 
  console.log(arr.pop()); 
  
  console.log(arr.pop()); 
  
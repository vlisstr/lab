const difference = (array1, array2) => array1.filter(item => !array2.includes(item));

const array5 = [7, -2, 10, 5, 0];
const array6 = [0, 10];
console.log(difference(array5, array6)); 

const array7 = ['Beijing', 'Kiev'];
const array8 = ['Kiev', 'London', 'Baghdad'];
console.log(difference(array7, array8)); 

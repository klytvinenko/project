/*const obj = {
  name : 'test',
  age: 18,
  color: {
    border:'black',
    bg: 'red'
  },
  width: 1024
};

console.log(obj.name); */

const arr = [2, 3, 6, 8, 10];

arr.forEach(function(item, i , arr){
  console.log(`${i}: ${item} внутри массива ${arr}`);
});
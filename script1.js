const fs = require('fs');

const fileName = process.argv[2];

const data = fs.readFileSync(fileName, 'utf8', (error, data) => {
  if (error) {
      console.error(error.message);
      return ;
  }
}).split(' ').map(string => parseInt(string));

class Comparator{
  constructor() {
    this.number = 0
  }
}

const comparator = new Comparator;

function program(arr, k) {
  let result = false;
  for(let i = 0; i < arr.length; i++){
    for(let j = 1; j < arr.length; j++){
      comparator.number++
      if(arr[i]+arr[j] == k){
        result = true
      }
    }
  }
  console.log(comparator.number)
  return result
}

console.log(program(data, 18))
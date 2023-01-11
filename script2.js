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

function programm(arr) {
  let buildingCount = 0
  for( let i = 0; i < arr.length; i++){
    let temp = true
    for(let j = i+1; j < arr.length; j++){
      comparator.number++
      if(arr[i] < arr[j]){
        temp = false
      }
    }
    if(temp){
      buildingCount++
    }
  }
  console.log(`Numbers of buildings can see sunset : ${buildingCount}. Numbers of comparisons : ${comparator.number}`)
}

programm(data)
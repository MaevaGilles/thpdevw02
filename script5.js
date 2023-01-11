const fs = require('fs');

const fileName = process.argv[2];

const data = fs.readFileSync(fileName, 'utf8', (error, data) => {
  if (error) {
      console.error(error.message);
      return ;
  }
}).split(' ').map(string => parseInt(string));
class Verification{
  constructor(list,k){
    this.list  = list
    this.k     = k
    this.count = 0
    this.programm(this.list,this.k)
  }

  programm(list,k){
    let tempArray = []
    tempArray.push(k - list[0])
    for (let i = 1; i < list.length; i++){
      this.count++;
      if (tempArray.includes(list[i])) {
        return console.log(true+`, number of comparisons: ${this.count}`);
      } else {
        tempArray.push(k - list[i]);
      }
    }
    return console.log(false+`, number of comparisons: ${this.count}`);
  }
}

new Verification(data,8)
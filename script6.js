const fs = require('fs');

const fileName = process.argv[2];

const data = fs.readFileSync(fileName, 'utf8', (error, data) => {
  if (error) {
      console.error(error.message);
      return ;
  }
}).split(' ').map(string => parseInt(string));

class HowManyBuilding{
  constructor(list){
    this.list          = list
    this.count         = 0
    this.buildings     = []
    this.programm(this.list)
  }

  programm(list){
    this.buildings.push(list[list.length-1])
    for (let i=list.length-2; i>=0; i--){
      this.count++
      if(list[i]>this.buildings[this.buildings.length-1]){
        this.buildings.push(list[i])
      }
    }
    return console.log(`Numbers of buildings can see sunset : ${this.buildings.length}. Numbers of comparisons : ${this.count}`)
  }
}

new HowManyBuilding(data)
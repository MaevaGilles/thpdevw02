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
    this.buildingCount = 0
    this.programm(this.list)
  }

  programm(list,n=0){
    let temp = true
    for(let i = n+1;i<list.length; i++){
      this.count++
      if(list[n]<list[i]){
        temp = false
      }
    }
    if(temp){
      this.buildingCount++
    }
    if(n>=list.length-1){
      return console.log(`Numbers of buildings can see sunset : ${this.buildingCount}. Numbers of comparisons : ${this.count}`)
    }else{
      return this.programm(this.list,n+1)
    }
  }
}

new HowManyBuilding(data)
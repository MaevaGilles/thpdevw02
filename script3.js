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
    this.programm(this.list)
  }

  programm(list,n=0){
    let newlist = [...list]
    newlist.splice(n,1)
    for(let i=0; i < newlist.length; i++){
      this.count++
      if (list[n]+newlist[i] == this.k){
        return console.log(true+`, number of comparisons: ${this.count}`) 
      }else if(n == list.length-1){
        return console.log(false+`, number of comparisons: ${this.count}`)
      }
    }
    return this.programm(this.list,n+1)
  }
}

new Verification(data,19)
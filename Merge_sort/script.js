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

const mergeComparator = new Comparator;

function mergeSort(arr) {
  
  if (arr.length === 1) {
    // Si la taille de l'entrée est inférieure à 2, elle est déjà triée.
    return arr;
  }

  const middle = Math.floor(arr.length / 2); //Récupere le plus grand entier au dessus de la moitier de la longeur du arr
  const left = arr.slice(0, middle); // Fait un tableau de chaque moitier
  const right = arr.slice(middle);

  // Appel récursif de la fonction de tri fusion pour chaque moitié.
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [], leftIndex = 0, rightIndex = 0;
  
  while (leftIndex < left.length && rightIndex < right.length) {

    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
    mergeComparator.number++
  }

  
  // Concaténation des éléments restants des tableaux gauche et droit
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

mergeSort(data);
console.log(`Tri fusion: ${mergeComparator.number} comparaisons -`, mergeSort(data))
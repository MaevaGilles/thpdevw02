const fs = require('fs');

function selectionSort(arr) {
    let comparisonCount = 0;
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            comparisonCount++;
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return {arr:arr,count:comparisonCount};
}

if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}

const fileName = process.argv[2];
fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) throw err;
    let numbers = data.split('\n').map(Number);
    numbers.pop();
    let result = selectionSort(numbers);
    console.log('Algorithme utilisé: tri par sélection');
    console.log('Nombre de comparaisons effectuées: ' + result.count);
    console.log('Tableau trié: ' + result.arr);
});
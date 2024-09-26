const arrays = [[1, 2], [3, 4], [5, 6]];


const flatArray = arrays.reduce((acc, curr) => acc.concat(curr), [])


console.log(flatArray);
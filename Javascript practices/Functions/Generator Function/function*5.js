function* paginate(data, pageSize){
    let startIndex = 0

    while(startIndex < data.length){
        yield data.slice(startIndex, startIndex + pageSize)
        startIndex += pageSize
    }
}

const allrecord = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]
const pageLimit = 10

const pagination = paginate(allrecord, pageLimit)

console.log('Page 1 ' + pagination.next().value);
console.log('Page 2 ' + pagination.next().value);
console.log('Page 3 ' + pagination.next().value);
console.log('Page 4 ' + pagination.next().value);
console.log('Page 5 ' + pagination.next().value);
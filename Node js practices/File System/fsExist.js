const fs = require('fs')

if(fs.existsSync('myFile.txt')){
    console.log('File exists')
} else {
    console.log('File does not exist')
}
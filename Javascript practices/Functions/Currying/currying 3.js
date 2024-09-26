function volume(length){
    return function(width){
        return function(height){
            return length*width*height
        }
    }
}

const calculatedVolume = volume(5)(4)(3)
console.log(calculatedVolume)
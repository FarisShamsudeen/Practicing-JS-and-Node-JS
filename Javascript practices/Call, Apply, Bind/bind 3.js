function logCurrentTime() {
    console.log(new Date());
}

const boundLogTime = logCurrentTime.bind(null)

boundLogTime()
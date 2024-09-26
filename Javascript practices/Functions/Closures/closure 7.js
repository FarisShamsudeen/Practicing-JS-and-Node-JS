function createScoreTracker(){
    let score = 0
    return{
        getScore: function(){
            return score
        },
        addPoints: function(newPoints){
            score += newPoints
        }
    }
}



const scoreTracker = createScoreTracker();
scoreTracker.addPoints(10);
console.log(scoreTracker.getScore());  // Output: 10
scoreTracker.addPoints(20);
console.log(scoreTracker.getScore());  // Output: 30

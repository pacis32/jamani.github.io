

"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
module.exports = {findTotalScores, findTotalPlayerPoints }; //add all of your function names here that you need for the node mocha tests

 
const player1 = { jersey: 8, stats: [{ game: 1, points: 6 }, { game: 2, points: 7 }] };
const player2 = { jersey: 12, stats: [{ game: 1, points: 16 }, { game: 2, points: 14 }] };
const player3 = { jersey: 6, stats: [{ game: 1, points: 10 }, { game: 2, points: 6 }] };
const teamStats = [player1, player2, player3];


/*Be sure to use meaningful variable names and write JSdoc comments for findTotalScores and any helper functions such as findTotalPlayerPoints.
Try to use map and reduce in your functions as appropriate. */


 function findTotalScores(teamStatisticsArr) {

//     const  totalScores=[];
//     for(let player of teamStatisticsArr){
//         totalScores.push({jersey: player.jersey, total:findTotalPlayerPoints(player)});
       
//     }

// return totalScores;

return teamStatisticsArr.map(player => {
     return{jersey:player.jersey,  total
        :  findTotalPlayerPoints(player)}} );

 }



function findTotalPlayerPoints(player) {
// let totalPoints=0;
// for (let game of player.stats) {
//     totalPoints +=game.points;
// }
//return totalPoints
return player.stats.reduce((sum, curr)=>sum+=curr.points,0)
;

}
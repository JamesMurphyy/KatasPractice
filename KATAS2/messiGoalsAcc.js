/*
Messi goals function
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17
*/

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

const goals = (...goalsArray) => goalsArray.reduce((a, b) => a + b);

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return [...arguments].reduce((a, b) => a + b);
}

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  return Array.from(arguments).reduce((a, b) => a + b, 0);
}

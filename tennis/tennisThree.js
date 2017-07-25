/**
 * Refactor TennisGame scoring system.
 * Main tennis scoring rules:
 * 1. A game is won by the first player to have won at least four points in total
 *    and at least two points more than the opponent.
 * 2. The running score of each game is described in a manner peculiar to tennis:
 *    scores from zero to three points are described as "Love", "Fifteen", "Thirty", and "Forty" respectively.
 * 3. If at least three points have been scored by each player, and the scores are equal, the score is "Deuce".
 * 4. If at least three points have been scored by each side and a player has one more point than his opponent,
 *    the score of the game is "Advantage" for the player in the lead.
 * You need only report the score for the current game. Sets and Matches are out of scope.
 */
var TennisGame = function(p1N, p2N) {
  this.p2 = 0;
  this.p1 = 0;

  this.p1N = p1N;
  this.p2N = p2N;
};

TennisGame.prototype.getScore = function() {
  var s;
  if ((this.p1 < 4 && this.p2 < 4) && (this.p1 + this.p2 < 6)) {
    var p = ["Love", "Fifteen", "Thirty", "Forty"];
    s = p[this.p1];
    return (this.p1 == this.p2) ? s + "-All" : s + "-" + p[this.p2];
  } else {
    if (this.p1 == this.p2)
      return "Deuce";
    s = this.p1 > this.p2 ? this.p1N : this.p2N;
    return ((this.p1 - this.p2) * (this.p1 - this.p2) == 1) ? "Advantage " + s : "Win for " + s;
  }
};

TennisGame.prototype.wonPoint = function(playerName) {
  if (playerName == "player1")
    this.p1 += 1;
  else
    this.p2 += 1;

};

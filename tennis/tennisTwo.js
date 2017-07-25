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
var TennisGame = function(player1Name, player2Name) {
  this.P1point = 0;
  this.P2point = 0;

  this.P1res = "";
  this.P2res = "";

  this.player1Name = player1Name;
  this.player2Name = player2Name;
};

TennisGame.prototype.getScore = function() {
  var score = "";

  if (this.P1point === this.P2point && this.P1point < 3) {
    if (this.P1point === 0)
      score = "Love";
    if (this.P1point === 1)
      score = "Fifteen";
    if (this.P1point === 2)
      score = "Thirty";
    score += "-All";
  }
  if (this.P1point === this.P2point && this.P1point > 2)
    score = "Deuce";

  if (this.P1point > 0 && this.P2point === 0) {
    if (this.P1point === 1)
      this.P1res = "Fifteen";
    if (this.P1point === 2)
      this.P1res = "Thirty";
    if (this.P1point === 3)
      this.P1res = "Forty";

    this.P2res = "Love";
    score = this.P1res + "-" + this.P2res;
  }
  if (this.P2point > 0 && this.P1point === 0) {
    if (this.P2point === 1)
      this.P2res = "Fifteen";
    if (this.P2point === 2)
      this.P2res = "Thirty";
    if (this.P2point === 3)
      this.P2res = "Forty";

    this.P1res = "Love";
    score = this.P1res + "-" + this.P2res;
  }

  if (this.P1point > this.P2point && this.P1point < 4) {
    if (this.P1point === 2)
      this.P1res = "Thirty";
    if (this.P1point === 3)
      this.P1res = "Forty";
    if (this.P2point === 1)
      this.P2res = "Fifteen";
    if (this.P2point === 2)
      this.P2res = "Thirty";
    score = this.P1res + "-" + this.P2res;
  }
  if (this.P2point > this.P1point && this.P2point < 4) {
    if (this.P2point === 2)
      this.P2res = "Thirty";
    if (this.P2point === 3)
      this.P2res = "Forty";
    if (this.P1point === 1)
      this.P1res = "Fifteen";
    if (this.P1point === 2)
      this.P1res = "Thirty";
    score = this.P1res + "-" + this.P2res;
  }

  if (this.P1point > this.P2point && this.P2point >= 3) {
    score = "Advantage player1";
  }

  if (this.P2point > this.P1point && this.P1point >= 3) {
    score = "Advantage player2";
  }

  if (this.P1point >= 4 && this.P2point >= 0 && (this.P1point - this.P2point) >= 2) {
    score = "Win for player1";
  }
  if (this.P2point >= 4 && this.P1point >= 0 && (this.P2point - this.P1point) >= 2) {
    score = "Win for player2";
  }
  return score;
};

TennisGame.prototype.SetP1Score = function(number) {
  var i;
  for (i = 0; i < number; i++) {
    this.P1Score();
  }
};

TennisGame.prototype.SetP2Score = function(number) {
  var i;
  for (i = 0; i < number; i++) {
    this.P2Score();
  }
};

TennisGame.prototype.P1Score = function() {
  this.P1point++;
};

TennisGame.prototype.P2Score = function() {
  this.P2point++;
};

TennisGame.prototype.wonPoint = function(player) {
  if (player === "player1")
    this.P1Score();
  else
    this.P2Score();
};

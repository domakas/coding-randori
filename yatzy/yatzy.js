/**
 * The game of Yatzy is a simple dice game. Each player rolls five six-sided dice.
 * They can re-roll some or all of the dice up to three times (including the original roll).
 *
 * For example, suppose a players rolls:
 * > 3,4,5,5,2
 *
 * They hold (-,-,5,5,-) and re-roll (3,4,-,-,2):
 * > 5,1,5,5,3
 *
 * They hold (5,-,5,5,-) and re-roll (-,1,-,-,3):
 * > 5,6,5,5,2
 *
 * The player then places the roll in a category, such as ones, twos, fives, pair, two pairs etc (see below).
 * If the roll is compatible with the category, the player gets a score for the roll according to the rules.
 * If the roll is not compatible with the category, the player scores zero for the roll.
 *
 * For example, suppose a player scores 5,6,5,5,2 in the fives category they would score 15 (three fives).
 * The score for that go is then added to their total and the category cannot be used again in the remaining goes
 * for that game. A full game consists of one go for each category. Thus, for their last go in a game,
 * a player must choose their only remaining category.
 *
 * Your task is to score a GIVEN roll in a GIVEN category. You do NOT have to program the random dice rolling.
 * The game is NOT played by letting the computer choose the highest scoring category for a given roll.
 *
 * Chance:
 * The player scores the sum of all dice, no matter what they read. For example:
 * 1,1,3,3,6 placed on "chance" scores 14 (1+1+3+3+6)
 * 4,5,5,6,1 placed on "chance" scores 21 (4+5+5+6+1)
 *
 * Yatzy:
 * If all dice have the same number, the player scores 50 points. For example:
 * 1,1,1,1,1 placed on "yatzy" scores 50
 * 1,1,1,2,1 placed on "yatzy" scores 0
 *
 * Ones, Twos, Threes, Fours, Fives, Sixes:
 * The player scores the sum of the dice that reads one, two, three, four, five or six, respectively. For example:
 * 1,1,2,4,4 placed on "fours" scores 8 (4+4)
 * 2,3,2,5,1 placed on "twos" scores 4 (2+2)
 * 3,3,3,4,5 placed on "ones" scores 0
 *
 * Pair:
 * The player scores the sum of the two highest matching dice. For example, when placed on "pair":
 * 3,3,3,4,4 scores 8 (4+4)
 * 1,1,6,2,6 scores 12 (6+6)
 * 3,3,3,4,1 scores 6 (3+3)
 * 3,3,3,3,1 scores 6 (3+3)
 *
 * Two pairs:
 * If there are two pairs of dice with the same number, the player scores the sum of these dice. For example, when placed on "two pairs":
 * 1,1,2,3,3 scores 8 (1+1+3+3)
 * 1,1,2,3,4 scores 0
 * 1,1,2,2,2 scores 6 (1+1+2+2)
 *
 * Three of a kind:
 * If there are three dice with the same number, the player scores the sum of these dice. For example, when placed on "three of a kind":
 * 3,3,3,4,5 scores 9 (3+3+3)
 * 3,3,4,5,6 scores 0
 * 3,3,3,3,1 scores 9 (3+3+3)
 *
 * Four of a kind:
 * If there are four dice with the same number, the player scores the sum of these dice. For example, when placed on "four of a kind":
 * 2,2,2,2,5 scores 8 (2+2+2+2)
 * 2,2,2,5,5 scores 0
 * 2,2,2,2,2 scores 8 (2+2+2+2)
 *
 * Small straight:
 * When placed on "small straight", if the dice read
 * 1,2,3,4,5, the player scores 15 (the sum of all the dice).
 *
 * Large straight:
 * When placed on "large straight", if the dice read
 * 2,3,4,5,6, the player scores 20 (the sum of all the dice).
 *
 * Full house:
 * If the dice are two of a kind and three of a kind, the player scores the sum of all the dice. For example, when placed on "full house":
 * 1,1,2,2,2 scores 8 (1+1+2+2+2)
 * 2,2,3,3,4 scores 0
 * 4,4,4,4,4 scores 0
 */
var Yatzy = function(d1, d2, d3, d4, _5) {
  this.dice = [];
  this.dice[0] = d1;
  this.dice[1] = d2;
  this.dice[2] = d3;
  this.dice[3] = d4;
  this.dice[4] = _5;

  this.fours = function()
  {
    var sum;
    sum = 0;
    for (at = 0; at != 5; at++) {
      if (this.dice[at] == 4) {
        sum += 4;
      }
    }
    return sum;
  }

  this.fives = function()
  {
    s = 0
    var i
    for (i = 0; i < this.dice.length; i++)
      if (this.dice[i] == 5)
        s = s + 5;
    return s;
  }

  this.sixes = function()
  {
    sum = 0;
    for (var at = 0; at < this.dice.length; at++)
      if (this.dice[at] == 6)
        sum = sum + 6;
    return sum;
  }
}



Yatzy.chance = function(d1, d2, d3, d4, d5) {
  var total = 0;
  total += d1;
  total += d2;
  total += d3;
  total += d4;
  total += d5;
  return total;
}

Yatzy.yatzy = function() {
  var counts = [0, 0, 0, 0, 0, 0, 0, 0];
  for (var i = 0; i != arguments.length; ++i) {
    var die = arguments[i];
    counts[die-1]++; }
  for (i = 0; i != 6; i++)
    if (counts[i] == 5)
      return 50;
  return 0;
}

Yatzy.ones = function(d1, d2, d3, d4, d5) {
  var sum = 0;
  if (d1 == 1) sum++;
  if (d2 == 1) sum++;
  if (d3 == 1) sum++;
  if (d4 == 1) sum++;
  if (d5 == 1)
    sum++;

  return sum;
}

Yatzy.twos = function(d1, d2, d3, d4, d5) {
  var sum = 0;
  if (d1 == 2) sum += 2;
  if (d2 == 2) sum += 2;
  if (d3 == 2) sum += 2;
  if (d4 == 2) sum += 2;
  if (d5 == 2) sum += 2;
  return sum;
}

Yatzy.threes = function(d1, d2, d3, d4, d5) {
  var s;
  s = 0;
  if (d1 == 3) s += 3;
  if (d2 == 3) s += 3;
  if (d3 == 3) s += 3;
  if (d4 == 3) s += 3;
  if (d5 == 3) s += 3;
  return s;
}

Yatzy.score_pair = function(d1, d2, d3, d4, d5)
{
  var counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  counts[d1-1]++;
  counts[d2-1]++;
  counts[d3-1]++;
  counts[d4-1]++;
  counts[d5-1]++;
  var at;
  for (at = 0; at != 6; at++)
    if (counts[6-at-1] >= 2)
      return (6-at)*2;
  return 0;
}

Yatzy.two_pair = function(d1, d2, d3, d4, d5)
{
  var counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  counts[d1-1]++;
  counts[d2-1]++
  counts[d3-1]++
  counts[d4-1]++;
  counts[d5-1]++;
  var n = 0;
  var score = 0;
  for (i = 0; i < 6; i += 1)
    if (counts[6-i-1] >= 2) {
      n++;
      score += (6-i);
    }
  if (n == 2)
    return score * 2;
  else
    return 0;
}

Yatzy.four_of_a_kind = function(_1, _2, d3, d4, d5)
{
  var tallies;
  tallies = [0, 0, 0, 0, 0, 0, 0, 0]
  tallies[_1-1]++;
  tallies[_2-1]++;
  tallies[d3-1]++;
  tallies[d4-1]++;
  tallies[d5-1]++;
  for (i = 0; i < 6; i++)
    if (tallies[i] >= 4)
      return (i+1) * 4;
  return 0;
}

Yatzy.three_of_a_kind = function(d1, d2, d3, d4, d5)
{
  var t;
  t = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  t[d1-1]++;
  t[d2-1]++;
  t[d3-1]++;
  t[d4-1]++;
  t[d5-1]++;
  for (i = 0; i < 6; i++)
    if (t[i] >= 3)
      return (i+1) * 3;
  return 0;
}

Yatzy.smallStraight = function(d1, d2, d3, d4, d5)
{
  var tallies;
  tallies = [0, 0, 0, 0, 0, 0, 0]
  tallies[d1-1] += 1;
  tallies[d2-1] += 1;
  tallies[d3-1] += 1;
  tallies[d4-1] += 1;
  tallies[d5-1] += 1;
  if (tallies[0] == 1 &&
    tallies[1] == 1 &&
    tallies[2] == 1 &&
    tallies[3] == 1 &&
    tallies[4] == 1)
    return 15;
  return 0;
}

Yatzy.largeStraight = function(d1, d2, d3, d4, d5)
{
  var tallies;
  tallies = [0, 0, 0, 0,0,0,0,0];
  tallies[d1-1] += 1;
  tallies[d2-1] += 1;
  tallies[d3-1] += 1;
  tallies[d4-1] += 1;
  tallies[d5-1] += 1;
  if (tallies[1] == 1 &&
    tallies[2] == 1 &&
    tallies[3] == 1 &&
    tallies[4] == 1
    && tallies[5] == 1)
    return 20;
  return 0;
}

Yatzy.fullHouse = function(d1, d2, d3, d4, d5)
{
  var tallies;
  var  _2 = false;
  var i;
  var _2_at = 0;
  var _3 = false;
  var _3_at = 0;




  tallies = [0, 0, 0, 0, 0, 0, 0, 0];
  tallies[d1-1] += 1;
  tallies[d2-1] += 1;
  tallies[d3-1] += 1;
  tallies[d4-1] += 1;
  tallies[d5-1] += 1;

  for (i = 0; i != 6; i += 1)
    if (tallies[i] == 2) {
      _2 = true;
      _2_at = i+1;
    }

  for (i = 0; i != 6; i += 1)
    if (tallies[i] == 3) {
      _3 = true;
      _3_at = i+1;
    }

  if (_2 && _3)
    return _2_at * 2 + _3_at * 3;
  else
    return 0;
}
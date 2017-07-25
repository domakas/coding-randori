(function() {
  const allTimes = [
    { hours: 5, minutes: 0,  expected: 'five o\' clock' },
    { hours: 5, minutes: 1,  expected: 'one minute past five' },
    { hours: 5, minutes: 10, expected: 'ten minutes past five' },
    { hours: 5, minutes: 15, expected: 'quarter past five' },
    { hours: 5, minutes: 28, expected: 'twenty eight minutes past five' },
    { hours: 5, minutes: 30, expected: 'half past five' },
    { hours: 5, minutes: 40, expected: 'twenty minutes to six' },
    { hours: 5, minutes: 45, expected: 'quarter to six' },
    { hours: 5, minutes: 49, expected: 'thirteen minutes to six' },
  ];

  xdescribe('timeInWords', () => {
    allTimes.forEach(({ hours, minutes, expected }) => {
      checkTime(hours, minutes, expected);
    });

    function checkTime(hours, minutes, expected) {

      it(`should return '${expected}' when passing ${hours}:${minutes}`, () => {
        expect(timeInWords(hours, minutes)).toBe(expected);
      });

    }
  });
})();
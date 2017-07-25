(function() {
  const allNumbers = [
    { input: 1, expected: 'I' },
    { input: 2, expected: 'II' },
    { input: 3, expected: 'III' },
    { input: 4, expected: 'IV' },
    { input: 5, expected: 'V' },
    { input: 6, expected: 'VI' },
    { input: 7, expected: 'VII' },
    { input: 8, expected: 'VIII' },
    { input: 9, expected: 'IX' },
    { input: 10, expected: 'X' },
    { input: 11, expected: 'XI' },
    { input: 12, expected: 'XII' },
    { input: 13, expected: 'XIII' },
    { input: 14, expected: 'XIV' },
    { input: 15, expected: 'XV' },
    { input: 16, expected: 'XVI' },
    { input: 17, expected: 'XVII' },
    { input: 18, expected: 'XVIII' },
    { input: 19, expected: 'XIX' },
    { input: 20, expected: 'XX' },
    { input: 45, expected: 'VL' },
    { input: 50, expected: 'L' },
    { input: 55, expected: 'LV' },
    { input: 90, expected: 'XC' },
    { input: 100, expected: 'C' },
    { input: 110, expected: 'CX' },
    { input: 150, expected: 'CL' },
    { input: 250, expected: 'CCL' },
    { input: 350, expected: 'CCCL' },
    { input: 450, expected: 'CDL' },
    { input: 550, expected: 'DL' },
    { input: 1146, expected: 'MCXLVIII' },
    { input: 1569, expected: 'MDLXIX' },
    { input: 1990, expected: 'MCMXC' },
    { input: 2017, expected: 'MMXVII' },
  ];

  xdescribe('romanNumerals', () => {
    allNumbers.forEach(({ input, expected }) => {
      checkNumber(input, expected);
    });

    function checkNumber(input, expected) {

      it(`should return '${expected}' when passing ${input}`, () => {
        expect(romanNumerals(input)).toBe(expected);
      });

    }
  });
})();
(function () {
  const fn = require('../dist').default;

  describe('api.basic', () => {
    test('1. blank should be striped.', () => {
      const latex = String.raw`a+\ \ \ b^2`;
      expect(fn(latex)).toBe(String.raw`a+b^2`);
    });

    test('2. with latex nested case.', () => {
      const latex = String.raw`a+\sqrt{a^2+\ \ \ \ b}`;
      expect(fn(latex)).toBe(String.raw`a+\sqrt{a^2+b}`);
    });
  });
})();

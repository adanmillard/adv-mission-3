import stringReplacer from "./StringFunction";

type TestVariables = {
  input: string;
  expected: string;
};

describe("Replacing special character strings", () => {
  const testVariables: TestVariables[] = [
    { input: "hello%world", expected: "hello world" },
    { input: "!hello world", expected: "hello world" },
    { input: ";hello?world!", expected: "hello world" },
    { input: "hello;world", expected: "hello world" },
    { input: "hello world?", expected: "hello world" },
  ];

  testVariables.map((tv) => {
    it(`Replace special characters in ${tv.input}`, () => {
      const actual: string = stringReplacer(tv.input);

      expect(actual).toBe(tv.expected);
    });
  });
});

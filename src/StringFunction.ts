const regexReplace = /[^a-zA-Z0-9]/g;

const stringReplacer = (input: string) => {
  const newString: string = input.replace(regexReplace, " ").trim();
  return newString;
};

export default stringReplacer;

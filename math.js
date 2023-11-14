const mul = (a, b) => {
  return a * b;
};

const add = (a , b) => {
  return a + b;
}

//export a module using module.exports, and export a function from a module using module.export = functionName.
module.exports = {mul, add};

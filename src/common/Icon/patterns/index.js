import * as Data from "./data";

const Patterns = {};
const currentData = Data;

Object.keys(Data).forEach((item) => {
  Patterns[item] = currentData[item];
});

export default Patterns;

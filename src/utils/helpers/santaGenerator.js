import getShuffledArray from "./getShuffledArray";

export const santaGenerator = (names) => {
 const shuffledNames = getShuffledArray(names);
 const santaPairs = new Map();

 for (let i = 0; i < shuffledNames.length; i++) {
  const santa = shuffledNames[i];
  const recipient = shuffledNames[(i + 1) % shuffledNames.length];
  santaPairs.set(santa, recipient);
 }

 const getPairByName = (name, pairs = santaPairs) => {
  const recipient = pairs.get(name);
  if (recipient) {
   return recipient;
  }
 };
 return {
  santaPairs,
  getPairByName,
 };
};

export default santaGenerator;

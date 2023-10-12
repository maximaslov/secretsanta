import getShuffledArray from "../helpers/getShuffledArray";

const useSanta = (names) => {
  const shuffledNames = getShuffledArray(names);
  const santaPairs = new Map();

  for (let i = 0; i < shuffledNames.length; i++) {
    const santa = shuffledNames[i];
    const recipient = shuffledNames[(i + 1) % shuffledNames.length];
    santaPairs.set(santa, recipient);
  }

  const getPairByName = (name) => {
    const recipient = santaPairs.get(name);
    if (recipient) {
      return recipient;
    } else {
      throw new Error('Name not found')
    }
  }

  return {  
    santaPairs,
    getPairByName,
  };
}

export default useSanta

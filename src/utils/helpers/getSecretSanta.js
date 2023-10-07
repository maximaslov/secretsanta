const getSecretSanta = (namesArray) => {
  const sortedArray = namesArray.sort(() => Math.random() - 0.5);


  return sortedArray;
};

export default getSecretSanta;

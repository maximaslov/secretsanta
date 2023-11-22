const getShuffledArray = (array) => {
  const shuffledArray = [...array];
  shuffledArray.sort(() => Math.random() - 0.5);
  return shuffledArray;
}

export default getShuffledArray

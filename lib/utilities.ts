// If max = 2, it will return 0 or 1
export const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};

export const getNonDuplicatedRandomInt = (max: number, oldValue: number): number => {
  const newValue = Math.floor(Math.random() * max);
  if (newValue !== oldValue){
    return newValue
  }

  return getNonDuplicatedRandomInt(max, oldValue)
}
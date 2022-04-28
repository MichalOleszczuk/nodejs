export const getRandomKey = () => {
  const randomKey = [...Array(10)]
    .map((_) => ((Math.random() * 36) | 0).toString(36))
    .join("");

  return randomKey;
};

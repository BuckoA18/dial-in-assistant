export const calcRange = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop + 1 - start) / step) },
    (_, i) => start + i * step,
  );

export const toCamelCase = (string) => {
  const words = string.toLowerCase().split(" ");

  const camelCaseString = words.map((word, index) => {
    if (index === 0) return word;
    return word[0].toUpperCase() + word.slice(1);
  });

  return camelCaseString;
};

export const calcYield = (dose, output) => {
  return Number(
    output % dose !== 0
      ? (output / dose).toFixed(1)
      : (output / dose).toFixed(0),
  );
};

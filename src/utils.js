export const calcRange = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop + 1 - start) / step) },
    (_, i) => start + i * step,
  );

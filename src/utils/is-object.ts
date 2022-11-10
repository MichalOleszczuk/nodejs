export const isObject = (obj: unknown) => {
  const type = typeof obj;
  const guardNull = type === "object" && !!obj;

  return type === "function" || guardNull;
};

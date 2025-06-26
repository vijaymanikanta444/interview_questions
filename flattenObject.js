const flattenObject = (obj, parentKey = "", result = {}) => {
  for (const key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      flattenObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
};

const input = {
  a: {
    b: {
      c: 1,
      d: 4,
    },
  },
  d: 2,
  e: {
    f: {
      g: {
        h: 3,
      },
    },
  },
  k: 5,
};

console.log(flattenObject(input));

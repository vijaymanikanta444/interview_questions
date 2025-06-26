const unflattenObject = (obj) => {
  const result = {};

  for (const key in obj) {
    const keyParts = key.split(".");
    let current = result;

    keyParts.forEach((part, i) => {
      if (i === keyParts.length - 1) {
        current[part] = obj[key];
      } else {
        if (!current[part]) {
          current[part] = {};
        }
        current = current[part];
      }
    });
  }

  return result;
};

const input = {
  "a.b.c": 1,
  d: 2,
  "a.b.d": 4,
  "e.f.g.h": 3,
};

console.log(unflattenObject(input));

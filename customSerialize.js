const customSerialize = (obj) => {
  const objType = typeof obj;

  // null
  if (obj === null) return "null";

  // number
  if (["number", "boolean"].includes(objType)) {
    return obj.toString();
  }

  //   string
  if (objType === "string") {
    return `"${obj}"`;
  }

  if (objType === "function") {
    return `"${obj.toString()}"`;
  }

  //  undefined
  if (["function", "undefined"].includes(objType)) return undefined;

  // array [1,2,3]
  if (Array.isArray(obj)) {
    const elements = obj
      .map((item) => {
        const serialized = customSerialize(item);
        return serialized ?? null;
      })
      .join(",");

    return `[${elements}]`;
  }

  // object
  if (objType === "object") {
    const entries = Object.entries(obj)
      .map(([key, value]) => {
        const serializedValue = customSerialize(value);
        return serializedValue !== undefined
          ? `"${key}" : ${serializedValue}`
          : null;
      })
      .filter(Boolean)
      .join(",");

    return `{${entries}}`;
  }

  return undefined;
};

// console.log(customSerialize());
// console.log(
//   customSerialize({
//     greet: () => {
//       console.log("hi");
//     },
//   })
// );
// console.log(customSerialize("123"));
// console.log(customSerialize(123));
// console.log(customSerialize(true));
// console.log(customSerialize(null));

const data = {
  user: {
    name: "Alice",
    age: 30,
    greet: function () {
      return `Hi, I'm ${this.name}`;
    },
    address: {
      city: "Wonderland",
      zip: 12345,
      locationDetails: function () {
        return `${this.city}, ZIP: ${this.zip}`;
      },
    },
  },
  createdAt: new Date(),
  sayBye: () => "Goodbye!",
};

console.log(customSerialize(data));

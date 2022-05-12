/* eslint-disable no-console */
class MyClass {
  public name: string;

  constructor(asyncParam: unknown) {
    if (typeof asyncParam === "undefined") {
      throw new Error("Cannot be called directly");
    }
    this.name = "Hello";
  }

  static async build() {
    const asyncResult = await Promise.resolve({}).catch((error) => {
      throw error;
    });
    return new MyClass(asyncResult);
  }
}

MyClass.build()
  .then((instance) => console.log(instance.name))
  .catch((err) => console.error(err));

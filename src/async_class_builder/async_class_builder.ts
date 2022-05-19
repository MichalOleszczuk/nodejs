/* eslint-disable no-console */
export class MyAsyncClass {
  public name: string;

  constructor(asyncParam?: unknown) {
    if (typeof asyncParam === "undefined") {
      throw new Error("Cannot be called directly");
    }
    this.name = "Hello";
  }

  static async build() {
    const asyncResult = await Promise.resolve({});
    return new MyAsyncClass(asyncResult);
  }
}

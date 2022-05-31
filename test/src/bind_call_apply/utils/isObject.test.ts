import { isObject } from "../../../../src/bind_call_apply/utils/isObject";

describe("bind_call_apply utils isObject", () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  beforeAll(async () => {});

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  afterAll(async () => {});

  it("Check if is object", async () => {
    const objectResult = isObject({});

    expect(objectResult).toBeDefined();
    expect(objectResult).toBe(true);
    expect(typeof objectResult).toBe("boolean");
  }, 10000);

  it("Check null", async () => {
    const objectResult = isObject(null);

    expect(objectResult).toBeDefined();
    expect(objectResult).toBe(false);
    expect(typeof objectResult).toBe("boolean");
  }, 10000);

  it("Check function", async () => {
    const objectResult = isObject(() => ({}));

    expect(objectResult).toBeDefined();
    expect(objectResult).toBe(true);
    expect(typeof objectResult).toBe("boolean");
  }, 10000);

  it("Check undefined", async () => {
    const objectResult = isObject(undefined);

    expect(objectResult).toBeDefined();
    expect(objectResult).toBe(false);
    expect(typeof objectResult).toBe("boolean");
  }, 10000);
});

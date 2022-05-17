import { MyAsyncClass } from "../../../src/async_class_builder/async_class_builder";

describe("async_class_builder", () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  beforeAll(async () => {});

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  afterAll(async () => {});

  it("Create instance", async () => {
    const instance = await MyAsyncClass.build();

    expect(instance.name).toBeDefined();
    expect(typeof instance.name).toBe("string");
    expect(instance.name.length).toBeGreaterThan(0);
  }, 10000);

  it("Throws on direct create", async () => {
    const instanceFactory = () => new MyAsyncClass();

    expect(instanceFactory).toThrow();
  }, 10000);
});

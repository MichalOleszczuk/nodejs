import { getRandomKey } from "../../../../src/bind_call_apply/utils/getRandomKey";

describe("bind_call_apply utils getRandomKey", () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  beforeAll(async () => {});

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  afterAll(async () => {});

  it("Generate random key", async () => {
    const randomKeyResult = getRandomKey();

    expect(randomKeyResult).toBeDefined();
    expect(randomKeyResult.length).toBeGreaterThan(0);
    expect(typeof randomKeyResult).toBe("string");
  }, 10000);
});

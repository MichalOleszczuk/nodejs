import { checkRandomKey } from "../../../src/utils/check-random-key";

describe("bind_call_apply utils checkRandomKey", () => {
  const mockRandomKey = "a54c52b9-7b04-4b18-be5d-87abba55765d";

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  beforeAll(async () => {});

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  afterAll(async () => {});

  it("Check without random key", async () => {
    const checkRandomKeyResult = checkRandomKey(mockRandomKey, {});

    expect(checkRandomKeyResult).toBeDefined();
    expect(typeof checkRandomKeyResult).toBe("string");
  }, 10000);

  it("Check with random key", async () => {
    const caller = {};
    caller[mockRandomKey] = () => ({});

    const checkRandomKeyResult = checkRandomKey(mockRandomKey, caller);

    expect(checkRandomKeyResult).toBeDefined();
    expect(typeof checkRandomKeyResult).toBe("string");
    expect(checkRandomKeyResult).not.toEqual(mockRandomKey);
  }, 10000);
});

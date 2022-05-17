describe("Check if jest UNIT config loads", () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  beforeAll(async () => {});

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  afterAll(async () => {});

  it("Should have UNIT global variables", async () => {
    const { UNIT_ENV_VARIABLE } = process.env;

    expect(UNIT_ENV_VARIABLE).toBeDefined();
    expect(typeof UNIT_ENV_VARIABLE).toBe("string");
    expect(UNIT_ENV_VARIABLE.length).toBeGreaterThan(0);
  }, 10000);
});

describe("Check if jest E2E config loads", () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  beforeAll(async () => {});

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  afterAll(async () => {});

  it("Should have E2E global variables", async () => {
    const { E2E_ENV_VARIABLE } = process.env;

    expect(E2E_ENV_VARIABLE).toBeDefined();
    expect(typeof E2E_ENV_VARIABLE).toBe("string");
    expect(E2E_ENV_VARIABLE.length).toBeGreaterThan(0);
  }, 10000);
});

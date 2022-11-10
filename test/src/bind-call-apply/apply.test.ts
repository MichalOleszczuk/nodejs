/* eslint-disable prefer-spread */
/* eslint-disable no-console */
import "../../../src/bind-call-apply/apply";
import { logThis } from "../../../src/utils/log-this";
import { mockClass1, mockClass2, mockNumbers } from "./bind-call-apply.mock";

describe("bind_call_apply apply", () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  beforeAll(async () => {});

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  afterAll(async () => {});

  it("Check mockClass1 apply", async () => {
    console.log = jest.fn();
    const applyResult = logThis.apply(mockClass1, mockNumbers);

    expect(applyResult).toBeDefined();
    expect(typeof applyResult).toBe("object");
    expect(Array.isArray(applyResult)).toBe(true);
    expect(applyResult.length).toEqual(mockNumbers.length);
    expect(console.log).toHaveBeenCalledWith(mockClass1.name, ...mockNumbers);
  }, 10000);

  it("Check mockClass2 apply", async () => {
    console.log = jest.fn();
    const applyResult = logThis.apply(mockClass2, mockNumbers);

    expect(applyResult).toBeDefined();
    expect(typeof applyResult).toBe("object");
    expect(Array.isArray(applyResult)).toBe(true);
    expect(applyResult.length).toEqual(mockNumbers.length);
    expect(console.log).toHaveBeenCalledWith(mockClass2.name, ...mockNumbers);
  }, 10000);

  it("Check mockClass1 apply2", async () => {
    console.log = jest.fn();
    const applyResult = logThis.apply2(mockClass1, mockNumbers);

    expect(applyResult).toBeDefined();
    expect(typeof applyResult).toBe("object");
    expect(Array.isArray(applyResult)).toBe(true);
    expect(applyResult.length).toEqual(mockNumbers.length);
    expect(console.log).toHaveBeenCalledWith(mockClass1.name, ...mockNumbers);
  }, 10000);

  it("Check mockClass2 apply2", async () => {
    console.log = jest.fn();
    const applyResult = logThis.apply2(mockClass2, mockNumbers);

    expect(applyResult).toBeDefined();
    expect(typeof applyResult).toBe("object");
    expect(Array.isArray(applyResult)).toBe(true);
    expect(applyResult.length).toEqual(mockNumbers.length);
    expect(console.log).toHaveBeenCalledWith(mockClass2.name, ...mockNumbers);
  }, 10000);
});

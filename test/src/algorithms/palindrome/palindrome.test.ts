import { checkPalindrome } from "../../../../src/algorithms/palindrome/palindrome";

describe("checkPalindrome", () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  beforeAll(async () => {});

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  afterAll(async () => {});

  it("Check word cases", async () => {
    const word1 = "sedes";
    const word2 = "madam";
    const word3 = "racecar";
    const word4 = "hello";

    expect(checkPalindrome(word1)).toEqual(true);
    expect(checkPalindrome(word2)).toEqual(true);
    expect(checkPalindrome(word3)).toEqual(true);
    expect(checkPalindrome(word4)).toEqual(false);
  }, 10000);
});

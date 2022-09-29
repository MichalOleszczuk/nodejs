import { centuryFromYear } from "../../../../src/algorithms/centuryFromYear/centuryFromYear";

describe("centuryFromYear", () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  beforeAll(async () => {});

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  afterAll(async () => {});

  it("Check years", async () => {
    const year1 = 2000;
    const year2 = 1999;
    const year3 = 1998;
    const year4 = 2001;

    expect(centuryFromYear(year1)).toEqual(20);
    expect(centuryFromYear(year2)).toEqual(20);
    expect(centuryFromYear(year3)).toEqual(20);
    expect(centuryFromYear(year4)).toEqual(21);
  }, 10000);
});

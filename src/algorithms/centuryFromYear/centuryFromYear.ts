export function centuryFromYear(year: number): number {
  return Math.floor((year - 1) / 100) + 1;
}

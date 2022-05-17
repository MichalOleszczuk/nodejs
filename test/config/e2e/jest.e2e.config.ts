import type { Config } from "@jest/types";
import baseTestConfig from "../base/jest.base.config";

export default async (): Promise<Config.InitialOptions> => {
  return {
    ...(await baseTestConfig()),
    globalSetup: "<rootDir>/test/config/e2e/setup/globalSetup.ts",
    globalTeardown: "<rootDir>/test/config/e2e/setup/globalTeardown.ts",
    testRegex: ".*\\.e2e-(test|spec)\\.ts$",
  };
};

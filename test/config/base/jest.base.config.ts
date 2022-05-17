import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
  return {
    rootDir: process.cwd(),
    globalSetup: "<rootDir>/test/config/base/setup/globalSetup.ts",
    globalTeardown: "<rootDir>/test/config/base/setup/globalTeardown.ts",
    moduleFileExtensions: ["js", "json", "ts"],
    testRegex: ".*\\.(test|spec)\\.ts$",
    transform: {
      "^.+\\.(t|j)s$": "ts-jest",
    },
    testEnvironment: "node",
    verbose: true,
  };
};

import type { Config } from "@jest/types";
import baseTestConfig from "../base/jest.base.config";

export default async (): Promise<Config.InitialOptions> => {
  return {
    ...(await baseTestConfig()),
    globalSetup: "<rootDir>/test/config/unit/setup/global-setup.ts",
    globalTeardown: "<rootDir>/test/config/unit/setup/global-teardown.ts",
    collectCoverage: true,
    collectCoverageFrom: ["<rootDir>/src/**/*.(t|j)s"],
    coveragePathIgnorePatterns: ["/node_modules/"],
    coverageDirectory: "<rootDir>/coverage",
    coverageThreshold: {
      global: {
        statements: 100,
        branches: 100,
        functions: 100,
        lines: 100,
      },
    },
  };
};

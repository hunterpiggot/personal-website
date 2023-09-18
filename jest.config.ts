const { pathsToModuleNameMapper } = require("ts-jest");
import type { JestConfigWithTsJest } from "ts-jest";
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = require("./tsconfig.json");

// /** @type {import('ts-jest').JestConfigWithTsJest} */
const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "jsdom",
  roots: ["<rootDir>"],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: "<rootDir>/src/",
    }),
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\ts$": "babel-jest",
  },
};

export default jestConfig;

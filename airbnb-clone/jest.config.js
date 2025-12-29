const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/components/**/*.{ts,tsx}",
    "src/app/**/*.{ts,tsx}",
    "!**/*.d.ts",
  ],
  coverageThreshold: {
    global: {
      lines: 50,
      statements: 50,
      functions: 50,
      branches: 50,
    },
  },
  moduleNameMapper: {
  "^next/image$": "<rootDir>/__mocks__/next/image.tsx",
  "^@/(.*)$": "<rootDir>/src/$1",
},

};

module.exports = createJestConfig(customJestConfig);

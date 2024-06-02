export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  globals: { __DEV__: true },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // process `*.tsx` files with `ts-jest`
  },
  // setupFiles: ["./src/test/setupTests.ts"],
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__ mocks __/fileMock.js",
  },
};

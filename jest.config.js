module.exports = {
    preset: "jest-preset-angular",
    roots: ["<rootDir>/src"],
    testMatch: ["**/+(*.)+(spec).+(ts)"],
    setupFilesAfterEnv: ["<rootDir>/src/test-setup.ts"],
    coverageReporters: ["lcov", "text-summary"],
    collectCoverage: true,
    coverageDirectory: 'coverage/',
};
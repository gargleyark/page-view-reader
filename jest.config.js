module.exports = {
    setupFilesAfterEnv: ["./setupTests.js"],
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.(css)$": "<rootDir>/__mocks__/styleMock.js"
    }
};
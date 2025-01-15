

module.exports = {
    transform: {
       "^.+.jsx?$": "babel-jest"
    },
    moduleFileExtensions: ["js", "jsx", "json", "node"],
    testEnvironment:"node",
    moduleNameMapper: {
        "\\.(css|scss|less)$": "<rootDir>/__mocks__/styleMock.js",
      },
};

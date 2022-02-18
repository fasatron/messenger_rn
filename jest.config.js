module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest.setup.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(jest-)?react-native|@react-native|@react-navigation)',
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@assets(.*)$': '<rootDir>/src/assets$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@navigation(.*)$': '<rootDir>/src/navigation$1',
    '^@screens(.*)$': '<rootDir>/src/screens$1',
    '^@theme(.*)$': '<rootDir>/src/theme$1',
    '^@config(.*)$': '<rootDir>/src/config$1',
    '^@config(.*)$': '<rootDir>/src/config$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
  },
}

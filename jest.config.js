module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  roots: ['<rootDir>/src', '<rootDir>'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{ts,tsx}',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!((?:\\.pnpm/)?((jest-)?react-native|@react-native|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg)))',
  ],
};

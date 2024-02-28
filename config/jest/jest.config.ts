import type { Config } from 'jest'

const config: Config = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src'],
  rootDir: '../../',
  testMatch: ['<rootDir>/src/**/*.(spec|test).(ts|tsx)'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(svg)$': 'svg-transform-loader'
  },
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts']
}

export default config

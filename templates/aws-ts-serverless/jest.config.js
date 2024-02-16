module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.{js,ts}'],
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0,
        },
    },
    moduleNameMapper: {
        'src/(.*)': '<rootDir>/src/$1',
    },
    moduleDirectories: ['node_modules', 'src'],
    testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
    testMatch: ['**/?(*.)+(spec|test).ts'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json',
        },
    },
};

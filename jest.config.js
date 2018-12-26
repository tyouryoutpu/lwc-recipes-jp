const { jestConfig } = require('@salesforce/lwc-jest/config');
module.exports = {
    ...jestConfig,
    moduleNameMapper: {
        '^@salesforce/apex/ContactController.getContactList$':
            '<rootDir>/force-app/test/jest-apex-mocks/ContactController.getContactList'
    }
};

jest.autoMockOff();
const defineTest = require('jscodeshift/dist/testUtils').defineTest;
defineTest(__dirname, 'import-absolute', { absolutePath: 'testDir' });

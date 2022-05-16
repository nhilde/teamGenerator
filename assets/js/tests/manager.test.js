const { expect } = require('@jest/globals')
const Manager = require('../lib/manager.js')

test("getRole() returns the role of the manager", () => {
    const testManager = new Manager('testManager', '5', 'test@mail.com', '18')
    expect(testManager.getRole()).toBe('Manager')
});

test("getName() returns the managers name", () => {
    const paulAllen = new Manager('Paul Allen', '7', 'mail@test.com', '1')
    expect(paulAllen.getName()).toBe('Paul Allen')
});


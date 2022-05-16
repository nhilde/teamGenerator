const { expect } = require('@jest/globals')
const Employee = require('../lib/employee')

test("getName() returns the employees name", () => {
    const al = new Employee('Al', '0', 'al@test.com')
    expect(al.getName()).toBe('Al')
});

test("getEmail() returns the employees email", () => {
    const jim = new Employee('Jim', '00', 'jim@mail.com')
    expect(jim.getEmail()).toBe('jim@mail.com')
})
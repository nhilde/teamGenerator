const { expect } = require('@jest/globals')
const Engineer = require('../lib/engineer')

test("getGithub() returns the engineers office number", () => {
    const david = new Engineer('Dave', '10', 'dave@mail.com', 'vanPatten')
    expect(david.getGithub()).toBe('vanPatten')
})

test("getRole() returns the engineers role", () => {
    const davis = new Engineer('Davis', '11', 'davis@mail.com', 'davis21')
    expect(davis.getRole()).toBe('Engineer')
});
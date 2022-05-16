const { expect } = require('@jest/globals');
const Intern = require('../lib/intern')

test("getSchool returns the interns school", () => {
    const Patrick = new Intern('Patrick', '8', 'pat@mail.com', 'Harvard')
    expect(Patrick.getSchool()).toBe('Harvard')
});

test("getEmail() returns the interns email", () => {
    const paul = new Intern('Paul', '9', 'paul@mail.com', 'Yale')
    expect(paul.getEmail()).toBe('paul@mail.com')
});
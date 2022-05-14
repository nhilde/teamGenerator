const  Employee = require("./employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {
        this.github = github
        super(name, email, id)
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return "Engineer"
    }
};

module.exports = {
    Engineer
}
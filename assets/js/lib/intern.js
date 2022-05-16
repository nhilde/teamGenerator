class Intern {
    constructor(name, id, email, school) {
        this.school = school
        this.name = name
        this.id = id
        this.email = email
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

    getSchool() {
        return this.school
    }

    getRole() {
        return "Intern"
    }
};

module.exports = Intern;
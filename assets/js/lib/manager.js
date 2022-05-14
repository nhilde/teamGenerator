class Manager {
    constructor(name, id, email, officeNumber) {
        this.officeNumber = officeNumber
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

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return "Manager";
    }
};

module.exports =  Manager;

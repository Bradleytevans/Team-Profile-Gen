const Employee = require ("./Employee");

class Manager extends Employee {
    constructor (name, id, email, oNumber) {
        super (name, id, email);
        this.oNumber = oNumber;
    }

    getRole () {
        return "Manager";
    }
}

module.exports = Manager;
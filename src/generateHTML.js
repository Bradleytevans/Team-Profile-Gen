const generateManager = function (manager) {
    return `
    <p>${manager.name}</p>
    <p>${manager.id}</p>
    <p>${manager.email}</p>
    <p>${manager.oNumber}</p>
    `;
}

const generateEngineer = function (engineer) {
    return `
    <p>${engineer.name}</p>
    <p>${engineer.id}</p>
    <p>${engineer.email}</p>
    <p>${engineer.github}</p>
    `;
}

const generateIntern = function (intern) {
    return `
    <p>${intern.name}</p>
    <p>${intern.id}</p>
    <p>${intern.email}</p>
    <p>${intern.github}</p>
    `;
}

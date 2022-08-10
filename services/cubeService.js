const uniqid = require('uniqid');
let cubes = [];

function create(name, description, imageUrl, level) {
    let id = uniqid();
    cubes.push({name, description, imageUrl, level, id});
}
function getAll() {

    return cubes.slice();
}
function getOne(id) {
    return cubes.find(x => x.id === id);
}
const cubeService = {
    create,
    getAll,
    getOne
}
module.exports = cubeService;
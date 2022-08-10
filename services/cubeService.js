const uniqid = require('uniqid');
let cubes = [];

function create(name, description, imageUrl, level) {
    let id = uniqid();
    cubes.push({ name, description, imageUrl, level, id });
}
function getAll() {

    return cubes.slice();
}
function getOne(id) {
    return cubes.find(x => x.id === id);
}
function search(search, from, to) {

    if (search) {
       
        let findCubes = cubes.filter(x => x.name.toLowerCase() === search.toLowerCase());
        return findCubes;
    }
}
const cubeService = {
    create,
    getAll,
    getOne,
    search
}
module.exports = cubeService;
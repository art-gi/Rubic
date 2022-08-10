const uniqid = require('uniqid');
let cube = [];

function create(name, description, imageUrl, level) {
    let id = uniqid();
    cube.push({name, description, imageUrl, level, id});
    console.log(cube)
}
function getAll() {

    return cube.slice();
}
const cubeService = {
    create,
    getAll
}
module.exports = cubeService;

let cube = [];

function create(data) {

   cube.push(data);
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
var glob = require("glob")
var routes = []

const getSecuredRoutes = () => {
    return new Promise(function (resolve, reject) {
        glob("./!(client|node_modules)**/router.js", null, function (er, files) {
            files.forEach((item) => {
                var requiredItem = require(item);
                routes.push(requiredItem);
            })
            resolve(routes)
        })
    });
}


module.exports = {
    getSecuredRoutes
}
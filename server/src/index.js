require = require("esm")(module); // eslint-disable-line
require("module-alias/register");

module.exports = require("./app.js");

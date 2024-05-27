const { fetchUserData } = require("./fetchUserData");

fetchUserData().then((names) => console.log(names));

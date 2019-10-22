const staticRoutes = require("../routes/static");
const userRoutes = require("../routes/users.js");

module.exports = {
  init(app){
    app.use(staticRoutes);
    app.use(userRoutes);
  }
}

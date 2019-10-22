const userQueries = require("../db/queries.users.js");
const passport = require("passport");
const sendMail = require("./sendMail.js");

module.exports = {
  create(req, res, next){
    let newUser = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      passwordConfirmation: req.body.passwordConfirmation
    };
    console.log(newUser);

    userQueries.createUser(newUser, (err, user) => {
      if(err){
        console.log(err);
        req.flash("error", err);
        res.redirect("/users/sign_up");
      } else {
        sendMail.newUser(user);
        passport.authenticate("local")(req, res, () => {
          req.flash("notice", "You've successfully signed in!");
          res.redirect("/");
        })
        /* res.redirect("/"); */
      }
    });
  },

  signUp(req, res, next) {
    res.render("users/signup");
  },
}

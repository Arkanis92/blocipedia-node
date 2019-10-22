const sgMail = require('@sendgrid/mail');
const env = process.env.NODE_ENV || 'development';

if (env != "test") {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

function newUser(newUser) {
  const msg = {
    to: newUser.email,
    from: 'testUser@example.com',
    subject: 'User Confirmation',
    text: 'Welcome to Blocipedia!',
    html: '<strong>Please login to your account!</strong>',
  };
  if (env != "test"){
    sgMail.send(msg);
  }
}

module.exports = {newUser};

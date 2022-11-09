const passport = require("passport");
const { OAuth2Strategy } = require("passport-google-oauth");
const { User } = require('../models/index');
const { config } = require("dotenv");
config();

const emails = ["danibelgranocab15@gmail.com"];

passport.use(
    "auth-google",
    new OAuth2Strategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:3000/auth/google",
        },
        function (accessToken, refreshToken, profile, done) {
            const response = emails.includes(profile.emails[0].value);
            // IF EXITS IN DATABASE
            if (response) {
                console.log(profile.emails[0].value)
                done(null, profile);
            } else {
                // SAVE IN DATABASE
                emails.push(profile.emails[0].value);
                console.log(profile.emails[0].value)
                done(null, profile);
            }

            User.findOrCreate({
                where: { email: profile.emails[0].value }
            }, (err, user) => {
                return done(err, user);
            });
        }
    )
);
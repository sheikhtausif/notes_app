require("dotenv").config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const User = require("../models/user.model");

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `http://localhost:${process.env.PORT}/auth/google/callback`,
},
    async function (request, accessToken, refreshToken, profile, done) {
        let user = await User.findOne({ email: profile?._json?.email }).lean().exec();

        if (!user) {
            user = await User.create({
                email: profile?._json?.email,
                password: Date.now()
            })
        }
        return done(null, { user })
    }
));

module.exports = passport;
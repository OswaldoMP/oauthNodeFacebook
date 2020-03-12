var FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function(passport){

    passport.serializeUser(function(user,done){
        console.log('User: '+ user);
        done(null,user)
    });

    passport.deserializeUser(function(obj,done){
        done(null,obj)
    });

    passport.use(new FacebookStrategy({
        clientID : '496864450983459',
        clientSecret : '86ddfbd9310f58c9f0d641427156ff3d',
        callbackURL : 'auth/facebook/callback'
    }, function(accessToken, refreshToken, profile, done){
        console.log('AccessToken: ' + accessToken);
        console.log('RefreshToke: ' + refreshToken);
        console.log('Profile ID: ' + profile.id);
        console.log('Profile name: '+ profile.displayName + profile._json)
        console.log('Done: ' + done);
    }));


};
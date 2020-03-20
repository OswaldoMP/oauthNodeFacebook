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
        clientID : '560254884593287',
        clientSecret : '9e750f9497e480a99f604397125fd035',
        callbackURL : 'https://still-wildwood-78311.herokuapp.com/auth/facebook/callback'
    }, function(accessToken, refreshToken, profile, done){
        console.log('AccessToken: ' + accessToken);
        console.log('RefreshToke: ' + refreshToken);
        console.log('Profile ID: ' + profile.id);
        console.log('Profile name: '+ profile.displayName + profile)
        console.log('Done: ' + done);
        done(null,profile)
    }));


};
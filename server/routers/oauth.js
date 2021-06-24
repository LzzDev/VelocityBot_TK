const { Router } = require( 'express' );
const OAuth = Router();

OAuth.get( '/isLoggedIn', ( req, res ) => res.json( req.session.user ? true : false ) );

OAuth.get( '/login', ( req, res ) => {
    req.session.user = {
        isAdmin: true,
        id: 123456789,
        username: 'Lzz...',
    };

    return res.json( req.session.user );
} );

module.exports = {
    path: '/oauth',
    router: OAuth
};
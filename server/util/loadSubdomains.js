const subdomain = require( 'express-subdomain' );
const subdomains = require( '../subdomains/index.js' );

// module.exports = app => subdomains.forEach(
//     ( { path, router } ) => app.use( process.env.NODE_ENV == 'production' ? subdomain( path, router ) : (path, router) )
// );

module.exports = app => {
    subdomains.forEach( ( { path, router } ) => {
        if ( process.env.NODE_ENV == 'production' ) {
            app.use( subdomain( path, router ) );
        } else {
            app.use( '/subdomain/' + path, router )
        };
    });
};
const fs = require( 'fs' );

let routes = [];
const getRoutes = () => {
    fs.readdirSync( __dirname )
        .map( route => {
            if ( route == 'index.js' ) return;

            routes.push( require( [ __dirname, route ].join( '/' ) ) )
        });
        
    return routes;
};

module.exports = getRoutes();
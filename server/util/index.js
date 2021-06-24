const fs = require( 'fs' );

let utils = {};
const getUtils = () => {
    fs.readdirSync( __dirname )
        .map( util => {
            if ( util == 'index.js' ) return;

            Object.assign( utils, { [ util.split( '.' )[ 0 ] ]: require( [ __dirname, util ].join( '/' ) ) } )
        });
    
    return utils;
};

module.exports = getUtils();
const fs = require( 'fs' );

let subdomains = [];
const getSubdomains = () => {
    fs.readdirSync( __dirname )
        .map( domain => {
            if ( domain == 'index.js' ) return;

            subdomains.push( require( [ __dirname, domain ].join( '/' ) ) )
        });
        
    return subdomains;
};

module.exports = getSubdomains();
const fs = require( 'fs' );
const path = require( 'path' );

const lower = require( './lower.js' );
const ignoredPages = [ 'error', 'home' ];

module.exports = page => {
    const pages = fs.readdirSync( path.join( __dirname , '../..', '/src/components/Pages' ) );
    
    return pages.some( p => lower( p ) == lower( page ) && !ignoredPages.includes( lower( p ) ) );
};
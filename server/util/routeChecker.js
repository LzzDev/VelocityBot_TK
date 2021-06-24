const path = require( 'path' );

const buildError = require( './buildError.js' );

module.exports = ( req, res, app ) => {
    const page = req.url.split( '/' ).filter( p => p != '' )[ 0 ];
    const isPage = app.util.isPage( page );

    return isPage == true
        ? res.sendFile( path.join( __dirname , '../..', '/build/index.html' ) )
        : buildError( res, { code: 404, message: 'The resource you requested could not found' } )
};
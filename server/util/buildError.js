const error = require( '../../src/components/Pages/Error' );

module.exports = ( res, { code, message } ) => {
    code = code ? code : 500;
    message = message ? message : 'An error occurred';

    const isHTTPcode = require( './isHTTPcode.js' );
    const statusCode = isHTTPcode( code ) == true ? code : 500;

    res.status( statusCode );
    
    res.format( {
        html: () => res.send( error( { message } ) ),

        json: () => res.json( {
            message: 'An error occurred',
            error: message,
            code: statusCode
        } ),

        default: () => res.type( 'txt' ).send( message )
    });
};
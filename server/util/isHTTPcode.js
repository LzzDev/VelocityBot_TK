const lower = require( './lower.js' );

const codes = [ 404 ];

module.exports = code => codes.some( c => lower( c ) == lower( code ) );
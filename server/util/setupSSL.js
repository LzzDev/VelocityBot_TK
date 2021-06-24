const fs = require( 'fs' );
const http = require( 'http' ), https = require( 'https' );

const domain = '/etc/letsencrypt/live/velocitybot.tk';

module.exports = app => {
    const port = app.port;
	
	const credentials = {
		key: fs.readFileSync( domain + '/privkey.pem', 'utf8' ),
		cert: fs.readFileSync( domain + '/cert.pem', 'utf8' ),
		ca: fs.readFileSync( domain + '/chain.pem', 'utf8' )
	};
	
	const httpServer = http.createServer( app ).listen( port.http );
	const httpsServer = https.createServer( credentials, app ).listen( port.https );
	
	console.log( 'App listening on port ' + port.http + '/' + port.https + ' [MODE: ' + app.NODE_ENV + ']' );

    return { httpServer, httpsServer };
};
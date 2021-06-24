const { Router } = require( 'express' );
const i = Router();

const formidable = require( 'formidable' );
const fs = require( 'fs-extra' );
const config = require( '../../config.json' )[ process.env.NODE_ENV ];

function randomName( number, useSymbols = false ) {
    number = parseInt( number, 10 );

    let name = '';
    let chars = useSymbols == false
        ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()-_=+[]{}|;:/?><,.';

        console.log( chars )

    for (let i = 0; i < number; i++) {
        name += chars.charAt( Math.floor( Math.random() * chars.length ) );
    };

    return name;
};

i.post( '/upload', ( req, res ) => {
    return res.status( 503 ).send( 'Service unavailable' );

    const key = req.headers.authorization;
    if ( key != config.API_KEY ) return res.status( 403 ).send( 'Unauthorized' );


    const form = new formidable.IncomingForm();
    form.parse( req, ( err, fields, files ) => {
        const fileName = randomName( 5 );
        const fileExtension = files.file.name.match(/(\.)+([a-zA-Z0-9]+)+/g, '').toString();
        
        const fullFileName = fileName + fileExtension;
        const fileSize = Math.round( ( files.file.size / 1024 ) / 1000 );

        const tempPath = files.file.path;
        const storagePath = __dirname + '/../../uploads/' + fullFileName;

        if ( fileSize > 20) return res.status( 413 ).send( 'File too big' );

        fs.move( tempPath, storagePath, () => {
            const url = req.protocol + '://' + req.headers.host + '/' + fullFileName;
            res.json( { code: 200, url } ); 
        });
    });
});

module.exports = {
    path: 'i',
    router: i
};
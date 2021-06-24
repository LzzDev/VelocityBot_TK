process.env.NODE_ENV = process.platform == 'win32' ? 'development' : 'production';
const config = require( '../config.json' )[ process.env.NODE_ENV ];

const express = require( 'express' );

const compression = require( 'compression' );
const minify = require( 'express-minify' );
const bodyParser = require( 'body-parser' );
const { Sequelize } = require('sequelize');
const session = require('express-session');

const db = new Sequelize( config.database );

const app = express();
app.use( bodyParser.text() );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
    extended: true
} ) );
app.use( session( config.session ) );


// vars
app.port = config.port || 5000;
app.NODE_ENV = process.env.NODE_ENV;
app.config = config;
app.db = db;


// utils
app.util = require( './util' );

app.util.loadRouters( app );
app.util.loadSubdomains( app );


// middleware
app.use( compression() );
app.use( minify() );


app.use( express.static( './build' ) );
app.use( express.static( './uploads' ) );

app.get( '*', ( req, res ) => app.util.routeChecker( req, res, app ) );


// start backend server
if ( process.env.NODE_ENV == 'production' )
    app.util.setupSSL( app )
else
    app.util.listen( app );
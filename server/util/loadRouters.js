const routes = require( '../routers/index.js' );

module.exports = app => routes.forEach(
    ( { path, router } ) => app.use( path, router )
);
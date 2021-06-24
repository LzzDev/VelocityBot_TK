
module.exports = ( { message } ) => {
    return `
    <html>
        <head>
            <title>Velocity Bot - ${ message }</title>

            <meta charset="utf-8" />
        
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#0D1821" />
            <meta name="description" content="Website for Velocity Bot (Levelling Discord bot)" />
        
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/logo192.png" />
            <link rel="manifest" href="/manifest.json" />
        </head>
        <body style="background-color: #0D1821;">
            <div id="error-message" style="text-align: center; font-family: Arial; text-decoration: none; color: white;">
                <h1>${ message }</h1>
                <h2>Click <a href="/" style="color: inherit; text-decoration: none; font-weight: 900;">here</a> to go home</h2>
            </div>
        </body>
    </html>`;
};
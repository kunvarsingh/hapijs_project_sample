'use strict';

const Route = require('./route/index')
const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 5000,
        host: 'localhost'
    });

    server.route(Route(server));


    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

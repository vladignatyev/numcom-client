var requirejs = require('requirejs');

requirejs.config({
    baseUrl: 'client',
    paths: {
        index: '../index'
    }
});

requirejs(['core'], function (core) {
    console.log(core);
});


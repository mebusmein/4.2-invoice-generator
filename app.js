#!/usr/bin/env node
//
// var argv = require('yargs')
//     .usage('Usage: beanworker --id=[ID] --config=[config.yml]')
//     .default('id', 'defaultID')
//     .demand(['config'])
//     .argv;
//
// var fivebeans = require('fivebeans');
//
// var runner = new fivebeans.runner(argv.id, argv.config);
// console.log(runner);
// console.log(runner.readConfiguration());
// console.log(runner.go());

var Beanworker = require('fivebeans').worker;
var options =
    {
        id: 'worker_4',
        host: '127.0.0.1',
        port: 11333,
        handlers: {
            invoice: require('./handlers/invoice')()
        },
        ignoreDefault: true
    }
var worker = new Beanworker(options);
worker.start(['invoice']);
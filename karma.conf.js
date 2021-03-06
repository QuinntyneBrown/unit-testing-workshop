﻿module.exports = function (config) {

    config.set({

        basePath: '',

        frameworks: ['jasmine'],

        exclude: [],

        reporters: ['progress'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        browsers: ['PhantomJS'],

        singleRun: true,

    });
};
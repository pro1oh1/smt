(function () {
    'use strict';

    angular
        .module('smt.config')
        .config(config);

    config.$inject = ['$locationProvider'];

    //Enable HTML5 routing
    function config($locationProvider) {
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    }
})();
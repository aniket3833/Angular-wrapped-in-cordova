var onDeviceReady = function onDeviceReady() {
    appX = angular.module('myApp', [
        'ngRoute',
        'ngCookies'
    ]);

    //angular.bootstrap(document, ['myApp']);

}
var appX;
document.addEventListener("deviceready", onDeviceReady(), false);
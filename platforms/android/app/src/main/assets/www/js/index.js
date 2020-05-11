/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 
var app = {
    // Application Constructor
    initialize: function () {
        //this.goto('app/index.html')
    },

    // Update DOM on a Received Event
    goto: function (url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function (e) {
            var response = e.currentTarget;
            if (response.readyState !== 4) return;
            if (response.status !== 200 && response.status !== 0) {
                console.error('error loading url: ', response.status, response.responseText);
            }

            // create a new view and populate it
            var el = document.createElement('div');
            el.className = 'app';
            el.innerHTML = response.responseText;
            this.page = el;                     // create a reference to the active view

            this.hydrate(el);
        }.bind(this);
        xhr.send();
    },
    
    hydrate: function (el) {
        
        var scripts = el.querySelectorAll('*[data-script]');
        for (var i = 0; i < scripts.length; i++) {
            this.require(scripts[i].getAttribute('data-script'));
        }

    },

    // require scripts
    require: function (src) {
        var el = document.createElement('script');
        el.src = src;
        el.async = true;
        document.head.appendChild(el);
    },

    init: function() {
        var element = document.getElementById("app");
        angular.bootstrap(element, ['myApp']);
        
        // var appX = angular.module('myApp', [
        //     'ngRoute'
        // ]);
        // console.log("App Module Loaded", appX);

        // appX.config(['$routeProvider', function ($routeProvider) {
        //     $routeProvider
        //       .when('/', {
        //         templateUrl: 'login.html',
        //         controller: 'loginController'
        //       })
        //       .otherwise({
        //         redirectTo: '/'
        //       })
        //   }]);
    },

};

document.addEventListener('deviceready', function(el){
    app.init();
}, false);
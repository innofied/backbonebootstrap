/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        jquery: '../lib/jquery-1.9.1',
        localstorage: '../lib/localstorage',
        underscore : '../lib/underscore',
        backbone : '../lib/backbone',
        app : 'view/app',
        todomodel: 'model/todo',
        todocollection : 'collection/todo',
        todoview : 'view/todo'
    },
    shim : {
        jquery : {
            deps : [],
            exports : '$'
        },
        backbone : {
            deps : ['jquery','underscore'],
            exports : 'Backbone'
        },
        underscore : {
            deps : ['jquery'],
            exports : '_'
        },
         localstorage : {
            deps : ['underscore','backbone'],
            exports : 'localstorage'
        },
        app : {
            deps : ['jquery','underscore','backbone'],
            exports : 'app'
        },
        todoview : {
            deps : ['jquery','underscore','backbone'],
            exports : 'todoview'
        },
         todomodel : {
            deps : ['jquery','underscore','backbone'],
            exports : 'todomodel'
        },
         todocollection : {
            deps : ['underscore', 'backbone','todomodel','localstorage'],
            exports : 'todocollection'
        }
    }
});

// Start the main app logic.
require(["app"], function(app) {
    var listView = new app()
});


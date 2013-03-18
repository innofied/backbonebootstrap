/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
define(['underscore', 'backbone','todomodel','localstorage'], function(_, Backbone,todomodel,localStorage) {
var TodoCollection = Backbone.Collection.extend({
 model: todomodel,
 localStorage: new Store("todos")
});
return TodoCollection;
});


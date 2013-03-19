/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
define(['backbone','todomodel','localstorage'], 
    function(Backbone,todomodel,localStorage) {
        console.log(localStorage)
        var TodoCollection = Backbone.Collection.extend({
            model: todomodel,
            localStorage: new localStorage("todos")
       
        });
        return TodoCollection;
    });


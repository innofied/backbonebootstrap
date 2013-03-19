/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
define([
    'jquery', 
    'underscore', 
    'backbone'
    ], function($, _, Backbone){
        var TodoView = Backbone.View.extend({

            //... is a list tag.
            tagName:  "li",
            events: {
                "click .toggle": "toggleDone"
            },
            
            initialize: function() {
                this.listenTo(this.model, 'change', this.render);
                // in case the model is destroyed via a collection method
                // and not by a user interaction from the DOM, the view
                // should remove itself
                this.listenTo(this.model, 'destroy', this.remove);
            },
            
            toggleDone: function() {
                console.log("clicked")
                this.model.toggle();
            }
        });
    });


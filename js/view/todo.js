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
            tagName:  "ul",
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
            
           append : function(item){
              $('#todo-list').append("<li><div class='view'></div><input class='toggle' type='checkbox'><label>"+item.get('content')+"</label><button class='destroy'></button></li>");  
           },

            // Toggle the `"done"` state of the model.
            toggleDone: function() {
                console.log("clicked")
                this.model.toggle();
            }
        });
        return TodoView;
    });


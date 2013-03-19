/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
define(['underscore', 'backbone'], function(_, Backbone) {
    var TodoModel = Backbone.Model.extend({
        defaults: {
            // Default attributes for the todo.
            content: "empty todo...",
            done: false
        },
        // Ensure that each todo created has `content`.
        initialize: function() {
            if (!this.get("content")) {
                this.set({
                    "content": this.defaults.content
                });
            }
        },
        
        toggle: function() {
            this.save({
                done: !this.get("done")
                });
        }

    });
    return TodoModel;
});

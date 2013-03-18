/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
define(['jquery','underscore','backbone'], 
    function($, _, Backbone){
        console.log('back bone =',Backbone);
        var TodoView = Backbone.View.extend({
            el: $('body'), // el attaches to existing element
    
            /*
     *Attach the event when any key will be pressed within the textbox.
     */
            events: {
                'keydown input#new-todo': 'addItem'
            },
    
            initialize: function(){
                _.bindAll(this, 'render', 'addItem'); // every function that uses 'this' as the current object should be in here
                this.render();
            },
    
            /*
     * Function to create the html file dynamically
     */
            render: function(){
                $(this.el).append('<div class="title">todos</div>');
                $(this.el).append('<div class="container">');
                $('.container',this.el).append('<div class="header">');
                $('.header',this.el).append('<div class="header-top">');
                $('.header',this.el).append('<div class="header-content" id="create-todo">');
                $('.header-content',this.el).append('<input id="new-todo" placeholder="What needs to be done?" type="text" />');
                $('.container',this.el).append('<div class="content" id="todoapp">');
                $('.content',this.el).append('<ul class="todo-list" id="todo-list">');
                $('.container',this.el).append('<div class="footer"');
                
            },
            
            
            /*
             * This function will be called each time when any key will be pressed within the textbox.
             * It'll add a list time when enter will be pressed. 
             */
    
            addItem: function(e){
                var code = e.keyCode;
                if(code == 13){
                    $('#todo-list', this.el).append("<li class='view'>"+$('#new-todo').val()+"</li>")
                    this.collection.create($('#new-todo').val(""));
                    $('#new-todo').val("");
                }
                
            }
        });
        return TodoView;
    });


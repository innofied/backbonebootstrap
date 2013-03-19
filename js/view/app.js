/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
define(['jquery','underscore','backbone','todocollection','todomodel','todoview'], 
    function($, _, Backbone,todocollection,todomodel,todoview){
        console.log('back bone =',Backbone);
        var AppView = Backbone.View.extend({
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
                this.collection = new todocollection();
                this.collection.bind('add', this.appendItem);
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
                $('.header-content',this.el).append('<div class="header-left-part">');
                $('.header-left-part',this.el).append('<a href="#"><i class="icon-minus icon-2x"></i></a>');
                $('.header-content',this.el).append('<input id="new-todo" placeholder="What needs to be done?" type="text" />');
                $('.container',this.el).append('<div class="content" id="todoapp">');
                $('.content',this.el).append('<div class="content-left-part"></div>');
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
                    var item= new todomodel();
                    item.set({
                        content: $('#new-todo').val() 
                    });
                    
                    $('#new-todo').val("");
                    this.collection.create(item.toJSON());
                }
                
            },
            
            appendItem: function(item){
                var view = new todoview({model: item});
                console.log(view);
                view.append(item);
                //$('#todo-list', this.el).append("<li><div class='view'></div><input class='toggle' type='checkbox'><label>"+item.get('content')+"</label><button class='destroy'></button></li>");
            }
        });
        
        return AppView;
    });


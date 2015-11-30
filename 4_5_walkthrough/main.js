var ButtonView = Backbone.View.extend({  
  tagName: 'button',
  className: 'greeting-btn',

  initialize: function(attrs) {
    this.options = attrs;
  },

  render: function(){
    this.$el.html(this.options.args);
    return this;
  },

  events: {
    'click': 'greeting'
  },

  greeting: function(){
    console.log('Hello there');
  }
});

var ContainerView = Backbone.View.extend({
  el: $('.target'),

  render: function(){
    var button_view = new ButtonView({args: "hello"});
    this.$el.append(button_view.render().el);
  }
});


var container_view = new ContainerView();
container_view.render();
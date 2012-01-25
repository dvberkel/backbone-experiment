(function($){
    $(function(){
	var CounterModel = Backbone.Model.extend({
	    initialize: function(){
		this.set({value: 0});
	    }
	});

	var CounterView = Backbone.View.extend({
	    el: $("#counter"),
	    
	    initialize: function(){
		_.bindAll(this, 'render');
		
		this.render();
	    },
	    
	    render: function(){
		$(this.el).text(this.model.get("value"));
	    }
	});
	
	var counterModel = new CounterModel();
	var counterView = new CounterView({model: counterModel});
    });
})(jQuery);
(function($){
    $(function(){
	var CounterModel = Backbone.Model.extend({
	    initialize: function(){
		if (!this.has("value")) {
		    this.set({value: 0});
		}
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
	
	var counterModel = new CounterModel({value: 37});
	var counterView = new CounterView({model: counterModel});
    });
})(jQuery);
(function($){
    $(function(){
	var CounterModel = Backbone.Model.extend({
	    defaults: {
		value: 0
	    },
	    
	    increase : function() {
		this._changeBy(1);
	    },
	    
	    _changeBy : function(amount) {
		amount = amount || 1;
		this.set({value: this.get("value") + amount});
	    },
	    
	    decrease : function() {
		this._changeBy(-1);
	    }
	});

	var CounterView = Backbone.View.extend({
	    el: $("#counter"),
	    
	    initialize: function(){
		_.bindAll(this, 'render');
		
		this.model.bind("change:value", function(){
		    this.render();
		}, this);
		this.render();
	    },
	    
	    render: function(){
		$(this.el).text(this.model.get("value"));
	    }
	});
	
	var counterModel = new CounterModel();
	var counterView = new CounterView({model: counterModel});
	
	counterModel.increase();
    });
})(jQuery);
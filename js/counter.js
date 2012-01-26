(function($){
    window.CounterModel = Backbone.Model.extend({
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

    window.CounterView = Backbone.View.extend({
	initialize: function(){
	    _.bindAll(this, 'render');
	    
	    var event = this.options.event || "change:value";
	    this.model.bind(event, function(){
		this.render();
	    }, this);
	    this.render();
	},
	
	render: function(){
	    $(this.el).text(this.model.get("value"));
	}
    });

})(jQuery);
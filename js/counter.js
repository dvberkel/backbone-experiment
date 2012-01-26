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
	    
	    this.model.bind(this.options.event, function(){
		this.render();
	    }, this);
	    this.render();
	},
	
	render: function(){
	    $(this.el).text(this.model.get("value"));
	}
    });

})(jQuery);

$(function(){
    var counterModel = new CounterModel();
    var counterView = new CounterView({el: $("#counter"), model: counterModel, event: "change:value"});
    
    $("#increase").click(function(){
	counterModel.increase();
    });
    $("#decrease").click(function(){
	counterModel.decrease();
    });
});

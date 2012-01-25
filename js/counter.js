(function($){
    $(function(){
	var CounterView = Backbone.View.extend({
	    el: $("#counter"),
	    
	    initialize: function(){
		_.bindAll(this, 'render');
		
		this.render();
	    },
	    
	    render: function(){
		$(this.el).text("0");
		console.log(this.el);
	    }
	});
	
	var counterView = new CounterView();
    });
})(jQuery);
$(function(){
    var counterModel = new CounterModel({id : "persistent"});
    if (counterModel.fetch() == undefined){
	counterModel.save();
    }

    new CounterView({el: $("#counter-4"), model: counterModel});
    
    var controller = {
        increase : function(){
            this.trigger("increase");
        },
        decrease : function(){
            this.trigger("decrease");
        }
    };
    _.extend(controller, Backbone.Events);
    controller.bind("increase",function(){
	this.increase();
	this.save();
    }, counterModel);
    controller.bind("decrease",function(){
	this.decrease();
	this.save();
    }, counterModel);
    
    $("#increase-4").click(function(){
        controller.increase();
    });
    $("#decrease-4").click(function(){
        controller.decrease();
    });
    
});

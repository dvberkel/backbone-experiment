$(function(){
    var totalModel = new CounterModel();
    var increaseModel = new CounterModel();
    var decreaseModel = new CounterModel();

    new CounterView({el: $("#counter-3a"), model: totalModel});
    new CounterView({el: $("#counter-3b"), model: increaseModel});
    new CounterView({el: $("#counter-3c"), model: decreaseModel});
    
    var controller = {
        increase : function(){
            this.trigger("increase");
        },
        decrease : function(){
            this.trigger("decrease");
        }
    };
    _.extend(controller, Backbone.Events);
    controller.bind("increase",function(){this.increase();}, totalModel);
    controller.bind("increase",function(){this.increase();}, increaseModel);
    controller.bind("decrease",function(){this.decrease();}, totalModel);
    controller.bind("decrease",function(){this.increase();}, decreaseModel);
    
    $("#increase-3").click(function(){
        controller.increase();
    });
    $("#decrease-3").click(function(){
        controller.decrease();
    });
});

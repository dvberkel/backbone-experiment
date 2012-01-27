$(function(){
    var counterModel = new CounterModel();

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
    controller.bind("increase",function(){this.increase();}, counterModel);
    controller.bind("decrease",function(){this.decrease();}, counterModel);
    
    $("#increase-4").click(function(){
        controller.increase();
    });
    $("#decrease-4").click(function(){
        controller.decrease();
    });
    
    console.log(localStorage);
});

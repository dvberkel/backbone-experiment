$(function(){
    var counterModel = new CounterModel();
    new CounterView({el: $("#counter-2a"), model: counterModel});
    new CounterView({el: $("#counter-2b"), model: counterModel});
    new CounterView({el: $("#counter-2c"), model: counterModel});
    
    $("#increase-2").click(function(){
        counterModel.increase();
    });
    $("#decrease-2").click(function(){
        counterModel.decrease();
    });
});

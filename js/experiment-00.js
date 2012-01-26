$(function(){
    var counterModel = new CounterModel();
    var counterView = new CounterView({el: $("#counter-1"), model: counterModel});
    
    $("#increase-1").click(function(){
        counterModel.increase();
    });
    $("#decrease-1").click(function(){
        counterModel.decrease();
    });
});

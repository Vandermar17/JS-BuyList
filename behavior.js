
$(document).ready(function () {
    $(document).on('click',".greenButton",function () {
        $f = $(this).prev();
        $f.text(parseInt($f.text()) + 1);
        $icon=giveRemainderIcon(this);
        $icon.text(parseInt($icon.text())+1);
        $iconh=giveRemainderHidenIcon(this);
        $iconh.text(parseInt($iconh.text())+1);
        //  $("par .removebutton .buyIcon").css("text-decoration", "line-through");
    });
});
$(document).ready(function () {
   $(document).on('click',".redButton",function () {
        $per = $(this).next();
        var num=parseInt($f.text());
        if(num>1){
            $per.text(num-1);
            $icon=giveRemainderIcon(this);
            $icon.text(parseInt($icon.text())-1);
            $iconh=giveRemainderHidenIcon(this);
            $iconh.text(parseInt($iconh.text())-1);
        }
    });
});
$(document).ready(function () {
    $(document).on('click',".removebutton",function(){
        $(this).parent().parent().detach();
        giveRemainderIcon(this).parent().detach();
        giveRemainderHidenIcon(this).parent().detach();
    });

});

$(document).ready(function () {
    $(".submitButton").click(function(){
        var textic= $("#search").val();
        $clone=$(".search").next().clone();
        $clone.addClass("product").removeClass("productHid");
        $clone.find("h3").replaceWith("<h3 class='nameOP'>"+textic+"</h3>");
        $(".left").append($clone);
        $seclon=$(".remainderHid").clone();
        $seclon.addClass("remainder").removeClass("remainderHid");
        $seclon.find(".title").text(textic);
        $seclon.find(".orangeIcon").attr("id",textic);
        $(".list1").append($seclon);
        $seclonh=$(".remainderHidh").clone();
        $seclonh.addClass("remainderh").removeClass("remainderHidh");
        $seclonh.find(".title").text(textic);
        $seclonh.find(".orangeIcon").attr("id",textic+"h");
        $(".list2").append($seclonh);
        $("#search").val("");
        $("#search").focus().bind("blur",function(){});


    });

});
$(document).ready(function () {
    $('#search').keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            $(".submitButton").trigger("click");
        }
    });
});


$(document).ready(function () {
    $(document).on("click",".buybutton",function(){
        $father=$(this).parent().parent();
        $father.find("h3").css("text-decoration","line-through");
        $father.find(".redButton").css("display","none");
        $father.find(".greenButton").css("display","none");
        $father.find(".buybuttons").css("display","none");
        $father.find(".buybuttonsh").css("display","inline-block");
        giveRemainderIcon(this).parent().css("display","none");
        giveRemainderHidenIcon(this).parent().css("display","inline-block");

    });
});

$(document).ready(function () {
    $(document).on("click",".buybuttonh",function(){
        $father=$(this).parent().parent();
        $father.find("h3").css("text-decoration","");
        $father.find(".redButton").css("display","inline-block");
        $father.find(".greenButton").css("display","inline-block");
        $father.find(".buybuttons").css("display","inline-block");
        $father.find(".buybuttonsh").css("display","none");
        giveRemainderIcon(this).parent().css("display","inline-block");
        giveRemainderHidenIcon(this).parent().css("display","none");
    });
});
$(document).ready(function () {
   $(document).on("click",".nameOP",function(){
       $father=$(this).parent().parent();
       $father.find(".name").css("display","none");
       $father.find(".inputerh").css("display","inline-block");
       $inp=$father.find(".inputer");
       $inp.focus().bind("blur",function(){});
       $inp.val($father.find(".nameOP").text());

   }) ;
});

$(document).ready(function(){
    $(document).on("focusout",".inputer",function(){
        $father=$(this).parent().parent();
        $name=$father.find(".nameOP");
        $father.find(".inputerh").css("display","none");
        $icon=giveRemainderIcon(this).parent();
        $icon.find(".title").text($father.find(".inputer").val());
        $icon.find(".orangeIcon").attr("id",$father.find(".inputer").val());
        $iconh=giveRemainderHidenIcon(this).parent();
        $iconh.find(".title").text($father.find(".inputer").val());
        $iconh.find(".orangeIcon").attr("id",$father.find(".inputer").val()+"h");
        $name.text($father.find(".inputer").val());
        $father.find(".name").css("display","inline-block");
    });
});

function giveRemainderIcon(thi ){
    $name=$(thi).parent().parent().children(".name").children("h3");
    var id="#"+$name.text();
    return $(".remainder").children(id);
}
function giveRemainderHidenIcon(thi ){
    $name=$(thi).parent().parent().children(".name").children("h3");
    var id="#"+$name.text()+"h";
    return $(".remainderh").children(id);
}


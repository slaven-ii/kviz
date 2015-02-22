/**
 * Created by st00ne1 on 22/02/15.
 */
$(document).ready(function(){
    $("h2").on("click", function(){
        $({someValue: 1}).animate({someValue: maxHeight+10}, {
            duration: 500,
            step: function() {
                height = (this.someValue)
                //$('#el').text(Math.ceil(this.someValue));
            }
        });
    });

    $("h2").on("click", function(){
        $("#master").fadeOut("fast");
        setTimeout(function(){
            $(".quizContainer").slideDown("slow");

        }, 500)
    });
/*
    $(".answer a").on("click", function(e){
        e.preventDefault();
        var parentUl = $(this).parents('ul');
        parentUl.find('li').removeClass("active");
        parentUl.find("input").val($(this).text());
        $(this).parent("li").addClass("active");
    });
    */
});

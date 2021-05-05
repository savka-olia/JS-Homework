//task1
$("a[href^='https://']").attr("target","_blank");

//task2
$(".head").css("background-color","green").find(".inner").css("font-size","35px");

//task3
$("h3 + div").each(function() {
  let $elem = $(this);
  $elem.prev().before($elem);
}) ;

//task4
const $checkboxes = $(":checkbox");
$checkboxes.on("click", function(){
    if ($(":checkbox:checked").length >= 3){
        $checkboxes.attr("disabled", "true");
    }
});
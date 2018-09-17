$(document).ready(function() {
$(function(){
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});
$('#hide_menu_button>i').on('click', function() {
  $('#hide_menu').slideToggle('fast');
})
$('#check>div').on('mouseover', function() {
  $(this).find('i').css({'color': '#EE9A00'})
})
$('#check>div').on('mouseout', function() {
  $(this).find('i').css({'color': '#474747'})
})
})
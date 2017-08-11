$(document).ready(function() {
  $('#productMenu').hide();   
    
  $('#products').mouseenter(function() {
    $('#productMenu').slideDown('fast'); 
    });    

  $('#productMenu').mouseleave(function() {
    $('#productMenu').slideUp('fast'); });
  
    $('#about').mouseenter(function() {
    $('#productMenu').slideUp('fast'); 
    });
    
    $('#plans').mouseenter(function() {
    $('#productMenu').slideUp('fast'); 
    });
    
    $('.menuCard').click(function(){
        $('#productMenu').slideUp('fast');
    })
    
});
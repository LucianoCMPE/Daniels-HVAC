var interval;
interval = setInterval(function(){
  $('#slideshow-container').trigger('click');
}, 5000);

$('#slideshow-overall').mouseenter(function(){
  clearInterval(interval);
});

$('#slideshow-overall').mouseleave(function(){
  interval = setInterval(function(){
    $('#slideshow-container').trigger('click');
  }, 5000);
});

// $("#slide").animate({width:'toggle'},350);
//
function changePosition() {
    if(currentPosition == numberOfSlides - 1) {
        currentPosition = 0;
        manageNav(currentPosition);
    } else {
        currentPosition++;
        manageNav(currentPosition);
    }
    moveSlide();
}


$("#test34").hide().fadeIn();

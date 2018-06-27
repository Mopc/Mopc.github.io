$(function() {

//  HIDE NAV

	$('.toggles button').click(function(){
		var get_id = this.id;
		var get_current = $('.' + get_id);

//  OUR WORK posts

		$('.post').not(get_current).hide(500);
		get_current.show(500);
	});
	$('#showall').click(function() {
		$('.post').show(500);
	});
});;

//  SLIDER

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items:8,
    loop: true,
    margin: 40,
    responsive: {
      0 : {
          margin: 0,
          items:3
      },
      420 : {
          margin: 10,
          items:4
      },
      640 : {
          margin: 20,
          items:5

      },
      1024 : {
          margin: 25,
          items:6

      },
      1280 : {
          margin: 30,
          items:8
      }
    }
  });
});

export function owlcaller(){

( function( $ ) {

  var loopidentity = $('main section .owl-theme');

  loopidentity.each(function(){
    var slidecaller = $(this).attr('data-caller');
    $(slidecaller).owlCarousel({
      loop:true,
      nav:true,
      items: 1,
      mouseDrag: false,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      nav: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="70.711" height="70.711" viewBox="0 0 70.711 70.711"><path id="Combined_Shape" data-name="Combined Shape" d="M0,49V1A1,1,0,0,1,1,0H49a1,1,0,1,1,0,2H2V49a1,1,0,1,1-2,0Z" transform="translate(0 35.356) rotate(-45)" fill="#d4b254"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="70.711" height="70.711" viewBox="0 0 70.711 70.711"><path id="Combined_Shape" data-name="Combined Shape" d="M0,49V1A1,1,0,0,0-1,0H-49a1,1,0,0,0-1,1,1,1,0,0,0,1,1H-2V49a1,1,0,0,0,1,1A1,1,0,0,0,0,49Z" transform="translate(70.711 35.356) rotate(45)" fill="#d4b254"/></svg>'],
      dots: true,
    });
  });

}( jQuery ) );

}

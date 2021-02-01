/* global */
/**
 * File app.js.
 *
*/

/* Default Function Import's */
import { lazyloading } from "./inc/lazyload";
import { owlcaller } from "./inc/owlcaller";
/*  Default Function Import's Ends */

( function( $ ) {

  /* Preloader */
    $("#preloader").delay(1000).fadeOut("slow");
   /* Preloader */

  /* WOW INIT */
    new WOW().init();
  /* WOW INIT ENDS */

 /* LAZYLOADING */
  lazyloading();
 /* LAZYLAdING ENDS */

  /* Call All Generated Courusels */
    owlcaller();
  /* Call All Generated Courusels Ends */

  /* SIDE MENU FUNCTION */

 $(".side-togglers").on( "click", function() {
   var sides = $('#side-menu');
   var checkclass = $('.menu-open');
   if(checkclass.length){
     sides.find('.side-menu-wrapper-inner').toggleClass('menu-open');
     sides.delay(500).fadeToggle('ease');
   }
   else{
     sides.fadeToggle('ease');
     sides.find('.side-menu-wrapper-inner').toggleClass('menu-open');
   }
 });

 /* SIDE MENU FUNCTION ENDS */

}( jQuery ) );

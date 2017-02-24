import * as particleground from './javascripts/particleground/jquery.particleground.js';


$(document).ready(function() {
  $(".button-collapse").sideNav();
  $('#biggbox').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa',
    minSpeedY:0.1
  });

});

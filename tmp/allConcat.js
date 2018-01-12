import { testVar } from './../js/doctor.js';
let apiKey = require('./../.env').apiKey;
alert(testVar);
$(document).ready(function(){
  alert(apiKey);
  $('h1').text(apiKey);
});

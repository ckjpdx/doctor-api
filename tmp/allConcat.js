import { apiCall } from './../js/doctor.js';
export function displayDocInfo(docInfo){
  $('h1').text(docInfo);
}
$(document).ready(function(){
  apiCall(displayDocInfo, `toothache`, `Johnson`, `or-portland`);
});

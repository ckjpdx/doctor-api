import { apiCall } from './../js/doctor.js';
export function displayDocInfo(docInfo){
  $('h1').text(docInfo);
}
$(document).ready(function(){
  $('#user-form').submit(function(){
    this.preventDefault();
    let userAilment = $('#user-aliment').val();
    let docName = $('#doc-name').val();
    let searchLocation = $('#search-location').val();
    apiCall(displayDocInfo, userAilment, docName, searchLocation);
  });
});

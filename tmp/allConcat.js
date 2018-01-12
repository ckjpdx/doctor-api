import { apiCall } from './../js/doctor.js';
import { searchQueryPrepper } from './../js/searchQueryPrepper.js';
function displayDocInfo(docInfo){
  $('h1').text(docInfo);
}
$(document).ready(function(){
  $('#user-form').submit(function(event){
    event.preventDefault();
    let userAilment = $('#user-aliment').val();
    let docName = $('#doc-name').val();
    let searchLocation = $('#search-location').val();
    apiCall(displayDocInfo, searchQueryPrepper(userAilment, docName, searchLocation));
  });
});

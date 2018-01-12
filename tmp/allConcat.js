import { apiCall } from './../js/doctor.js';
import { searchQueryPrepper } from './../js/searchQueryPrepper.js';
function displayDocInfo(docInfo){
  $('#doc-list').empty();
  for (let i = 0; i < docInfo.data.length; i++) {
    let vAddress = docInfo.data[i].practices[0].visit_address;
    if (vAddress === undefined) {
      vAddress = `No Address Found`;
    }
    $('#doc-list').append(`<ul>
      <li>${docInfo.data[i].profile.first_name} ${docInfo.data[i].profile.last_name}</li>
      <li>${vAddress.street}, <em>${vAddress.street2}</em>, ${vAddress.city} ${vAddress.zip}</li>
      <li>${docInfo.data[i].practices[0].phones[0].number}</li>
      <ul>`);
  }
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

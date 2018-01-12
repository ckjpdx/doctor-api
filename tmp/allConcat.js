import { apiCall } from './../js/doctor.js';
import { searchQueryPrepper } from './../js/searchQueryPrepper.js';
function displayDocInfo(docInfo){
  $('#doc-list').empty();
  docInfo.data.forEach(function(listing) {
    let contactInfo = ``;
    let addressInfo = ``;
    if (listing.practices[0]) {
      contactInfo = `<li>${listing.practices[0].visit_address}</li>
      <li>${listing.practices[0].phones[0].number}</li>`;
      addressInfo = `<li>
      ${listing.practices[0].visit_address.street}, ${listing.practices[0].visit_address.street2}<br>
      ${listing.practices[0].visit_address.city}
      ${listing.practices[0].visit_address.zip}
      </li>`
    } else {
      addressInfo = `No address on file`
      contactInfo = `No contact information on file`;
    }
    $('#doc-list').append(`<ul>
      <li>${listing.profile.first_name} ${listing.profile.last_name}</li>
      ${addressInfo}
      ${contactInfo}
      <ul>`);
  });
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

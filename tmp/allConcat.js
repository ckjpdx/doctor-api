import { apiCall } from './../js/doctor.js';
import { searchQueryPrepper } from './../js/searchQueryPrepper.js';
function displayDocInfo(docInfo){
  $('#doc-list').empty();
  if (docInfo.data.length === 0){
    $('#doc-list').text('Nothing matched your search results!');
  }
  docInfo.data.forEach(function(listing) {
    const nameInfo = `<li>${listing.profile.first_name} ${listing.profile.last_name}</li>`;
    let contactInfo = ``;
    let acceptingPatientsMessage = ``;
    if (listing.practices[0]) {
      acceptingPatientsMessage = (listing.practices[0].accepts_new_patients) ? 'Accepting Patients' : 'NOT Accepting New Patients';
      const street2 = listing.practices[0].visit_address.street2 || ``;
      contactInfo = `<li>
      ${listing.practices[0].visit_address.street}, ${street2}<br>
      ${listing.practices[0].visit_address.city},
      ${listing.practices[0].visit_address.state}
      ${listing.practices[0].visit_address.zip}
      </li>
      <li>${listing.practices[0].phones[0].number}</li>`
    } else {
      contactInfo = `No contact information on file`;
    }
    $('#doc-list').append(`
      <div class="doc-listing">
        <img src="../img/${listing.profile.gender}.jpg">
        <ul>
          ${nameInfo}
          ${acceptingPatientsMessage}
          ${contactInfo}
        <ul>
      </div>`);
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

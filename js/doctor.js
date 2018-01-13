const apiKey = require('./../.env').apiKey;
console.log(`require import ${apiKey}`);
export function apiCall(displayDocInfo, searchQueryString){
  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?${searchQueryString}user_key=${apiKey}`;
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });

  promise.then(function(response) {
    console.log(`then func`);
    let docInfo = JSON.parse(response);
    console.log(docInfo);
    displayDocInfo(docInfo);
  }, function(error) {
    alert(`There was an error processing your request: ${error.message}`);
  });
}

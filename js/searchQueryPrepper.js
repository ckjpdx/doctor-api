export function searchQueryPrepper(userAilment, docName, searchLocation){
  let queryArr = [];
  if (userAilment.length > 0) {
    userAilment = `query=${userAilment}&`;
    queryArr.push(userAilment);
  }
  if (docName.length > 0) {
    docName = `name=${docName}&`;
    queryArr.push(docName);
  }
  if (searchLocation.length > 0) {
    searchLocation = `location=${searchLocation}&`;
    queryArr.push(searchLocation);
  }
  console.log(queryArr);
  return queryArr.join('');
}

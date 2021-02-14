function displayData(response) {
  console.log(response.data.data[0].code)

}


let apiKey = `6e2c2fe6da4f8d0c51f51185fb4d24bf`;
let apiUrl = `http://api.marketstack.com/v1/currencies?access_key=${apiKey}`;

axios.get(apiUrl).then(displayData);
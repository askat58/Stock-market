//Today date is:
let now = new Date();
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
let months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12"
  ];
  let currentYear = now.getFullYear();
  let currentDay = days[now.getDay()];
  let currentMonth = months[now.getMonth()];
  let currentDate = now.getDate();
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let formattedDate = `🌞${currentDay}, ${currentDate}/${currentMonth}/${currentYear} ⏱${hours}:${minutes}`;

let actual = document.querySelector("#actual");
  actual.innerHTML = formattedDate;

//Search engine:
function displayData(response) {
  let currencies = ["USD", "ARS", "EUR", "BHD", "BRL", "CAD", "CLP", "CNY", "COP", "DKK", "EGP", "HKD", "HUF", "ISK", "INR", "IDR", "ILS", "JPY", "MYR", "MXN", "NZD", "NGN", "NOK", "PKR", "PEN", "PHP", "QAR", "RUB", "SAR", "SGD", "ZAR", "KRW", "CHF", "TWD", "THB", "TRY", "AED", "GBP", "VND", "AUD", "SEK", "PLN"];

  let codeInputElement = document.querySelector("#search-currency");
  let inputData = codeInputElement.value.toUpperCase(); 

  for (let index = 0; index < 42; index++) {
    if (currencies[index] == inputData) {
      let selectedCode = document.querySelector("#currency-code").innerHTML = response.data.data[index].code;
      let selectedName = document.querySelector("#currency-name").innerHTML = response.data.data[index].name;
      let selectedSymbol = document.querySelector("#currency-symbol").innerHTML = response.data.data[index].symbol;
      alert("Great choice!💸💸💸");
    } 
  }

}

function searchCode() {
  let apiKey = `6e2c2fe6da4f8d0c51f51185fb4d24bf`;
  let apiUrl = `http://api.marketstack.com/v1/currencies?access_key=${apiKey}`;

  axios.get(apiUrl).then(displayData);
}

function handleSubmit(event) {
  event.preventDefault();
  let codeInputElement = document.querySelector("#search-currency");
  searchCode(codeInputElement.value);
}

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);


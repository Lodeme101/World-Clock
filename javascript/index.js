function updateTime() {
  //Porta
  let portaElement = document.querySelector("#porta");
  if (portaElement) {
    let portaDateElement = portaElement.querySelector(".date");
    let portaTimeElement = portaElement.querySelector(".time");
    let portaTime = moment().tz("Portugal");
    portaDateElement.innerHTML = portaTime.format("MMMM Do YYYY");
    portaTimeElement.innerHTML = portaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Pretoria
  let pretoriaElement = document.querySelector("#pretoria");
  if (pretoriaElement) {
    let pretoriaDateElement = pretoriaElement.querySelector(".date");
    let pretoriaTimeElement = pretoriaElement.querySelector(".time");
    let pretoriaTime = moment().tz("Africa/Johannesburg");
    pretoriaDateElement.innerHTML = pretoriaTime.format("MMMM Do YYYY");
    pretoriaTimeElement.innerHTML = pretoriaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format("A")}</small></div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

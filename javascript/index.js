function updateTime() {
  //Porta
  let portaElement = document.querySelector("#porta");
  let portaDateElement = portaElement.querySelector(".date");
  let portaTimeElement = portaElement.querySelector(".time");
  let portaTime = moment().tz("Portugal");
  portaDateElement.innerHTML = portaTime.format("MMMM Do YYYY");
  portaTimeElement.innerHTML = portaTime.format("h:mm:ss [<small>]A[</small>]");

  //Pretoria
  let pretoriaElement = document.querySelector("#pretoria");
  let pretoriaDateElement = pretoriaElement.querySelector(".date");
  let pretoriaTimeElement = pretoriaElement.querySelector(".time");
  let pretoriaTime = moment().tz("Africa/Johannesburg");
  pretoriaDateElement.innerHTML = pretoriaTime.format("MMMM Do YYYY");
  pretoriaTimeElement.innerHTML = pretoriaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);

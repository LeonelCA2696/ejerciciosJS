/**Ej1 -Pide la edad y si es mayor de 18 años indica que ya puede conducir. */

function edadConduccion() {
  const inputEdad = document.getElementById("ej1");
  const edad = inputEdad.value;
  let messageD;

  if (edad >= 18) {
    messageD = "Usted es mayor de edad, puede conducir.";
  } else {
    messageD = "Usted no es mayor de edad, no puede conducir.";
  }

  const drivingMessage = document.getElementById("driving-authorization");
  drivingMessage.innerText = messageD;
}


/**Ej2 - Pide una nota (número). Muestra la calificación según la nota:
0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente */


function qualification() {

const inputQualification = document.getElementById('ej2');
const inputMessageQualification = document.getElementById('response-qualification');
const qualificationAdquired = inputQualification.value;
let messageQualification;

if (qualificationAdquired >= 0 && qualificationAdquired < 3) {
    messageQualification = 'Muy deficiente';
} else if (qualificationAdquired >= 3 && qualificationAdquired < 5 ) {
    messageQualification = 'Insuficiente';
} else if (qualificationAdquired >= 5 && qualificationAdquired < 6 ) {
    messageQualification = 'Suficiente'; 
} else if (qualificationAdquired >= 6 && qualificationAdquired < 7 ) {
    messageQualification = 'Bien'; 
} else if (qualificationAdquired >= 7 && qualificationAdquired < 9 ) {
    messageQualification = 'Notable'; 
} else if (qualificationAdquired >= 9 && qualificationAdquired <= 10 ) {
    messageQualification = 'Sobresaliente'; 
} else {
    alert('Ingrese un rango de calificacion valido');
}
return inputMessageQualification.innerText = messageQualification;
}


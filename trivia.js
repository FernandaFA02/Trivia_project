/*Componente Principal de Trivia
Autor: Fernanda Fajardo
Proyecto 1
16/septiembre/2021*/

//Bienvenida
var app = "Trivia de México" 
var userName = prompt("Hola, Bienvenid@, porfavor ingresa tu nombre")
console.log(userName)// muestra el nombre el usuario

document.getElementById("title").innerHTML ="Proyecto de " + app

document.getElementById("user_name").innerHTML ="Bienvenid@ " + userName

var curiosity = confirm("Gustas realizar esta encuesta?")
var correctCuriosity = true

if (curiosity == correctCuriosity){
    alert("Gracias")

//Comienzan preguntas y respuestas

//Pregunta 1
var question1 = prompt("El santurio de las mariposas Monarca se encuentra en?")
console.log(question1)
//Acceder al html desde JavaScript
document.getElementById("received_answer1").innerHTML = ("Tu respuesta 1 " + question1)
//Respuesta correcta 1
var correctAnswer1 = "Michoacan"
//Acceder al html desde JavaScript
document.getElementById("correct_answer1").innerHTML = "La respuesta correcta era " + correctAnswer1
//Alerta de respuestas
if (question1 == correctAnswer1) {
    alert(":)")
} else {
    alert(":( ")
} 

//Pregunta 2
var question2 = prompt("¿En que estado se encuentra la Riviera Maya?")
console.log(question2)
//Acceder al html desde JavaScript
document.getElementById("received_answer2").innerHTML = "Tu respuesta 2 " + question2
//Respuesta correcta 2
var correctAnswer2 = "Quintana Roo"
//Acceder al html desde JavaScript
document.getElementById("correct_answer2").innerHTML = "La respuesta correcta era " + correctAnswer2
//Alerta de respuestas
if (question2 == correctAnswer2) {
    alert(":)")
} else {
    alert (":(")
}

//Pregunta 3
var question3 = prompt("Nombra los 3 principales estados que abarca la Huasteca")
console.log(question3)
//Acceder al html desde JavaScript
document.getElementById("received_answer3").innerHTML = "Tu respuesta 3 " + question3
//Respuesta correcta 3
var correctAnswer3 = ["San Luis Potosi", "Veracruz", "Hidalgo"]
//Acceder al html desde JavaScript
document.getElementById("correct_answer3").innerHTML = "La respuesta correcta era " + correctAnswer3
//Alerta de respuestas
if (question3 == correctAnswer3) {
    alert(":)")
} else {
    alert(":(")
}

//Pregunta 4
var question4 = prompt("¿Cuál es la ciudad que cuenta con más museos en el país?")
console.log(question4)
//Acceder al html desde JavaScript
document.getElementById("received_answer4").innerHTML = "Tu respuesta 4 " + question4
//Respuesta correcta 4
var correctAnswer4 = "Ciudad de México"
//Acceder al html desde JavaScript
document.getElementById("received_answer4").innerHTML = "La respuesta correcta era " + correctAnswer4
//Alerta de respuestas
if (question4 == correctAnswer4) {
    alert(":)")
} else {
    alert(":(")
}

//Pregunta 5
var question5 = prompt("¿Que lugar es conocido como 'El lugar donde habitan los brujos'?")
console.log(question5)
//Acceder al html desde JavaScript
document.getElementById("received_answer5").innerHTML = "Tu respuesta 5 " + question5
//Respuesta correcta 5
var correctAnswer5 = "Catemaco"
//Acceder al html desde JavaScript
document.getElementById("correct_answer5").innerHTML = "La respuesta correcta era " + correctAnswer5
//Alerta de respuestas
if (question5 == correctAnswer5) {
    alert(":)")
} else {
    alert(":(")
}

//Pregunta 6
var question6 = prompt("¿En que estado se encuentra hubicado Tequila?")
console.log(question6)
//Acceder al html desde JavaScript
document.getElementById("received_answer6").innerHTML = "Tu respuesta 6 " + question6
//Respuesta correcta 6
var correctAnswer6 = "Jalisco"
//Acceder al html desde JavaScript
document.getElementById("correct_answer6").innerHTML = "La respuesta correcta era " + correctAnswer6
//Alerta de respuestas
if (question6 == correctAnswer6) {
    alert(":)")
} else {
    alert(":(")
}

//Pregunta 7
var question7 = prompt("Principal grupo étnico al que pertenecen los voladores de Papantla...?")
console.log(question7)
//Acceder al html desde JavaScript
document.getElementById("received_answer7").innerHTML = "Tu respuesta 7 " + question7
//Respuesta correcta 7
var correctAnswer7 = "Totonaco"
//Acceder al html desde JavaScript
document.getElementById("correct_answer7").innerHTML = "La respuesta correcta era " + correctAnswer7
//Alerta de respuestas
if (question7 == correctAnswer7) {
    alert(":)")
} else {
    alert(":(")
}

//Pregunta 8
var question8 = prompt("¿Como se llama el sitio turistico más famoso en Los Cabos?")
console.log(question8)
//Acceder al html desde JavaScript
document.getElementById("received_answer8").innerHTML =  "Tu respuesta 8 " + question8
//Respuesta correcta 8
var correctAnswer8 = "El arco"
//Acceder al html desde JavaScript
document.getElementById("correct_answer8").innerHTML = "La respuesta correcta era " + correctAnswer8
//Alerta de respuestas
if (question8 == correctAnswer8) {
    alert(":)")
} else {
    alert(":(")
}

//Pregunta 9
var question9 = prompt("¿Comó se llama el templo (piramide) ubicado en Chichén Itzá?")
console.log(question9)
//Acceder al html desde JavaScript
document.getElementById("received_answer9").innerHTML = "Tu respuesta 9 " + question9
//Respuesta correcta 9
var correctAnswer9 = "Kukulcán"
//Acceder al html desde JavaScript
document.getElementById("correct_answer9").innerHTML = "La respuesta correcta era " + correctAnswer9
//Alerta de respuestas
if (question9 == correctAnswer9) {
    alert(":)")
} else {
    alert(":(")
}

//Pregunta 10
var question10 = prompt("Nombra los 3 tipos de civilizaciones que se pueden observar en los edificios de la Plaza de las 3 Culturas")
console.log(question10)
//Acceder al html desde JavaScript
document.getElementById("received_answer10").innerHTML = "Tu respuesta 10 " + question10
//Respuesta correcta 10
var correctAnswer10 = ["precolombina","colonial","moderna"]
//Acceder al html desde JavaScript
document.getElementById("correct_answer10").innerHTML = "La respuesta correcta " + correctAnswer10
//Alerta de respuestas
if (question10 == correctAnswer10) {
    alert(":)")
} else{
    alert(":(")
}

}else {
    alert("Ok, Bye!")
}


















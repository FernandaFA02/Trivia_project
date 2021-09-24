/*Componente Principal de Trivia
Autor: Fernanda Fajardo
Proyecto 1
16/septiembre/2021*/

//Bienvenida
var app = "Trivia de México" 
var userName = prompt("Hola, Bienvenid@ a la trivia sobre México, porfavor ingresa tu nombre")
console.log(userName)// muestra el nombre el usuario

document.getElementById("title").innerHTML ="Proyecto " + app

document.getElementById("user_name").innerHTML ="Bienvenid@ " + userName

var curiosity = confirm("Gustas realizar esta encuesta?")
var correctCuriosity = true

if (curiosity == correctCuriosity){
    alert("Gracias, Comencemos!. Por favor escribe el número correspondiente a tu respuesta.")

//Comienzan preguntas y respuestas

//Pregunta 1
var question1 = prompt("El santuario de las mariposas Monarca se encuentra en? \n 1.Sinaloa \n 2.Michoacán \n 3.Puebla")
console.log(question1)
//Alerta de respuestas
if (question1 == 2) {
    alert("Correcto! :)")
} else {
    alert(":( ")
} 
//Accede al html desde JavaScript
document.getElementById("answer1").innerHTML = question1

//Pregunta 2
var question2 = prompt("¿En que estado se encuentra la Riviera Maya? \n 1.Yucatán \n 2.Campeche \n 3.Quintana Roo")
console.log(question2)
//Alerta de respuestas
if (question2 == 3) {
    alert("Excelente!")
} else {
    alert (":/")
}
//Accede al html desde JavaScript
document.getElementById("answer2").innerHTML = question2

//Pregunta 3
var question3 = prompt("Las cascadas Hierve el agua, se encuentran en? \n 1.Chiapas \n 2.San Luis Potosi \n 3.Oaxaca")
console.log(question3)
//Alerta de respuestas
if (question3 == 3) {
    alert("Muy bien!!")
} else {
    alert(":/")
}
//Accede al html desde JavaScript
document.getElementById("answer3").innerHTML = question3

//Pregunta 4
var question4 = prompt("¿Cuál es la ciudad que cuenta con más museos en el país? \n 1.CDMX \n 2.Guadalajara \n 3.Monterrey")
console.log(question4)
//Alerta de respuestas
if (question4 == 1) {
    alert("Asi se hace!")
} else {
    alert(":/")
}
//Accede al html desde JavaScript
document.getElementById("answer4").innerHTML = question4

//Pregunta 5
var question5 = prompt("¿Que lugar es conocido como 'El lugar donde habitan los brujos'? \n 1.Catemaco \n 2.Coatepec \n 3.Calcahualco")
console.log(question5)
//Alerta de respuestas
if (question5 == 1) {
    alert("Perfecto!!")
} else {
    alert(":/")
}
//Accede al html desde JavaScript
document.getElementById("answer5").innerHTML = question5

//Pregunta 6
var question6 = prompt("¿En que estado se encuentra hubicado Tequila? \n 1.Jalisco \n 2.San Luis Potosi \n 3.Nayarit")
console.log(question6)
//Alerta de respuestas
if (question6 == 1) {
    alert("Sigue asi!!!")
} else {
    alert(":(")
}
//Accede al html desde JavaScript
document.getElementById("answer6").innerHTML = question6

//Pregunta 7
var question7 = prompt("Principal grupo étnico al que pertenecen los voladores de Papantla...? \n 1.Zapoteca \n 2.Totonaca \n 3.Mazateco")
console.log(question7)
//Alerta de respuestas
if (question7 == 2) {
    alert("Eso es! :)")
} else {
    alert(":(")
}
//Accede al html desde JavaScript
document.getElementById("answer7").innerHTML = question7

//Pregunta 8
var question8 = prompt("¿Como se llama el sitio turistico más famoso en Los Cabos? \n 1.Playa el Tule \n 2.Parque Nacional Cabo Pulmo \n 3.El arco")
console.log(question8)
//Alerta de respuestas
if (question8 == 3) {
    alert("Asi se hace!")
} else {
    alert("Tú puedes, intentalo :(")
}
//Accede al hmtl desde JavaScript
document.getElementById("answer8").innerHTML = question8

//Pregunta 9
var question9 = prompt("¿Comó se llama el templo (pirámide) ubicado en Chichén Itzá? \n 1.Pirámide de los nichos \n 2.Kukulcán \n 3.Calakmul")
console.log(question9)
//Alerta de respuestas
if (question9 == 2) {
    alert("Super!!")
} else {
    alert("Ánimo, solo falta una :/")
}
//Accede al hmtl desde JavaScript
document.getElementById("answer9").innerHTML = question9

//Pregunta 10
var question10 = prompt("¿En donde se encuentra ubicado el Pueblo Mágico de San Pedro Cholula? \n 1.Puebla \n 2.Queretaro \n 3.Hidalgo")
console.log(question10)
//Alerta de respuestas
if (question10 == 1) {
    alert("Harry, eres un mago!!!")
} else{
    alert("Al menos lo intentaste ")
}
//Acceder al html desde JavaScript
document.getElementById("answer10").innerHTML = question10

}else {
    alert("Antes de que te vayas, te daré unos datos curiosos...")
    alert("¿Sabías que la televisión en color fue inventada en México? También son inventos mexicanos la tinta indeleble y la píldora anticonceptiva.")
    alert("El cráter de Chicxulub al norte de la península de Yucatán es el lugar donde, según algunas teorías, cayó el meteorito que acabó con los dinosaurios.")
    alert("Ok eso es todo por el momento, que tengas lindo día Bye!")
}


















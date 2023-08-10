
/* Así es como funciona nuestro registro. Hay corredores adultos (mayores de 18 años) y corredores jóvenes (menores de 18 años). Pueden registrarse temprano o tarde. A los corredores se les asigna un número de carrera y una hora de inicio en función de su edad e inscripción.

Número de carrera:

Los primeros adultos reciben un número de carrera igual o superior a 1000.
Todos los demás reciben un número por debajo de 1000.
Hora de inicio:

Los inscritos adultos corren a las 9:30 a. m. o a las 11:00 a. m.
Los adultos tempranos corren a las 9:30 am.
Adultos tarde corren a las 11:00 am.
Los jóvenes que se inscriban corren a las 12:30 horas (independientemente de la inscripción). */

let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);
let early = true;
let age = 33;

if (early && age > 18) {
  raceNumber += 1000
}

if (early && age > 18) {
  console.log(`Runer ${raceNumber} Your race starts at 9:30 a.m.`);
} else if (early === false && age > 18) {
  console.log(`Runer ${raceNumber} Your race starts at 11:00 a.m.`);
}

if (age < 18) {
  console.log(`Runer ${raceNumber} Your race starts at 12:30 a.m.`);
} else (age === 18) 
  console.log("Check out the registration desk");


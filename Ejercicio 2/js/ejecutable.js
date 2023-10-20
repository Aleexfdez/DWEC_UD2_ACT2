import Grupo from "./grupo.js";
import Instituto from "./instituto.js";

var instituto1 = new Instituto("I001", "Instituto 001");
var grupo1 = new Grupo("G001", 10);
var grupo2 = new Grupo("G002", 15);
var grupo3 = new Grupo("G003", 20);
var grupo4 = new Grupo("G004", 25);

// Conocer el código del instituto.
console.log("El código del " + instituto1._nombreInstituto + " es -> " + instituto1.CodigoInstituto);

//  Conocer el número total de alumnos del centro.
console.log("Total Nº de alumnos en " + instituto1._nombreInstituto + " -> " + instituto1.totalAlumnosInstituto())

// Añadir nuevos grupos al instituto. 
instituto1.addGrupos(grupo1);
instituto1.addGrupos(grupo2);
instituto1.addGrupos(grupo3);
instituto1.addGrupos(grupo4);
console.log("Total Nº de alumnos en " + instituto1._nombreInstituto + " -> " + instituto1.totalAlumnosInstituto())
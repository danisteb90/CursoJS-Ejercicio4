let nombre = "Esteban";
let apellido = "Alban";
let estudiante = `estudiante ${nombre} ${apellido}`;
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let estudianteNum = estudiante.length
let nombreLet1 = nombre.charAt(0);
let apellidoLetf = apellido.charAt(4);
let estudianteElim = estudiante.replace(/\s+/g, '');
let estudianteNom = estudiante.includes(nombre);

console.log(nombre);
console.log(apellido);
console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(estudianteNum);
console.log(nombreLet1);
console.log(apellidoLetf);
console.log(estudianteElim);
console.log(estudianteNom);
//Ejemplo de objeto

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 55
}

//Ejemplo de metodo en objeto

let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 55,
    nombreCompleto: function(){
        return this.nombre+' '+this.apellido;
    }
}

console.log(persona1.nombreCompleto());


//Otra forma de crear un objeto

let persona2 = new Object();
persona2.nombre = 'Bautista';
persona2.direccion = 'Francia 1256';
persona2.telefono = '3456754362';
console.log(persona2);

//Recorrer todas las propiedades de un objeto

for(nombrePropiedad in persona2){
    console.log(nombrePropiedad);
    console.log(persona2[nombrePropiedad]);
}

//Agregar y eliminar propiedades de un objeto
//Agregar propiedad a un objeto
persona.tel = '8534934';
console.log(persona);

//Eliminar propiedad a un objeto
delete persona.tel;
console.log(persona);

//Distintas formas de imprimir un Objeto
console.log(persona.nombre+' '+persona.apellido);

for(propiedad in persona){
    console.log(persona[propiedad]);
}

//el metodo values me devuelve un arreglo con los valores de nuestro objecto persona, esto lo recibe personaArray
let personaArray = Object.values(persona);
console.log(personaArray);


//Metodo get
let persona33 = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 55,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    }
    ,
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre+' '+this.apellido;
    }
}
console.log(persona33.nombreCompleto);
persona33.lang = 'en';
console.log(persona33.lang);


//Metodo constructor
//Funcion constructor de objetos de tipo Persona
function Persona(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

let persona55 = new Persona ('lautaro','gonzales');
console.log(persona55);

//Pone por defecto este telefono, en todas las clases que cree.
Persona.prototype.tel = '45365365';

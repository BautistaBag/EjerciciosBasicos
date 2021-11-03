//Manejo de funciones

 //Declaracion de la funcion
function miFuncion(a,b){
    console.log("Suma: " + (a + b));
}
//Llamando a la funcion
miFuncion(5,6);



//Declaracion de la funcion
function miFuncion2(a,b){
    return a+b;
}
//Llamando a la funcion
let resultado = miFuncion2(2,3);
console.log(resultado);

//Declaracion Funcion de tipo Exprecion
let sumar = function (a,b){ return a+b};
resultado = sumar(1,2);
console.log(resultado);

//Funciones de Self invoking
(function(){
    console.log('Ejecutando la funcion');
})();


//Funcion Flecha
let sumarFuncionTipoFlecha = (a,b) => a + b;
resultado = sumarFuncionTipoFlecha(4,5);
console.log(resultado);


//Sumar todos los argumentos de una funcion
function sumarTodo(){
    let suma=0;
    for(let i =0;i<arguments.length;i++){
        suma += arguments[i]; 
    }
    return suma;
}
resultado = sumarTodo(6,8,9,2);
console.log(resultado);

//Paso por valor
let x=10

function cambiarValor(a){
    a=20;
}
cambiarValor(x);
console.log(x);
//la consola sigue devolviendo el valor 10, ya que la que se modifica es la variable a


//Paso por referencia
const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'Carlos';
}

cambiarValorObjeto(persona);
console.log(persona);

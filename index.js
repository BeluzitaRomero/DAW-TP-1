//Integrantes:
// Romero Ana Belen
// Bordet Gaston
// 2) Crear las clases “Perro”, “Gato”, y “Vaca” que implementen la interfaz “Animal”
var Perro = /** @class */ (function () {
    function Perro(nombre) {
        this.nombre = nombre;
    }
    Perro.prototype.gritar = function () {
        return "¡Guau guau!";
    };
    // Se agrega el metodo toString() para mostrar el nombre del animal
    // en la consola al imprimir el objeto, de lo contrario muestra "[object Object]"
    Perro.prototype.toString = function () {
        return "Perro ".concat(this.nombre);
    };
    return Perro;
}());
var Gato = /** @class */ (function () {
    function Gato(nombre) {
        this.nombre = nombre;
    }
    Gato.prototype.gritar = function () {
        return "¡Miau!";
    };
    Gato.prototype.toString = function () {
        return "Gato ".concat(this.nombre);
    };
    return Gato;
}());
var Vaca = /** @class */ (function () {
    function Vaca(nombre) {
        this.nombre = nombre;
    }
    Vaca.prototype.gritar = function () {
        return "¡Muuu!";
    };
    Vaca.prototype.toString = function () {
        return "Vaca ".concat(this.nombre);
    };
    return Vaca;
}());
//3) Crear una funcion describirAnimal que reciba como parametro un objeto de tipo Animal e
// en consola "El animal [nombre del animal] hace [ruido que hace al gritar]". Hacer uso del metodo
// "gritar" y el acceso a la propiedad nombre.
function describirAnimal(animal) {
    console.log("".concat(animal.nombre, " dice: ").concat(animal.gritar()));
}
// 4) Crear una constante “perro”, una constante “vaca”, y una constante “gato” que tengan
// como valor una instancia de la clase que corresponda y tengan declarado el tipo de
// datos correspondiente.
var perro = new Perro("perro");
var vaca = new Vaca("vaca");
var gato = new Gato("gato");
// 5) Ejecutar funcion describirAnimal para cada una de las instancias creadas
describirAnimal(perro);
describirAnimal(vaca);
describirAnimal(gato);
// --------------------------------------------------------------------------------
// 6) Crear un Enum “DiasSemana” que tenga como valores los días de la semana.
var DiasSemana;
(function (DiasSemana) {
    DiasSemana["Lunes"] = "Lunes";
    DiasSemana["Martes"] = "Martes";
    DiasSemana["Mi\u00E9rcoles"] = "Mi\u00E9rcoles";
    DiasSemana["Jueves"] = "Jueves";
    DiasSemana["Viernes"] = "Viernes";
    DiasSemana["S\u00E1bado"] = "S\u00E1bado";
    DiasSemana["Domingo"] = "Domingo";
})(DiasSemana || (DiasSemana = {}));
// --------------------------------------------------------------------------------
// 7) Crear una variable que pueda contener únicamente valores de tipo número o de tipo
// string. Asignar a la variable el string “Messi”, y luego reemplazarlo por el número 10.
var jugador = "Messi";
console.log("Nombre del jugador:" + jugador);
jugador = 10;
console.log("Numero del jugador:" + jugador);
// Crear una fila para números, una fila para strings, y una fila para animales (declarando los tipos correspondientes en cada variable).
var FilaGenerica = /** @class */ (function () {
    function FilaGenerica() {
        this.elementos = [];
    }
    FilaGenerica.prototype.agregar = function (elemento) {
        this.elementos.push(elemento);
        console.log("Se agrego el elemento: ".concat(elemento));
    };
    FilaGenerica.prototype.remover = function () {
        return this.elementos.shift();
    };
    return FilaGenerica;
}());
// En la fila para animales, agregar las 3 instancias que fueron creadas con anterioridad.
// En las otras 2 filas, agregar 3 elementos a elección en cada una. Para finalizar,
// remover un elemento de cada una de las 3 filas.
var filaNumeros = new FilaGenerica();
filaNumeros.agregar(1);
filaNumeros.agregar(2);
filaNumeros.agregar(3);
var filaStrings = new FilaGenerica();
filaStrings.agregar("Hola");
filaStrings.agregar("Mundo");
filaStrings.agregar("!!!!!!");
var filaAnimales = new FilaGenerica();
filaAnimales.agregar(perro);
filaAnimales.agregar(vaca);
filaAnimales.agregar(gato);
var numeroRemovido = filaNumeros.remover();
var stringRemovido = filaStrings.remover();
var animalRemovido = filaAnimales.remover();
console.log("N\u00FAmero removido: ".concat(numeroRemovido));
console.log("String removido: ".concat(stringRemovido));
console.log("Animal removido: ".concat(animalRemovido === null || animalRemovido === void 0 ? void 0 : animalRemovido.nombre));
// --------------------------------------------------------------------------------

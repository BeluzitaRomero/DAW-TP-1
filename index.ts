//Integrantes:
// Romero Ana Belen
// Bordet Gaston

// Consignas..
// 1) Crear una interfaz “Animal” que posea el atributo “nombre”, así como también la
// definición de un método “gritar” que retorne un string que representa el ruido que
// hace el animal al gritar

interface Animal {
  nombre: string;
  gritar(): string;
}

// 2) Crear las clases “Perro”, “Gato”, y “Vaca” que implementen la interfaz “Animal”

class Perro implements Animal {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  gritar(): string {
    return "¡Guau guau!";
  }

  // Se agrega el metodo toString() para mostrar el nombre del animal
  // en la consola al imprimir el objeto, de lo contrario muestra "[object Object]"
  toString(): string {
    return `Perro ${this.nombre}`;
  }
}

class Gato implements Animal {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  gritar(): string {
    return "¡Miau!";
  }

  toString(): string {
    return `Gato ${this.nombre}`;
  }
}

class Vaca implements Animal {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  gritar(): string {
    return "¡Muuu!";
  }

  toString(): string {
    return `Vaca ${this.nombre}`;
  }
}

//3) Crear una funcion describirAnimal que reciba como parametro un objeto de tipo Animal e
// en consola "El animal [nombre del animal] hace [ruido que hace al gritar]". Hacer uso del metodo
// "gritar" y el acceso a la propiedad nombre.

function describirAnimal(animal: Animal): void {
  console.log(`${animal.nombre} dice: ${animal.gritar()}`);
}

// 4) Crear una constante “perro”, una constante “vaca”, y una constante “gato” que tengan
// como valor una instancia de la clase que corresponda y tengan declarado el tipo de
// datos correspondiente.

const perro: Perro = new Perro("perro");
const vaca: Vaca = new Vaca("vaca");
const gato: Gato = new Gato("gato");

// 5) Ejecutar funcion describirAnimal para cada una de las instancias creadas
describirAnimal(perro);
describirAnimal(vaca);
describirAnimal(gato);

// --------------------------------------------------------------------------------

// 6) Crear un Enum “DiasSemana” que tenga como valores los días de la semana.

enum DiasSemana {
  Lunes = "Lunes",
  Martes = "Martes",
  Miércoles = "Miércoles",
  Jueves = "Jueves",
  Viernes = "Viernes",
  Sábado = "Sábado",
  Domingo = "Domingo",
}

// --------------------------------------------------------------------------------

// 7) Crear una variable que pueda contener únicamente valores de tipo número o de tipo
// string. Asignar a la variable el string “Messi”, y luego reemplazarlo por el número 10.

let jugador: number | string = "Messi";
console.log("Nombre del jugador:" + jugador);
jugador = 10;
console.log("Numero del jugador:" + jugador);

// --------------------------------------------------------------------------------

// 8)Crear una clase genérica que implemente la siguiente interfaz:
// interface Fila<T> {
// agregar(elemento: T): void;
// remover(): T | undefined;
// }

interface Fila<T> {
  agregar(elemento: T): void;
  remover(): T | undefined;
}

class FilaGenerica<T> implements Fila<T> {
  private elementos: T[] = [];

  agregar(elemento: T): void {
    this.elementos.push(elemento);
    console.log(`Se agrego el elemento: ${elemento}`);
  }

  remover(): T | undefined {
    return this.elementos.shift();
  }
}

// 9) Crear una fila para números, una fila para strings, y una fila para animales (declarando los tipos correspondientes en cada variable).
const filaNumeros = new FilaGenerica<number>();
const filaStrings = new FilaGenerica<string>();
const filaAnimales = new FilaGenerica<Animal>();

// 10) En la fila para animales, agregar las 3 instancias que fueron creadas con anterioridad.
// En las otras 2 filas, agregar 3 elementos a elección en cada una. Para finalizar,
// remover un elemento de cada una de las 3 filas.

filaAnimales.agregar(perro);
filaAnimales.agregar(vaca);
filaAnimales.agregar(gato);

filaNumeros.agregar(1);
filaNumeros.agregar(2);
filaNumeros.agregar(3);

filaStrings.agregar("Hola");
filaStrings.agregar("Mundo");
filaStrings.agregar("!!!!!!");

const numeroRemovido = filaNumeros.remover();
const stringRemovido = filaStrings.remover();
const animalRemovido = filaAnimales.remover();
console.log(`Número removido: ${numeroRemovido}`);
console.log(`String removido: ${stringRemovido}`);
console.log(`Animal removido: ${animalRemovido?.nombre}`);

// --------------------------------------------------------------------------------

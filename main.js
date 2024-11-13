
 class Producto {
    constructor(nombre,valor,tipo) {
        this.nombre = nombre
        this.valor = valor
        this.tipo = tipo
    }
}

const mates = []; 

const marshall = new Producto ("Marshall", 15000, "Amplificador")
const peavey = new Producto("Peavey", 12000, "Amplificador")
const DD7 = new Producto ("DD7", 12000, "Pedal")

mates.push(marshall, peavey, DD7);


const tazas = []; 

const distortion = new Producto ("Distortion", 14000, "Pedal")
const chorus = new Producto ("Chorus", 15500, "Pedal")
const DD7t = new Producto ("DD7", 13000, "Pedal")

tazas.push(distortion, chorus, DD7t);



const porta = []; 

const ts9 = new Producto ("TS9", 14000, "Pedal")
const metalzone = new Producto ("MetalZone", 15500, "Pedal")
const marshallp = new Producto ("Marshall", 13000, "Amplificador")

porta.push(ts9, metalzone, marshallp);




/* function solicitar() {
    let nombre = prompt("Cual es tu nombre?");
    alert("Bienvenido a MateZone: " + nombre);
}
solicitar()

let opcion = prompt("Que producto estas buscando?:   \n 1= Mate \n 2= Taza \n 3 = Portapuas")
if (opcion == 1) {
let modelo = prompt("Que Mate buscas?:\n 1 = " + mates[0].nombre +  "\n 2 = " + mates[1].nombre + "\n 3 = " + mates[2].nombre)
if (modelo == 1) {
    confirm("Elegiste " + mates[0].nombre + "\n$ " + mates[0].valor + "\nTipo:" + mates[0].tipo);
}
else if (modelo == 2) {
    confirm("Elegiste " + mates[1].nombre + "\n$ " + mates[1].valor + "\nTipo:" + mates[1].tipo);
}

else if (modelo == 3) {
    confirm("Elegiste " + mates[2].nombre + "\n$ " + mates[2].valor + "\nTipo:" + mates[2].tipo);
}
}
else if (opcion == 2) {
    let modelo = prompt("Que Taza buscas?:\n 1 = " + tazas[0].nombre +  "\n 2 = " + tazas[1].nombre + "\n 3 = " + tazas[2].nombre)
if (modelo == 1) {
    confirm("Elegiste " + tazas[0].nombre + "\n$ " + tazas[0].valor + "\nTipo:" + tazas[0].tipo);
}
else if (modelo == 2) {
    confirm("Elegiste " + tazas[1].nombre + "\n$ " + tazas[1].valor + "\nTipo:" + tazas[1].tipo);
}

else if (modelo == 3) {
    confirm("Elegiste " + tazas[2].nombre + "\n$ " + tazas[2].valor + "\nTipo:" + tazas[2].tipo);
}
} else if (opcion == 3) {
    let modelo = prompt("Que Portapuas buscas?:\n 1 = " + porta[0].nombre +  "\n 2 = " + porta[1].nombre + "\n 3 = " + porta[2].nombre)
    if (modelo == 1) {
        confirm("Elegiste " + porta[0].nombre + "\n$ " + porta[0].valor + "\nTipo:" + porta[0].tipo);
    }
    else if (modelo == 2) {
        confirm("Elegiste " + porta[1].nombre + "\n$ " + porta[1].valor + "\nTipo:" + porta[1].tipo);
    }
    
    else if (modelo == 3) {
        confirm("Elegiste " + porta[2].nombre + "\n$ " + porta[2].valor + "\nTipo:" + porta[2].tipo);
    };
} else {
    alert("Opción no válida.");
}




console.log(mates)
console.log(tazas)
console.log(porta)*/



/* const preguntas = document.getElementById("pregunta")



preguntas.addEventListener("submit",(evento) =>{
    evento.preventDefault();
    const nombre = document.getElementById("nombre").value
    const email = document.getElementById("email").value
    const pregunta = document.getElementById("pregunta").value

    alert(`Gracias, ${nombre} tu pregunta fue enviada, recibiras una respuesta en el e-mail ${email}`)  

})


*/
//carrito

const listaMates = document.getElementById("mates")
const Carrito = document.getElementById("carrito")
const Total = document.getElementById("total")

console.log(Total)



let totalCompra = 0 ;



    mates.forEach((mate) => {
        const item = document.createElement("div");
        item.classList.add("mate")

        item.innerHTML= `
                <h2> ${mate.nombre} </h2>
                <p> ${mate.tipo} </p>
                <p> Precio: $${mate.valor} </p>
                <button class="agregar-mate"> Agregar al Carro </button>
                     `
        const botonAgregarMate = item.querySelector(".agregar-mate")
        botonAgregarMate.addEventListener("click",() => agregarCarrito(mate))

    listaMates.appendChild(item)
}
);

function agregarCarrito(mate) {
    const itemCarrito = document.createElement("li")
    itemCarrito.textContent = `
                       Mate ${mate.nombre} ----> $${mate.valor}
    `
    Carrito.appendChild(itemCarrito)

    totalCompra += mate.valor;
    Total.textContent = `Total : $${totalCompra}`;

}

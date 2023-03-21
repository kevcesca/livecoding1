console.log("Estoy vivo");

let arrayFinal = ["Mochila","si","no","flores", "Camisa", "Pantalon", "Lentes", "Comida", "Videojuegos"];

let listaDeProductos = document.getElementById('listaDeProductos');

console.log(arrayFinal)

const nuevoArray = () =>{
    
    

    arrayFinal.forEach(element => {
        const row = document.createElement("li");

        row.innerHTML = `${element}`;

    console.log(element)

    listaDeProductos.appendChild(row);
    });
    
    
}

nuevoArray(arrayFinal);
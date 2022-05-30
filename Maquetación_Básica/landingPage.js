
let nombre= document.getElementById("nombre")
let correo= document.getElementById("correo")
let origen= document.getElementById("origen")
let destino= document.getElementById("destino")
let fecha= document.getElementById("fecha")

// aclarar tema de variables dentro o fuera de funciones

let arrayDatos= []


function informacion(){

    let _nombre= nombre.value;
    let _correo= correo.value;
    let _origen= origen.value;
    let _destino= destino.value; 
    let _fecha= fecha.value;

    console.log(_nombre);

    let info= { Nombre: _nombre,
                Correo: _correo,
                Origen: _origen,
                Destino: _destino,
                Fecha: _fecha}

    arrayDatos.push(info);
    console.log(arrayDatos);
}

let arrayDatosFiltrados=[]

// esta bien la funcion mostrar??

// function mostrar(){

//     for (let i=0; i<arrayDatos.length; i++){
        
//         if (arrayDatos[i].Destino.toLowerCase() =="canarias" || 
//         arrayDatos[i].Destino.toLowerCase() =="mallorca" || 
//         arrayDatos[i].Destino.toLowerCase() =="galicia"){

//             arrayDatosFiltrados.push(arrayDatos[i])
//         }
//     }
//     console.log(arrayDatosFiltrados);
// }

// // porque me da error??

function mostrar(){
    let lista= document.getElementById("lista")

    lista.innerHTML=   `<tr>
                            <th class="fila1">Nombre</th>
                            <th class="fila1">Correo</th>
                            <th class="fila1">Origen</th>
                            <th class="fila1">Destino</th>
                            <th class="fila1">Fecha</th>
                        </tr>`

    for (let i=0; i<arrayDatos.length; i++){
        
        if (arrayDatos[i].Destino.toLowerCase() =="canarias" ||
        arrayDatos[i].Destino.toLowerCase() == "mallorca" || 
        arrayDatos[i].Destino.toLowerCase() =="galicia"){

            // el simbolo del dolar es para concatenar
            //realmente los tr son las filas y los th son las columnas
                
            lista.innerHTML+=  `<tr>
                                    <th class="fila2">${arrayDatos[i].Nombre}</th>
                                    <th class="fila2">${arrayDatos[i].Correo}</th>
                                    <th class="fila2">${arrayDatos[i].Origen}</th>
                                    <th class="fila2">${arrayDatos[i].Destino}</th>
                                    <th class="fila2">${arrayDatos[i].Fecha}</th>
                            
                                </tr>`
        }
    }
}








let nombre= document.getElementById("nombre")
let correo= document.getElementById("correo")
let origen= document.getElementById("origen")
let destino= document.getElementById("destino")
let fecha= document.getElementById("fecha")

// aclarar tema de variables dentro o fuera de funciones

let arrayDatos= []

function informacion(){

    console.log("hola")
    // let nombre= document.getElementById("nombre")
    // let correo= document.getElementById("correo")
    // let origen= document.getElementById("origen")
    // let destino= document.getElementById("destino")
    // let fecha= document.getElementById("fecha")

    let _nombre= nombre.value;
    let _correo= correo.value;
    let _origen= origen.value;
    let _destino= destino.value; 
    let _fecha= fecha.value;

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

function mostrar(){

    for (let i=0; i<arrayDatos.length; i++){
        
        if (arrayDatos[i].Destino.toLowerCase() =="canarias" || "mallorca" || "galicia"){
            arrayDatosFiltrados.push(arrayDatos[i])
        }
    }
    console.log(arrayDatosFiltrados);
}

// porque me da error??

function mostrar(){
    let lista= document.getElementById("lista")

    for (let i=0; i<arrayDatos.length; i++){
        
        if (arrayDatos[i].Destino.toLowerCase() =="canarias" || "mallorca" || "galicia"){
                
            lista.innerHTML+=   "<tr>
                                    <th>Nombre</th>
                                    <th>Correo</th>
                                    <th>Origen</th>
                                    <th>Destino</th>
                                    <th>Fecha</th>
                                </tr>
                                <tr>
                                    <th>arrayDatos[i].Nombre</th>
                                    <th>arrayDatos[i].Correo</th>
                                    <th>arrayDatos[i].Origen</th>
                                    <th>arrayDatos[i].Destino</th>
                                    <th>arrayDatos[i].Fecha</th>
                            
                                </tr>"
        }
    }
}








let nombre= document.getElementById("nombre")
let empresa= document.getElementById("empresa")
let correo= document.getElementById("correo")
let telefono= document.getElementById("telefono")

let arrayInfo= []

function formulario(){

    let _nombre= nombre.value
    let _empresa= empresa.value
    let _correo= correo.value
    let _telefono= telefono.value

    let info=   {Nombre: _nombre,
                Empresa: _empresa,
                Correo: _correo,
                Telefono: _telefono
                }
    
    arrayInfo.push(info)  
    console.log(arrayInfo);
}
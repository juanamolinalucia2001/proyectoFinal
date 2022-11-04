// const contenedorProyectos = document.getElementById('contenedor-proyectos')
var app={};
var listaProyectos = datos =>{
    console.log(datos)
    app.proyectos = datos;
    let html = ""
    
    app.proyectos.map(proyecto =>{
        
        for(let propiedad of Object.keys(proyecto)){
            html+='<div class="contenido-proyecto">'
            html+='<div class="header-proyecto">'+propiedad+': '+proyecto[propiedad]+'</li>';
            html+='</div></div>'
        }
    })


    document.getElementById('contenedor-proyectos').innerHTML = html;

}


// proyectos.forEach((proyecto) => {
//     const div = document.createElement('div')
//     div.classList.add('contenido-proyecto')
//     div.innerHTML = `
//     <div class="header-proyecto">
//     <h1 class="h1-nombre">${proyecto.nombre}</h1>
//     <button class="boton-unirse">Unirme</button>
//     <div class="contador">${proyecto.miembros}</div>
// </div>
// <div class="caja-contenido">
//     <p>nombre del creador: by gabo</p>  
//     <p>${proyecto.tematica}</p>
//     <p>${proyecto.descripcion}</p>
//     <p>${proyecto.metas}</p>  
//     <p>${proyecto.conocimiento}</p>
//     <p>${proyecto.plazo}</p>
    
// </div>

//     `
//     contenedorProyectos.appendChild(div)

// })



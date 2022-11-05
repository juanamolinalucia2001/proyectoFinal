const contenedorProyectos = document.getElementById('contenedor-proyectos');
const contenedor_mis_proyecto=document.getElementById('con_contenedor-container');
const contenedor_proyectoUnido=document.getElementById('contenedor_proyecto_unido');
function cargarProyectos() {
    fetch('Assets/js/proyecto_lista.json')
        .then(res => res.json())
        .then(data =>{
            data.forEach(proyecto => {
                const div = document.createElement('div')
                div.classList.add('contenido-proyecto')
                div.innerHTML = `
                <div class="header-proyecto">
                    <h1 class="h1-nombre">${proyecto.nombre}</h1>
                    <button class="boton-unirse">Unirme</button>
                    <div class="contador">${proyecto.miembros}</div>
                </div>
                <div class="caja-contenido">
                    <p>nombre del creador: by gabo</p>  
                    <p>${proyecto.tematica}</p>
                    <p>${proyecto.descripcion}</p>
                    <p>${proyecto.metas}</p>  
                    <p>${proyecto.conocimiento}</p>
                    <p>${proyecto.plazo}</p>
                
                </div> 
                `
                    contenedorProyectos.appendChild(div)
            });
        });
}

function misProyectos(){
    fetch('Assets/js/proyecto_lista.json')
        .then(res => res.json())
        .then(data =>{
            data.forEach(proyecto => {
                const div = document.createElement('div')
                div.classList.add('contenido-proyecto')
                div.innerHTML = `
                <div class="header-proyecto">
                    <h1 class="h1-nombre">${proyecto.nombre}</h1>
                    <button class="boton-chat"><a class="a-user" href="chat.html"><i class="fa fa-comment-dots"></i></a></button>
                    <button class="boton-modificar"><i class="fa fa-pen"></i></button>
                    <button class="boton-eliminar"><i class="fa fa-trash"></i></button>
                    <button class="boton-unirse">Unirme</button>
                    <div class="contador">${proyecto.miembros}</div>
                </div>
                <div class="caja-contenido">
                    <p>nombre del creador: by gabo</p>  
                    <p>${proyecto.tematica}</p>
                    <p>${proyecto.descripcion}</p>
                    <p>${proyecto.metas}</p>  
                    <p>${proyecto.conocimiento}</p>
                    <p>${proyecto.plazo}</p>
                
                </div> 
                `
                con_contenedor_mis_proyecto.appendChild(div)
            });

        
        
        });
}

function miembroDeProyectos(){
    fetch('Assets/js/proyecto_lista.json')
        .then(res => res.json())
        .then(data =>{
            data.forEach(proyecto => {
                const div = document.createElement('div')
                div.classList.add('contenido-proyecto')
                div.innerHTML = `
                <div class="header-proyecto">
                    <h1 class="h1-nombre">${proyecto.nombre}</h1>
                    <button class="boton-chat"><a class="a-user" href="chat.html"><i class="fa fa-comment-dots"></i></a></button>
                    <button class="boton-user-admin"><i class="fa fa-user-tie"></i></i></button>
                    <button class="boton-salir-proyecto"><i class="fa fa-user-slash"></i></button>
                    <div class="contador">${proyecto.miembros}</div>
                </div>
                <div class="caja-contenido">
                    <p>nombre del creador: by gabo</p>  
                    <p>${proyecto.tematica}</p>
                    <p>${proyecto.descripcion}</p>
                    <p>${proyecto.metas}</p>  
                    <p>${proyecto.conocimiento}</p>
                    <p>${proyecto.plazo}</p>
                
                </div> 
                `
                contenedor_proyectoUnido.appendChild(div)
            });

        
        
        });
}


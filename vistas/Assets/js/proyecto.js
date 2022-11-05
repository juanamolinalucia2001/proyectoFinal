const contenedorProyectos = document.getElementById('contenedor-proyectos');

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

cargarProyectos();


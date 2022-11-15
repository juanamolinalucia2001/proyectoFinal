miembros_lista= document.getElementById('users-list');
contenedor_chats=document.getElementById('chat-window');

//hacer consulta de nombres de los miembros que pertenecen al chat
function cargarMiembros() {
    fetch('Assets/js/proyecto_lista.json')
        .then(res => res.json())
        .then(data =>{
            data.forEach(proyecto => {
                miembros_lista.insertAdjacentHTML('beforeend', `<p>${proyecto.tematica}</p>`);
                

            });
        });
}

cargarMiembros();

//cargo chat que exiten
function cargarChats(){
    fetch('Assets/js/chat.json')
        .then(res => res.json())
        .then(data =>{
            data.forEach(chat => {
                const div = document.createElement('div')
                div.classList.add('chats')
                div.innerHTML = `
                <div class="mensaje entra">
                    <h5>${chat.id_miembro}</h5>
                    <p>${chat.chat}</p>
                </div>
                </div> 
                `
                contenedor_chats.appendChild(div)
                

            });
        });
}

cargarChats();
function validar(){
    let form = document.getElementById('form');
    let email= document.getElementById('correo').value;
    let textCorreo= document.getElementById('textoCorreo');
    let nombre= document.getElementById('nombre').value;
    let textNombre=document.getElementById('textoNombre')
    let clave=document.getElementById('clave').value;
    let textoClave=document.getElementById('textoClave')
    let usuario=document.getElementById('usuario').value;
    let textoUsu=document.getElementById('textoUsu')
    let parttern= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
    
    if(email.match(parttern)){
        form.classList.add('valid')
        textCorreo.innerHTML="Tu mail es valido"
        textCorreo.style.color="green"
    }else{
        form.classList.remove('valid')
        textCorreo.innerHTML="Tu mail no es valido"
        textCorreo.style.color="red"
    }

    if(nombre.length > 6){
        form.classList.add('valid')
        textNombre.innerHTML="Tu nombre es valido"
        textNombre.style.color="green"
    }else{
        form.classList.remove('valid')
        textNombre.innerHTML="Tu nombre no es valido"
        textoNombre.style.color="red"
    }

    if(clave.match(regex) ){
        form.classList.add('valid')
        textoClave.innerHTML="Tu clave es valida"
        textoClave.style.color="green"
    }else{
        form.classList.remove('valid')
        textoClave.innerHTML="Tu clave no es valida"
        textoClave.style.color="red"
    }

    if(usuario.length>8){
        form.classList.add('valid')
        textoUsu.innerHTML="Tu nombre de user es valido"
        textoUsu.style.color="green"
    }else{
        form.classList.remove('valid')
        textoUsu.innerHTML="tu nombre de user no es valido"
        textoUsu.style.color="red"
    }

}

function checkbox1(){
    document.getElementById('checkbox1').style.display='block'
}
function checkbox2(){
    document.getElementById('checkbox2').style.display='block'
}
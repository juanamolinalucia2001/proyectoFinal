class  login extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML=`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="Assets/css/estilo-home.css">
            <link rel="stylesheet" href="Assets/css/estilo-modal.css">
        </head>
        <ul>  
            <li class="wea">
                <input type="checkbox" id="btn-modal">
                <label for="btn-modal" class="lbl-modal">unirme a proyecto</label>
                <!-- empieza modal -->
                <div class="modal">
                    <div class="contenedor">
                        <label for="btn-modal">X</label>
                        <div class="container-login">
                            <p class="p-login">Login</p>
                            <input type="text" placeholder="Ingresa tu usuario" name="uname" required class="submit">
                            <input type="password" placeholder="Ingresa tu contraseña" name="psw" required class="submit">                    <button type="submit" class="boton">Ingresar</button>
                            <p class="p-regis">No sos miembro?,<a href="registro.html" id="a">Registate Aquí</a></p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>`
    }
}
window.customElements.define('login-component',login)
class  Menu extends HTMLElement{
    constructor(){
        super();
      
    }
    connectedCallback(){
        this.innerHTML=`
        <!DOCTYPE html>
        <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="Assets/css/estilo-home.css">
        <link rel="stylesheet" href="Assets/css/estilo-modal.css">
        <script src="https://kit.fontawesome.com/eb1dfef847.js" crossorigin="anonymous"></script>
    </head>
    <header class="header">
        <div class="logo-header">
            <a href="home.html"><img src="Assets/img/logo1.png" alt=""></a>
        </div>
        <div class="nav-menu">
            <input type="checkbox" id="check">    
            <label for="check" class="checkbtn">
                <i class="menu-icon"><img src="Assets/img/menú-30.svg" alt=""></i>
            </label>
            <ul>
                <li class="nav-menu--li"><a class="nav-menu--li-a" href="home.html">Home</a></li>
                <li class="nav-menu--li"><a class="nav-menu--li-a" href="info.html">Info</a></li>
                <li class="nav-menu--li"><a class="nav-menu--li-a" href="contacto.html">Contacto</a></li>
                <li class="nav-menu--li"><a class="nav-menu--li-a" href="perfilUsuario.html"><i class="fa fa-user"></i></a></li>
            </ul>
        </div>
    </header>`
    }
   
}
window.customElements.define('menu-component',Menu)
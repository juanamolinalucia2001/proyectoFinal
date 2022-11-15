from operator import methodcaller
from flask import Flask # Importamos Flask
from flask import render_template
from flask import g, flash
from flask import abort, request, redirect, url_for
from flask_nav import Nav
from flask_nav.elements import *


app = Flask(__name__)

nav = Nav(app)
@nav.navigation('menu')
def create_navbar():
    home_view=View('Home','homepage')
    info_view=View('Info','info')
    contacto_view=View('Contacto','contacto')
    perfil_view=View('Perfil','perfilUsuario')
    return Navbar('mysitio',home_view,info_view,contacto_view,perfil_view)



@app.route('/')
def index():
    return render_template('base.html')


@app.route('/home/')
def home():
    return render_template('home.html')

@app.route('/info/')
def info():
    return render_template('info.html')

@app.route('/contacto/')
def contacto():
    return render_template('contacto.html')

@app.route('/perfilUsuario/')
def perfil():
    return render_template('perfilUsuario.html')

if __name__ == '__main__':
    app.run()
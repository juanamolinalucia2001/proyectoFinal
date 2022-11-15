from operator import methodcaller
from flask import Flask  # Importamos Flask
from flask import abort, flash, g, redirect, render_template, request, url_for
from flask_bootstrap import Bootstrap
import sys
if sys.version_info.major == 3 and sys.version_info.minor >= 10:
    import collections
    setattr(collections, "MutableMapping", collections.abc.MutableMapping)
from flask_nav import Nav
from flask_nav.elements import *

app = Flask(__name__)
nav = Nav(app)

@nav.navigation('menu')
def create_navbar():
    home_view=View('Home','home')
    info_view=View('Info','info')
    contacto_view=View('Contacto','contacto')
    perfil_view=View('Perfil','perfil')
    registro_view=View('Registro','registro')
    return Navbar('mysitio',home_view,info_view,contacto_view,perfil_view,registro_view)


@app.route('/')
def index():
    return render_template('base.html')

@app.route('/homepage/')
def home():
    return render_template('home.html')

@app.route('/registro/')
def registro():
    return render_template('registro.html')

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
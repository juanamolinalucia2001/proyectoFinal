from operator import methodcaller
from flask import Flask # Importamos Flask
from flask import render_template
from flask import g, flash
from flask import abort, request, redirect, url_for
from flask_nav import Nav
from flask_nav.elements import  Navbar,Subgroup,View




app=Flask(__name__)

nav=Nav(app)
@nav.navigation('menu')
def create_navbar():
    home_view=View('home','homepage')
    info_view=View('info','info')
    contacto_view=View('contacto','contacto')
    perfil_view=View('perfil','perfilUsuario')



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

# @app.route('/contacto/')
# def contacto():
#     return render_template('contacto.html')


if __name__=="__main__":
    app.run()
    
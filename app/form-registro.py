from flask_wtf import FlaskForm
from wtforms import *
from wtforms.validators import *

class FormAlta(FlaskForm):
    nombre_completo = StringField("Ingresa tu nombre completo", validators=[DataRequired()])
    fecha_nac = StringField("Ingresa tu fecha de nacimiento", validators=[DataRequired()])
    nombre_user = IntegerField("Ingresa tu nombre de usuario", validators=[DataRequired()])
    contrasenia = PasswordField("Ingresa tu contraseña", validators=[DataRequired()])
    contrasenia2 = PasswordField("Repeti tu Contraseña", validators=[DataRequired(), EqualTo('contrasenia', message="Las contraseñas no coinciden")])
    email = EmailField("Ingresa tu email", validators=[DataRequired()])
    profesion = StringField("Ingresa tu profesion")
    estudio = StringField("Ingresa tus estudios")

    submit = SubmitField("Aceptar")
const user = document.querySelector('#user')
let users = []
const contrasena = document.querySelector('#contrasena')
let contra = []

const user2 = document.querySelector('#user2')
let users2 = []
const contrasena2 = document.querySelector('#contrasena2')
let contra2 = []

const boton1 = document.querySelector('.boton1')
const boton2 = document.querySelector('.boton2')

const login1 = document.querySelector('.login1')
const login2 = document.querySelector('.login2')

const enlace = document.querySelector('#enlace')

boton1.addEventListener('click', e=>{
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const patron = /\d+/;

    // nombre
    const nombre = document.querySelector('.nombre').value
    if (patron.test(nombre)) { 
        alert('El nombre no puede contener caracteres numéricos')
        return false;
    }
    if (nombre.length < 3) {
        alert("El nombre no cumple con los caracteres mínimos")
        return false;
    } else if (nombre.length > 15) {
        alert("El nombre es demasiado largo");
        return false;
    }

    //apellido
    const apellido = document.querySelector('.apellido').value
    if (patron.test(apellido)) { 
        alert('El nombre no puede contener caracteres numéricos')
        return false;
    }
    if (apellido.length < 3) {
        alert("El nombre no cumple con los caracteres mínimos")
        return false;
    } else if (apellido.length > 15) {
        alert("El nombre es demasiado largo");
        return false;
    }
    
    //correo
    const correo = document.querySelector('.correo').value

    if(!patronCorreo.test(correo)){
        alert('Verifica el correo electronico')
        return false
    }

    users.push(user.value)
    contra.push(contrasena.value)
    alert("Registro exitoso")
    
    login1.style.display = "none"
    login2.style.display = "flex"
    console.log(users)
    console.log(contra)
})

boton2.addEventListener('click', e=>{
    users2.push(user2.value)
    contra2.push(contrasena2.value)
    console.log(users2)
    console.log(contra2)

    if ((users[0] == user2.value) && (contra[0] == contrasena2.value) ){
        alert("Ingreso de sesion exitoso")
        enlace.href = "../index.html"
    }
    else{
        alert("Comprueba que el usuario y la contraseña coincidan")
        enlace.href = "#"
    }
})

const form = document.getElementById('form')
const login = document.getElementById('login')

const username = document.getElementById('username')
const password = document.getElementById('password')


const formIsValid = {
    username: false,
    password: false,
   
}
//prevenir el envio autom
form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateForm()
})

username.addEventListener('change', (e) => {
    if(username.value.trim().length > 0) formIsValid.username = true
   
})

password.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) formIsValid.password = true
})

//OTRA FORMA DE VALIDAR
username.oninput= () => {
    if(isNaN(username.value)){
        username.style.color ="green";
    } else {username.style.color ="red";}
}
const validateForm = () => {
 
    //RECORRO EL OBJ PARA VALIDAR
    const formValues = Object.values(formIsValid)
    const valid = formValues.findIndex(value => value == false)
    if(valid == -1) form.submit()
    else alert('nombre o contraseña incorrecto')
}


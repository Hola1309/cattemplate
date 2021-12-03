const loginSwitch = document.getElementById('loginSwitch')
const RegisterSwitch = document.getElementById('RegisterSwitch')
const Switch = document.getElementById('Switch')
const Email = document.getElementById('email')
const Frgpsw = document.getElementById('frgpsw')
const Logbutton = document.getElementById('logbutton')
const Regbutton = document.getElementById('regbutton')
const Form = document.getElementById('form')

loginSwitch.addEventListener('click', (event) => {
    if (loginSwitch.className == 'loginSwitch') {
        loginSwitch.className = 'loginSwitch active'
        RegisterSwitch.className = 'RegisterSwitch'
        Email.className = 'emaiil hide'
        Frgpsw.className = 'frgpsw'
        Regbutton.className = 'registerButton hide'
        Logbutton.className = 'loginButton'
        Form.action = "./login.html"
    }
})
RegisterSwitch.addEventListener('click', (event) => {
    if (RegisterSwitch.className == 'RegisterSwitch') {
        RegisterSwitch.className = 'RegisterSwitch active'
        loginSwitch.className = 'loginSwitch'
        Email.className = ''
        Frgpsw.className = 'frgpsw hide'
        Regbutton.className = 'registerButton'
        Logbutton.className = 'loginButton hide'
        Form.action = "./register.html"
    }
})

Logbutton.addEventListener('click', (event) => {
    console.log('qeq')
})

function show_hide_password(target) {
    var input = document.getElementById('password-input');
    if (input.getAttribute('type') == 'password') {
        target.classList.add('view');
        input.setAttribute('type', 'text');
    } else {
        target.classList.remove('view');
        input.setAttribute('type', 'password');
    }
    return false;
}
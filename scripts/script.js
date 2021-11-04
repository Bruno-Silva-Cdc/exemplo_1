const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmaSenha = document.getElementById("confirmaSenha");
const btn = document.getElementById("b1");

let nomeValido = undefined;
let emailValido = undefined;
let senhaValido = undefined;
let csenhaValido = undefined;


btn.addEventListener("click", event => {
    checkdata()

    //  !== Estritamente não igual
    if (nomeValido !== true || emailValido !== true || senhaValido !== true || csenhaValido !== true) {
        event.preventDefault(); //parar a propagação do evento através do DOM.
        console.log('dados não conferem')
    }
});


function checkdata() {
    const valorNome = nome.value.trim();
    const valorEmail = email.value.trim();
    const valorSenha = senha.value.trim();
    const valorConfirmaSenha = confirmaSenha.value.trim();

    if (valorNome === "") {
        seterror(nome, "Informe o Nome*")
        nomeValido = false;
    } else {
        setnoerror(nome)
        nomeValido = true;
    }

    if (valorEmail === "") {
        seterror(email, "Informe o Email*")
        emailValido = false;
    } else if (!remail(valorEmail)) {
        seterror(email, "Informe um Email válido")
        emailValido = false;
    } else {
        setnoerror(email)
        emailValido = true;
    }

    if (valorSenha === "") {
        seterror(senha, "Informe a Senha*")
        senhaValido = false;
    } else {
        setnoerror(senha)
        senhaValido = true;
    }

    if (valorConfirmaSenha === "") {
        seterror(confirmaSenha, "Informe a Senha*")
        csenhaValido = false;
    } else if (pval !== vpval) {
        seterror(vpass, "Senhas não conferem")
        csenhaValido = false;
    } else {
        setnoerror(vpass)
        csenhaValido = true;
    }
}

function seterror(input, message) {
    const formparts = input.parentElement;
    formparts.className = 'form-parts error';
    const small = formparts.querySelector('small')
    small.innerText = message;
}

function setnoerror(input) {
    const formparts = input.parentElement;
    formparts.className = 'form-parts noerror';
}

function remail(valorEmail) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(valorEmail)
}
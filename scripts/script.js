const nome = document.getElementById("nome")
const email = document.getElementById("email")
const senha = document.getElementById("senha")
const confirmaSenha = document.getElementById("confirmaSenha")
const btn = document.getElementById("b1")

let n = undefined;
let em = undefined;
let p = undefined;
let vp = undefined;

btn.addEventListener("click", event => {
    checkdata()

    //  !== Estritamente não igual
    if (n !== true || em !== true || p !== true || vp !== true) {
        event.preventDefault(); //parar a propagação do evento através do DOM.
        console.log('dados não conferem')
    }
});

function checkdata() {
    const nval = nome.value.trim();
    const eval = email.value.trim();
    const pval = senha.value.trim();
    const vpval = confirmaSenha.value.trim();

    if (nval === "") {
        seterror(nome, "Informe o Nome*")
        n = false;
    } else {
        setnoerror(nome)
        n = true;
    }

    if (eval === "") {
        seterror(email, "Informe o Email*")
        em = false;
    } else if (!remail(eval)) {
        seterror(email, "Informe um Email válido")
        em = false;
    } else {
        setnoerror(email)
        em = true;
    }

    if (pval === "") {
        seterror(senha, "Informe a Senha*")
        p = false;
    } else {
        setnoerror(senha)
        p = true;
    }

    if (vpval === "") {
        seterror(confirmaSenha, "Informe a Senha*")
        vp = false;
    } else if (pval !== vpval) {
        seterror(vpass, "Senhas não conferem")
        vp = false;
    } else {
        setnoerror(vpass)
        vp = true;
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

function remail(eval) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(eval)
}
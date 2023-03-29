function validar() {
    if(input_usuario.value == ""){
        alert("O campo de usuário está vazio")
        input_usuario.focus()
    }
    else if(input_usuario.value == "ct67ca@bosch.com"){
        close("index.html")
        open("main.html")  
    }
    else{
        alert("Usuário errado")
        input_usuario.focus()
    }
}

    
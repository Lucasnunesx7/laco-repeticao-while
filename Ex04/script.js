let nome = "";
let sobrenome = "";

// Validação do Nome
while (nome == "" || nome == " ") {
    nome = prompt("Digite seu primeiro nome:");
    
    if (nome == "" || nome == " ") {
        alert("Você não digitou seu nome, tente novamente.");
    }
}

// Validação do Sobrenome
while (sobrenome == "" || sobrenome == " ") {
    sobrenome = prompt("Digite seu sobrenome:");
    
    if (sobrenome == "" || sobrenome == " ") {
        alert("Você não digitou seu sobrenome, tente novamente.");
    }
}

alert("Nome completo registrado: " + nome + " " + sobrenome);
let numero = -1; 

while (numero < 0) {
    numero = parseFloat(prompt("Digite um número positivo:"));
    
    if (numero < 0) {
        alert("Você digitou um número negativo! Tente novamente.");
    }
}

alert("Você digitou o número válido: " + numero);

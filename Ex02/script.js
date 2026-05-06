let soma =0; 
let contador = 0;
let nota = 0;

while (nota >= 0) {
    nota = parseFloat(prompt("Digite uma nota (0 a 10) ou um negativo para sair:"));
    if (nota >= 0 && nota <= 10) {
        soma = soma + nota;
        contador = contador + 1;
        } 
    
    if (nota > 10) {
        alert("Nota inválida! Digite valores entre 0 e 10.");
    }
}

if (contador > 0) {
    let media = soma / contador;
    alert("A média das notas é: " + media);
} else {
    alert("Nenhuma nota foi registrada.");
}
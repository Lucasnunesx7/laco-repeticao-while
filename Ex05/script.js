let saldo = 500.00;

while (saldo > 0) {
    let saque = parseFloat(prompt(`Saldo disponível: R$ ${saldo.toFixed(2)}
Quanto deseja sacar?`));

    if (saque > 0 && saque <= saldo) {
        let saldoAnterior = saldo;
        saldo = saldo - saque;

        let valorEsgotado = (saldo == 0);

        alert(`Saque de R$ ${saque.toFixed(2)} realizado!
Saldo anterior: R$ ${saldoAnterior.toFixed(2)}
Sobra atual: R$ ${saldo.toFixed(2)}`);

        if (valorEsgotado) {
            alert("Atenção: Seu saldo foi esgotado com este saque!");
        }
    } 
    else if (saque > saldo) {
        alert("Saldo insuficiente!");
    }
}
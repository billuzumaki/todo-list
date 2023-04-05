function calcularMontante() {
    let valorInicial = parseFloat(document.getElementById("valor-inicial").value);
    let taxaJuros = parseFloat(document.getElementById("taxa-juros").value);
    let tempo = parseFloat(document.getElementById("tempo").value);
    let depositoMensal = parseFloat(document.getElementById("deposito-mensal").value);
  
    let montante = calcularJurosCompostos(valorInicial, taxaJuros, tempo, depositoMensal);
    document.getElementById("montante-final").textContent = montante;
  }
  
  function calcularJurosCompostos(valorInicial, taxaJuros, tempo, depositoMensal) {
    let montante = valorInicial;
    for (let i = 1; i <= tempo * 12; i++) {
      montante += depositoMensal;
      montante *= 1 + taxaJuros/100/12;
    }
    return montante.toFixed(2);
  }
  
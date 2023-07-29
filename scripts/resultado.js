document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("profitChart").getContext("2d");

  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
      datasets: [
        {
          label: "Valor Recebido",
          data: [0, 0, 0, 0, 0],
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
        {
          label: "Valor Investido",
          data: [0, 0, 0, 0, 0],
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        }
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  // Event listener para atualizar o gráfico quando a caixa de seleção é alterada
  var selectModalidade = document.getElementById("modalidade");
  selectModalidade.addEventListener("change", function () {
    var selectedOption = selectModalidade.value;
    //Preencher com valores fictícios para cada opção
    if (selectedOption === "megaSena") {
        myChart.data.datasets[1].backgroundColor = "rgba(4,136,89,255)";
        myChart.data.datasets[1].borderColor = "rgba(4,136,89,255)";
        myChart.data.datasets[0].data = [1000, 1200, 1400, 1600, 1800];
        myChart.data.datasets[1].data = [100, 300, 500, 700, 900];
    } else if (selectedOption === "lotoFacil") {
        myChart.data.datasets[1].backgroundColor = "rgba(164,52,140, 0.5)";
        myChart.data.datasets[1].borderColor = "rgba(164,52,140, 0.5)";
        myChart.data.datasets[0].data = [540, 690, 730, 821, 1021];
        myChart.data.datasets[1].data = [413, 544, 103, 79, 654];
    } else if (selectedOption === "quina") {
        myChart.data.datasets[1].backgroundColor = "rgba(75,35,107, 0.5)";
        myChart.data.datasets[1].borderColor = "rgba(75,35,107, 0.5)";
        myChart.data.datasets[0].data = [250, 521, 865, 452, 987];
        myChart.data.datasets[1].data = [521, 690, 865, 987, 452];
    } else{
        myChart.data.datasets[1].backgroundColor = "rgba(171,14,19,0.5)";
        myChart.data.datasets[1].borderColor = "rgba(135,75,148,0.5)";
        myChart.data.datasets[0].data = [1500, 1300, 700, 2900, 3100];
        myChart.data.datasets[1].data = [700, 900, 500, 2000, 4000];
    }

    myChart.update();
  });
});


  
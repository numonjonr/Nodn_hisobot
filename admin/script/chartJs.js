    document.getElementById("pagruzka").innerText = localStorage.getItem("pagruzka") || "2132 ";
    document.getElementById("podpagruzka").innerText = localStorage.getItem("podpagruzka") || "3620 ";
    document.getElementById("vigruzka").innerText = localStorage.getItem("vigruzka") || "1212 ";
    document.getElementById("podvigruzka").innerText = localStorage.getItem("podvigruzka") || "2360";


window.addEventListener('DOMContentLoaded', () => {
  const ctx1 = document.getElementById('chart-1').getContext('2d');
  const myChart = new Chart(ctx1, {
      type: 'polarArea',
      data: {
          labels: ['kritiy', 'platforma', 'poluvagon', 'sisterna', 'sementavoz', 'Prochiy' ],
          datasets: [{
              label: 'Oylar',
              data: [60, 80, 100, 120, 90, 70],
              backgroundColor: [
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',


              ],
          }],
      },
      options: {
          responsive: true
      }
  });
});


    const lineCtx = document.getElementById('chart-2').getContext('2d');
    new Chart(lineCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Pogruzka',
            data: [30, 40, 50, 35, 60, 90],
            borderColor: 'green',
            fill: false
          },
          {
            label: 'Vigruzka',
            data: [20, 60, 90, 50, 70, 100],
            borderColor: 'red',
            fill: false
          }
        ]
      },
      options: {
        responsive: true
      }
    });


 const ctx = document.getElementById('barChartPGVG').getContext('2d');

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [
            "To'qimachi", "Xamza", "Toshkent", "Chuqursoy", "Angren", "Jaloyir", "Sergeli"
          ],
          datasets: [
            {
              label: 'Pogruzka',
              data: [350, 300, 500, 350, 490, 420, 440],
              backgroundColor: 'rgba(54, 162, 235, 0.7)',
              stack: 'combined',
              barThickness: 20
            },
            {
              label: 'Vigruzka',
              data: [400, 210, 210, 120, 420, 600, 470],
              backgroundColor: 'rgba(255, 99, 132, 0.7)',
              stack: 'combined',
              barThickness: 20
            }
          ]
        },
        options: {
          indexAxis: 'y', // Gorizontal bar chart
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Stansiyalar bo‘yicha yuk miqdori'
            },
            legend: {
              position: 'top'
            }
          },
          scales: {
            x: {
              stacked: true,
              title: {
                display: true,
                text: 'Yuk miqdori (tonnalarda)'
              }
            },
            y: {
              stacked: true
            }
          }
        }
      });
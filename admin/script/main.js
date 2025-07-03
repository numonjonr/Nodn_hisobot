let chart = null;

async function fetchData() {
  const from = document.getElementById('fromDate').value;
  const to = document.getElementById('toDate').value;

  try {
    const res = await fetch(`/api/statistics?from=${from}&to=${to}`);
    const result = await res.json();

    // Umumiy statistikani ko‘rsatish
    const totalPogruzka = result.reduce((sum, item) => sum + item.pogruzka, 0);
    const totalVigruzka = result.reduce((sum, item) => sum + item.vigruzka, 0);
    document.getElementById('pogruzkaCount').innerText = `Pogruzka: ${totalPogruzka}`;
    document.getElementById('vigruzkaCount').innerText = `Vigruzka: ${totalVigruzka}`;

    // Grafik uchun ma'lumotlar
    const labels = result.map(item => item.date);
    const pogData = result.map(item => item.pogruzka);
    const vigData = result.map(item => item.vigruzka);

    // Eski grafikni yo‘q qilish
    if (chart) chart.destroy();

    const ctx = document.getElementById('lineChart').getContext('2d');
    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Pogruzka',
            data: pogData,
            borderColor: 'green',
            fill: false
          },
          {
            label: 'Vigruzka',
            data: vigData,
            borderColor: 'red',
            fill: false
          }
        ]
      },
      options: {
        responsive: true
      }
    });

  } catch (error) {
    console.error('Xatolik:', error);
    alert("Ma'lumotlarni olishda xatolik yuz berdi.");
  }
}

// Dastlabki ishga tushirish
fetchData();

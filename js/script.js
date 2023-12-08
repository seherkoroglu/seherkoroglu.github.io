document.addEventListener('DOMContentLoaded', function () {
    // Örnek veriler
    var salesData = {
        labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'],
        datasets: [{
            label: 'Ürün Satışları',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [100, 300, 90, 75, 400, 150, 800, 900, 1000, 1200, 1300, 1500] // Buradaki verileri kendi verilerinizle değiştirin
        }]
    };

    // Grafik oluştur
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: salesData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

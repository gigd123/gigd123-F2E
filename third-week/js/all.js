
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Revenue', 'Cost', 'Income'],
          ['6 JUNE',  7300,    600,    6100],
          ['7 JUNE',  7000,    600,    5400],
          ['8 JUNE',  5500,    3700,   1900],
          ['9 JUNE',  8800,    3000,   4000],
          ['10 JUNE', 5900,    2400,   3800],
          ['11 JUNE', 6200,    500,    5300],
          ['12 JUNE', 8000,    900,    6500],
          ['13 JUNE', 7300,    2000,   4900]
        ]);

        var options = {
          legend: 'none',
          series: {
            0: { color: '#7ED321' },
            1: { color: '#D0021B' },
            2: { color: '#4A90E2' },
            },
          animation:{
            duration: 1000,
            easing: 'out'
          }
        };
        var chart = new google.visualization.LineChart(document.getElementById('chart'));

        chart.draw(data, options);
      }

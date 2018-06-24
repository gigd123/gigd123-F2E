
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['6 JUN',  1000,400],
          ['7 JUN',  1170,460],
          ['8 JUN',  660,1120],
          ['9 JUN',  1030,540],
          ['10 JUN',  1330,740],
          ['11 JUN',  1080,640],
          ['12 JUN',  800,840],
          ['13 JUN',  630,940]
        ]);

        var options = {
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart'));

        chart.draw(data, options);
      }

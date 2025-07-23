google.charts.load('current', { packages: ['timeline'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  const container = document.getElementById('timeline');
  const chart = new google.visualization.Timeline(container);
  const dataTable = new google.visualization.DataTable();

  dataTable.addColumn({ type: 'string', id: 'Cliente' });
  dataTable.addColumn({ type: 'string', id: 'Etapa' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });
  dataTable.addColumn({ type: 'string', role: 'style' });

  dataTable.addRows([
    ['BIL TEXTIL', '(1d)', new Date(2025, 0, 27), new Date(2025, 0, 28), 'color: #1b4e69'],
    ['BIL TEXTIL', '(25d)', new Date(2025, 0, 28), new Date(2025, 2, 3), 'color: #0097b2'],
    ['BIL TEXTIL', '(4d)', new Date(2025, 2, 3), new Date(2025, 2, 7), 'color: #9ebcd3'],
    ['BIL TEXTIL', '(37d)', new Date(2025, 2, 7), new Date(2025, 3, 13), 'color: #38b6ff'],

    ['MOVIRES GROSSI', '(21d)', new Date(2025, 3, 1), new Date(2025, 3, 22), 'color: #1b4e69'],
    ['MOVIRES GROSSI', '(5d)', new Date(2025, 3, 22), new Date(2025, 3, 27), 'color: #0097b2'],
    ['MOVIRES GROSSI', '(1d)', new Date(2025, 3, 27), new Date(2025, 3, 28), 'color: #9ebcd3'],
    ['MOVIRES GROSSI', '(41d)', new Date(2025, 3, 28), new Date(2025, 4, 28), 'color: #38b6ff']
  ]);

  const options = {
    timeline: {
      showBarLabels: true,
      groupByRowLabel: true,
      barLabelStyle: { fontSize: 12, color: '#fff', bold: true },
      rowLabelStyle: { fontSize: 13, color: '#000', bold: true },
      barHeight: 30,
      avoidOverlappingGridLines: false
    },
    hAxis: {
      format: 'dd/MM/yyyy',
      textStyle: { fontSize: 11 }
    },
    height: 600
  };

  chart.draw(dataTable, options);
}

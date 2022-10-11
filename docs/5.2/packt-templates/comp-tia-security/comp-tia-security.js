//Mobile sidebar toggle
document.querySelector(".nav-toggle").addEventListener('click', () => {
  var element = document.getElementById("mainContainer");
  element.classList.toggle("isActive");
})

//Column chart
google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['', 'Direct', 'Amazon', 'Other'],
    ['Jan', 1200, 2050, 900],
    ['Feb', 1600, 900, 1200],
    ['Mar', 900, 1200, 1500],
    ['Apr', 1400, 2200, 1600],
    ['May', 400, 700, 1750],
    ['Jun', 2450, 550, 1520],
    ['Jul', 850, 1700, 1750],
    ['Aug', 1600, 1450, 1950],
    ['Sep', 1920, 1600, 650],
    ['Oct', 0, 0, 0],
    ['Nov', 0, 0, 0],
    ['Dec', 0, 0, 0]
  ]);

  var options = {
    chart: {
      // title: 'Company Performance',
      // subtitle: 'Sales, Expenses, and Profit: 2014-2017',
    },
    bars: 'vertical',
    vAxis: {format: 'decimal'},
    height: 500,
    colors: ['#f97141', '#34444e', '#995010'],
    legend: { position: 'none' }
  };
  
  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}

//Pie chart
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart1);
function drawChart1() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Amazon Print',   3320],
    ['Amazon Kindle',  1410],
    ['Direct Print',   2123],
    ['Direct Digital', 2432],
    ['Others',         2432]
  ]);

  var options = {
    //title: 'My Daily Activities',
    pieHole: 0.6,
    height: 400,
    colors: ['#2b2b2b', '#087ffc', '#ff6600', '#b306f2', '#995010'],
    legend: { position: 'none' },
    pieSliceText: 'none'
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}
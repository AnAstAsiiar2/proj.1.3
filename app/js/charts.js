
//window.onload=function(){
  var user;
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET','js/data.json', true);
  xhttp.send();
  xhttp.onload = function(){
     if(this.status==200){
      user = JSON.parse(this.responseText);
      console.log(user.days.split(" "));
      ctx = document.getElementById('BarChart').getContext('2d');
  var gradient = ctx.createLinearGradient(200, 65, 200, 85);
  gradient.addColorStop(0, '#44f1ea');
  gradient.addColorStop(1, '#9534ca');
  console.log(user.days.split(" "));
  data = {
    labels: user.days.split(" "),
    datasets: [{
      data: [300, 50, 200, 500, 250, 150, 40],
      backgroundColor: ['#1f2125', '#1f2125', '#1f2125', gradient, '#1f2125', '#1f2125', '#1f2125'],
      borderWidth:0
    }]
  };
config = {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      indexAxis: 'y',
      scales:{
        myScale:{
          yAxis:{
            grid:{
              display:false
            }
          }
        },
        yAxes:[{
          grid:{
            //drawTicks:false
          },
          ticks:{
            stepSize:200
          }
        }],
        xAxes:[{
          //display:false,
          grid:{
            display:false
          },
          ticks:{
            
          }
        }]
      },
      legend:{
       display: false
      }
    },
  };
myChart = new Chart(ctx,config);
}
     
  }
    var data = {
        labels: [
          'Wordpress',
          'Psd',
          'Java',
          'Css',
          'Html',
          'Joomla'
        ],
        datasets: [{
          label: 'Product sold',
          data: [25,25,30,25,25],
          fill: true,
          backgroundColor: 'rgba(111, 231, 221, 0.6)',
          rotation: 43
        }, {
          label: 'Product Returned',
          data: [25,25,25,25,25],
          fill: true,
          backgroundColor: 'rgba(51, 143, 221, 0.8)',
          rotation: 90
          },{
          label: 'Got Review',
          data: [31,29,29,28,5],
          fill: true,
          backgroundColor: 'rgba(240, 26, 99, 0.8)',
          rotation: 30
        }]
      };
    var config = {
        type: 'radar',
        data: data,
        options: {
          responsive: true,
          legend:{
            position: 'bottom',
            labels:{
                usePointStyle:true,
                padding: 20,
                pointStyle:"circle"
            }
          },
          scale:{
           ticks:{
            callback: function(){ return '';}
           }
        },
          elements: {
            point:{
                radius: 0
            }
          }
        },
      };
    var ctx = document.getElementById('RadarChart').getContext('2d');
    var myChart = new Chart(ctx,config);

    data = {
      labels: [
        'United States',
        'Germany',
        'Australia',
        'England'
      ],
      datasets: [{
        data: [45,23,18,12, 12],
        backgroundColor: ['#6fe7dd', '#338fdd', '#6539a5', '#d11d5b', '#212127'],
        borderWidth:0
      }]
    };
  config = {
      type: 'doughnut',
      data: data,
      options: {
        responsive: true,
        legend:{
          position: 'right',
          align: 'start',
          labels:{
              usePointStyle:true,
              pointStyle:"circle"
          }
        }
      },
    };
  ctx = document.getElementById('DoughnutChart').getContext('2d');
  myChart = new Chart(ctx,config);
  
  
ctx = document.getElementById('LineChart').getContext('2d');
   gradient = ctx.createLinearGradient(600, 300, 600, 390);
   gradient.addColorStop(0, 'rgba(30,79,91,0.1)');
   gradient.addColorStop(1, 'rgba(44,45,58,0.1)');
  data = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    datasets: [{
      data: [50, 100, 75, 150, 90, 130, 115, 160, 100, 220, 130, 260],
      pointRadius: [0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5],
      backgroundColor: gradient,
      borderColor: ['#b5255c', '#932e6d', '#5d3780', '#5a449c', '#3f62a6', '#2d6a93', '#1dadd7', '#1a9dbc', '#1cb1c2', '#25ae9e', '#28c3a9'],
      tension: 0,
      pointBorderWidth: 4,
      pointBorderColor: '#28dcbc'
    }]
  };
  config = {
    type: 'line',
    data: data,
    options: {
      responsive:true,
      legend: {
        display:false
      },
      scales: {
        yAxes: [{
          ticks:
          {
            beginAtZero:true,
            stepSize: 50,
            callback: function (value, index, ticks) {
              return value + 'K';
            }
          }
        }]
      }
    }
  };
  myChart = new Chart(ctx, config);
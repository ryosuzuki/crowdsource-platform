/**
* MonitorController
* @namespace crowdsource.monitor.controllers
 * @author ryosuzuki
 */
 (function () {
  'use strict';

  angular
  .module('crowdsource.monitor.controllers')
  .controller('MonitorController', MonitorController);

  MonitorController.$inject = ['$window', '$location', '$scope', 'Monitor', '$filter'];

  /**
  * @namespace MonitorController
  */
  function MonitorController($window, $location, $scope, Monitor, $filter) {
    var vm = $scope;
    vm.workers = [];
    vm.workers = Monitor.getWorkers();
    vm.filter = undefined;
    vm.order = undefined;

    vm.showModal = showModal;
    vm.getPercent = getPercent;
    vm.orderTable = orderTable;
    vm.selectStatus = selectStatus;
    vm.getStatusName = getStatusName;
    vm.getStatusColor = getStatusColor;

    function selectStatus (status) {
      vm.filter = vm.filter !== status ? status : undefined ;
    }

    function orderTable (key) {
      vm.order = vm.order === key ? '-'+key : key;
    }

    function getPercent (workers, status) {
      status |= 0;
      var complete = workers.filter( function (worker) {
        return worker.status == status;
      })
      return Math.floor((complete.length / workers.length) * 100);
    }

    function showModal (worker) {
      vm.selectedWorker = worker;
      $('#myModal').modal();
    }

    function getStatusName (status) {
      return status == 2 ? 'pending' : (status == 1 ? 'in progress' : 'complete');
    }

    function getStatusColor (status) {
      return status == 2 ? 'gray' : (status == 1 ? 'dark' : 'green');
    }

    var green = '#77dd77';
    var dark  = '#708090';
    var gray  = '#cfcfc4';
    var yellow= '#fdfd96';
    var red   = '#ff6961';

    vm.workChartSeries = [{
      name: 'Work per hour',
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, ]
    }];

    vm.funnelChartSeries = [{
      name: 'Untrusted',
      data: [2, 2],
      color: dark,
    }, {
      name: 'Trusted',
      data: [5, 3],
      color: green,
    }]

    vm.pieChartSeries = [{
      type: 'pie',
      name: 'Browser share',
      data: [ ['Good', 45.0], ['Contested', 26.8], {　name: 'Missed',　y: 12.8,　sliced: true,　selected: true　}, ['Disabled', 8.5] ]
    }];

    vm.workChartConfig = {
      options: {
        chart: {
          type: 'column'
        },
        plotOptions: {
          column: {
            groupPadding: 0,
          },
          series: {
            color: '#77dd77',
          }
        },
      },
      title: {
        text: 'Work per Hour'
      },
      xAxis: {
        categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
        ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Rainfall (mm)'
        }
      },
      series: vm.workChartSeries,
    }

    vm.funnelChartConfig = {
      options: {
        chart: {
          type: 'bar'
        },
        plotOptions: {
          series: {
            stacking: 'normal',
          }
        },
      },
      title: {
        text: 'Contributor Funnel'
      },
      xAxis: {
        categories: ['Quiz', 'Work']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Total'
        }
      },
      legend: {
        reversed: true
      },
      series: vm.funnelChartSeries,
    }

    vm.pieChartConfig = {
      options: {
        chart: {
          type: 'pie',
          options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
              enabled: true,
              format: '{point.name}'
            },
            colors: [green, dark, gray, yellow, red],
          }
        },
      },
      title: {
        text: 'Test Questions'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      series: vm.pieChartSeries,
    }

  }

})();

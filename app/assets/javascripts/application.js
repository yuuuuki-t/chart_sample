// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require Chart.min
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

window.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: gon.labels,
      datasets: [
        {
          label: "score",
          data: gon.scores,
          backgroundColor: [
            "rgba(255,99,132,0.2)",
            "rgba(54,162,235,0.2)",
            "rgba(255,206,86,0.2)",
            "rgba(75,192,192,0.2)",
            "rgba(153,102,255,0.2)",
            "rgba(255,159,64,0.2)",
          ],
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54,162,235,1)",
            "rgba(255,206,86,1)",
            "rgba(75,192,192,1)",
            "rgba(153,102,255,1)",
            "rgba(255,159,64,1)",
          ],
          borderWidth: 1,
        },
      ],
    },
  });
});

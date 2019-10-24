<script>
  import { Bar } from 'vue-chartjs'
  export default {
    extends: Bar,
    data () {
      return {
        datacollection: {
          labels: ['Bruno', 'Lais', 'Jessica', 'Luna', 'Gustavo'],
          datasets: [
            {
              label: 'Sucesso',
              backgroundColor: '#36a2eb',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              data: [100, 120, 130, 110, 118]
            },
            {
              label: 'Não Finalizado',
              backgroundColor: '#f87979',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              data: [40, 10, 30, 50, 30]
            }
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      this.renderChart(this.datacollection, this.options)
    }
  }
</script>
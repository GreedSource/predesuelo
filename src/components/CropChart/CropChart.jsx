// ####################################################################################################################################
   import React from 'react'
   import {Bar, Doughnut} from 'react-chartjs-2'
   import styles from './CropChart.module.css'

// ####################################################################################################################################
function getRandomColor() {
   var letters = '0123456789ABCDEF'.split('');
   var color = '#';
   for (var i = 0; i < 6; i++ ) {
       color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}
   const CropChart = ({data}) => {
      const doughnutChart = (
         
         data.doughnut
            ? (
               <Doughnut
                  data={{
                     labels: Object.keys(data.doughnut),
                     datasets: [{
                        label: 'niveles',
                        backgroundColor: [
                           'rgba(0, 0, 255, 0.5)', 
                           'rgba(0, 255, 0, 0.5)',
                           'rgba(255, 0, 0, 0.5)',
                           getRandomColor(),
                           getRandomColor(),
                           getRandomColor(),
                        ],
                        data: Object.values(data.doughnut)
                     }]
                  }}
                  options={{
                     legend: {display: true},
                     title: {display: true, text:`Datos actuales de muesta`},
                  }}
               />
            ) : null
      )
      const barChart = (
         data.bars
            ? (
               <Bar
                  data={{
                     labels: ['nitrogen', 'phosphorus', 'potassium', 'sulfur', 'calcium', 'magnesium'],
                     datasets: [{
                        label: 'niveles',
                        backgroundColor: [
                           'rgba(0, 0, 255, 0.5)', 
                           'rgba(0, 255, 0, 0.5)',
                           'rgba(255, 0, 0, 0.5)',
                           'rgba(0, 0, 255, 0.5)', 
                           'rgba(0, 255, 0, 0.5)',
                           'rgba(255, 0, 0, 0.5)'
                        ],
                        data: [data.bars.nitrogen, data.bars.phosphorus, data.bars.potassium, data.bars.sulfur, data.bars.calcium, data.bars.magnesium]
                     }]
                  }}
                  options={{
                     legend: {display: false},
                     title: {display: true, text:`Datos actuales de muesta`},
                     scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                  }}
               />
            ) : null
      )

      return (
         <div className={styles.container}>
            {data.bars ? barChart : doughnutChart}
         </div>
      )
   }

// ####################################################################################################################################
   export default CropChart

// ####################################################################################################################################

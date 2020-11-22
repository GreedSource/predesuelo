// ####################################################################################################################################
   import React from 'react'
   import {Bar} from 'react-chartjs-2'
   import styles from './CropChart.module.css'

// ####################################################################################################################################
   const CropChart = ({data}) => {
      const barChart = (
         data
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
                        data: [data.nitrogen, data.phosphorus, data.potassium, data.sulfur, data.calcium, data.magnesium]
                     }]
                  }}
                  options={{
                     legend: {display: false},
                     title: {display: true, text:`Datos actuales de muesta`}
                  }}
               />
            ) : null
      )

      return (
         <div className={styles.container}>
            {data ? barChart : null}
         </div>
      )
   }

// ####################################################################################################################################
   export default CropChart

// ####################################################################################################################################

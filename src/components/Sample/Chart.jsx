// ####################################################################################################################################
   import React from 'react'
   import {Bar} from 'react-chartjs-2'
   import styles from './Chart.module.css'
   import SimpleCard from './Card'

// ####################################################################################################################################
   function parseData(data) {
      var matriz = {};
      data.faltantes.map((item) => {
         var name = Object.keys(item);
         matriz[name] ? matriz[name].push(Object.values(item)[0]) : matriz[name] = [Object.values(item)[0]];
         return name
      })
      
      data.recomendado.map((item) => {
         var name = Object.keys(item);
         matriz[name] ? matriz[name].push(Object.values(item)[0]) : matriz[name] = [Object.values(item)[0]];
         return name
      })
      return matriz
   }

   function createData(data) {
      var dataSet = {
         "faltante" : [],
         "recomendado": []
      }
      Object.keys(data).map((item, i) => {
         //console.log(data[item])
         dataSet.faltante.push(data[item][0])
         dataSet.recomendado.push(data[item][1])
         return item
      })
      return dataSet
   }

   const Chart = ({data}) => {
      //console.log(Object.keys(data))
      //console.log(data)
      var dataSet = null;
      if (data){
         data = parseData(data)
         dataSet = createData(data)
      }
      const barChart = (
         
         data
            ? (
               <Bar
                  data={{
                     labels: Object.keys(data),
                     datasets: [
                        {
                           label: "Faltante",
                           backgroundColor: "#ffc213",
                           data: dataSet.faltante
                        },
                        {
                           label: "Recomendado",
                           backgroundColor: "#8bc53f",
                           data: dataSet.recomendado
                        }
                     ]
                  }}
                  options={{
                     legend: {display: true},
                     title: {display: true, text:`Datos actuales de muestra`},
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
            {data ? barChart : <SimpleCard/>}
         </div>
      )
   }

// ####################################################################################################################################
   export default Chart

// ####################################################################################################################################

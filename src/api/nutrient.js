// ####################################################################################################################################
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookie = new Cookies()

// ####################################################################################################################################
   //const url = 'http://localhost:3700/api/auth/'
   const url = 'https://api-predesuelo.herokuapp.com/api/nutrient/'

// ####################################################################################################################################
   export {
      fetchData,
      insertData,
   }

// ####################################################################################################################################

   async function fetchData(){ // ===============================================================================
    
      try {
         const {data} = await axios.get(`${url}`, {
             headers: {
                'Authorization' :  `Bearer ${cookie.get('token')}`
             }
         })

         return data
      } catch (error) {
         console.log(error)
      }
   }

   async function insertData(values, key){
      try {
         //console.log(values)
         const {data} = await axios.post(`${url}${key}`, values, {
            headers: {
               'Authorization' :  `Bearer ${cookie.get('token')}`
            }
         })
         return data
      } catch (error) {
         console.log(error)
      }
   }
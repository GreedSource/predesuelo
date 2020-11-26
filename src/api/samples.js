// ####################################################################################################################################
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookie = new Cookies()

// ####################################################################################################################################
   //const url = 'http://localhost:3700/api/auth/'
   const url = 'https://api-predesuelo.herokuapp.com/api/sample/'

// ####################################################################################################################################
   export {
      fetchSamples,
      insertData,
      updateData,
      deleteRecord
   }

// ####################################################################################################################################

   async function fetchSamples(){ // ===============================================================================
    
      try {
         const {data} = await axios.get(`${url}user`, {
             headers: {
                'Authorization' :  `Bearer ${cookie.get('token')}`
             }
         })

         return data.sample
      } catch (error) {
         console.log(error)
      }
   }

   async function insertData(values){
      try {
         // Browserconsole.log(values)
         const {data} = await axios.post(`${url}`, values, {
            headers: {
               'Authorization' :  `Bearer ${cookie.get('token')}`
            }
         })
         return data._id
      } catch (error) {
         console.log(error)
      }
   }

   async function updateData(values, _id){
      try {
         const {data} = await axios.put(`${url}${_id}`, values, {
            headers: {
               'Authorization' :  `Bearer ${cookie.get('token')}`
            }
         })
         return data._id
      } catch (error) {
         console.log(error)
      }
   }

   async function deleteRecord(_id){
      try {
         const {data} = await axios.delete(`${url}${_id}`, {
            headers: {
               'Authorization' :  `Bearer ${cookie.get('token')}`
            }
         })
         return data._id
      } catch (error) {
         console.log(error)
      }
   }

// ####################################################################################################################################